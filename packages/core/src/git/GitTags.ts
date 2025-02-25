import Git from './Git';
import child_process = require('child_process');

export default class GitTags {
    constructor(private git: Git, private sfdx_package: string) {}

    /**
     * Returns list of sorted tags, belonging to package, that are reachable from HEAD and
     * follow the first parent on merge commits.
     * If there are no tags, returns empty array
     * @param sfdx_package
     */
    async listTagsOnBranch(): Promise<string[]> {
        let tags: string[] = await this.git.tag([
            `-l`,
            `${this.sfdx_package}_v*`,
            `--sort=version:refname`,
            `--merged`,
        ]);

        if (tags.length > 0) return this.filterTagsAgainstBranch(tags);
        else return tags;
    }

    private async filterTagsAgainstBranch(tags: string[]): Promise<string[]> {
        // Get full-length commit ID's on the current branch, following the first parent on merge commits
        let commits: string[] = await this.git.log([`--pretty=format:%H`, `--first-parent`]);

        // Get the tags' associated commit ID
        // Dereference (-d) tags into object IDs
        //TODO: Remove this direct usage
        let gitShowRefTagsBuffer = child_process.execSync(`git show-ref --tags -d | grep "${this.sfdx_package}_v*"`, {
            maxBuffer:5*1024*1024,
            stdio: 'pipe',
        });
        
        let gitShowRefTags = gitShowRefTagsBuffer.toString();

        let refTags: string[] = gitShowRefTags.split('\n');
        refTags.pop(); // Remove last empty element

        // Filter ref tags, only including tags that point to the branch
        // By checking whether all 40 digits in the tag commit ID matches an ID in the branch's commit log
        let refTagsPointingToBranch: string[] = refTags.filter((refTag) => commits.includes(refTag.substring(0,40)));

        // Only match the name of the tags pointing to the branch
        refTagsPointingToBranch = refTagsPointingToBranch.map(
            (refTagPointingToBranch) => refTagPointingToBranch.match(/(?:refs\/tags\/)(.*)(?:\^{})$/)[1]
        );

        // Filter the sorted tags - only including tags that point to the branch
        let tagsPointingToBranch: string[] = tags.filter((tag) => refTagsPointingToBranch.includes(tag));

        return tagsPointingToBranch;
    }


    public async getVersionFromLatestTag(): Promise<string> {
        let version: string;

        let tags = await this.listTagsOnBranch();
        let latestTag = tags.pop();

        if (latestTag) {
            let match: RegExpMatchArray = latestTag.match(
                /^.*_v(?<version>[0-9]+\.[0-9]+\.[0-9]+(\.[0-9]+|\.LATEST|\.NEXT)?)$/
            );
            if (match) version = this.substituteBuildNumberWithPreRelease(match.groups.version);
            else throw new Error(`Failed to find valid tag for ${this.sfdx_package}`);
        } else throw new Error(`Failed to find latest tag for ${this.sfdx_package}`);

        return version;
    }

    private substituteBuildNumberWithPreRelease(packageVersionNumber: string) {
        let segments = packageVersionNumber.split('.');

        if (segments.length === 4) {
            packageVersionNumber = segments.reduce((version, segment, segmentsIdx) => {
                if (segmentsIdx === 3) return version + '-' + segment;
                else return version + '.' + segment;
            });
        }

        return packageVersionNumber;
    }
}
