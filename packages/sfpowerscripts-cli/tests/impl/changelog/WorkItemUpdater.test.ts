import { expect } from '@jest/globals';
import WorkItemUpdater from '../../../src/impl/changelog/WorkItemUpdater';
import { Release } from '../../../src/impl/changelog/ReleaseChangelogInterfaces';
const path = require('path');
import * as fs from 'fs-extra';

describe('Given a WorkItemUpdater', () => {
    const resourceDir: string = path.join(__dirname, 'resources');

    it('should update latestRelease with work items', () => {
        new WorkItemUpdater(latestRelease, ['NGV-[0-9]{3,4}']).update();

        expect(latestRelease).toEqual(
            fs.readJSONSync(
                path.join(resourceDir, 'ExpectedResults', 'should_update_latestRelease_with_work_items.json'),
                { encoding: 'UTF-8' }
            )
        );
    });

    let latestRelease: Release = {
        names: ['release-1'],
        buildNumber: 1,
        workItems: {},
        artifacts: [
            {
                name: 'ESBaseCodeLWC',
                from: '15cb14b',
                to: '2dbd257',
                version: '50.0.5.6',
                latestCommitId: 'c8dbab13',
                commits: [
                    {
                        commitId: 'c8dbab13',
                        date: '2021-01-25T11:01:55+11:00',
                        author: 'Azlam',
                        message: 'NGV-626 Add persist credential to PR (#6)',
                        body:
                            '* Add persist credential to PR\r\n\r\n* switch to alpha\r\n\r\n* Increment versions\r\n\r\n* Revert "Increment versions"\r\n\r\nThis reverts commit 39a68617d8e92de46604b883b6681e8022d2e403.\r\n\r\n* Test abs path\r\n\r\n* Revert "Test abs path"\r\n\r\nThis reverts commit 5ab30a8b52eddf16025acf6aec57d1bb9262549d.\r\n\r\n* Cleanup and switch to prod version of sfpowerscripts\r\n\r\nCo-authored-by: sfpowerscripts <sfpowerscripts@dxscale>\r\nCo-authored-by: Alan Ly <alan.ly@accenture.com>',
                    },
                    {
                        commitId: 'd7124579',
                        date: '2020-10-19T02:30:31-04:00',
                        author: 'Mohith Shrivastava',
                        message: "feat: winter '21 release updates (#178)",
                        body:
                            '* NGV-626 Upgrade sa11y version (#165)\r\n\r\n* Update to v50.0 api version (#164)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* update v50.0\r\n\r\n* feat: flow refactor with innvocable method (#168)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* fix class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete marketServices.cls-meta.xml\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* fix class name in perms\r\n\r\n* refactor flows to be object agnostic\r\n\r\n* fix package lock json merge\r\n\r\n* address comments\r\n\r\n* fix: refactor the reservation manager method\r\n\r\n* run prettier\r\n\r\n* update the version to 50.0\r\n\r\n* refactor: use winter21 safe nav operators for null checks (#170)\r\n\r\n* feat: refactor flows to use flow screen elements (#169)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* fix class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete marketServices.cls-meta.xml\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* fix class name in perms\r\n\r\n* refactor flows to be object agnostic\r\n\r\n* fix package lock json merge\r\n\r\n* feat: refactor flows to use flow screen elements\r\n\r\n* add jest tests for draft event\r\n\r\n* fix comments\r\n\r\n* fix: provide access for @auraenabled apex class winter21 (#172)\r\n\r\n* fix: provide access for @auraenabled apex class winter21\r\n\r\n* pretiier formatting\r\n\r\n* fix: small issues for winter 21 updates (#181)\r\n\r\n* Changed package versions to 50.0.0\r\n\r\nCo-authored-by: Alba Rivas <arivas@salesforce.com>\r\nCo-authored-by: Philippe Ozil <5071767+pozil@users.noreply.github.com>',
                    },
                    {
                        commitId: 'e4fd5b2c',
                        date: '2020-09-28T09:52:59+02:00',
                        author: 'Alba Rivas',
                        message: 'Setup sa11y and implement accessibility tests (#162)',
                        body: '',
                    },
                    {
                        commitId: '9ca5cf96',
                        date: '2020-09-04T12:10:49-04:00',
                        author: 'Mohith Shrivastava',
                        message: 'feat:object agnostic design for apex code for Customer List component (#158)',
                        body:
                            '* feat:object agnostic design for apex code for Customer List component\r\n\r\n* fix: add compound assignment operators',
                    },
                    {
                        commitId: 'e192b8b1',
                        date: '2020-08-03T18:35:26+05:30',
                        author: 'Aditya Naag',
                        message: 'Dependabot Updates (#150)',
                        body:
                            '* Bump prettier-plugin-apex from 1.5.0 to 1.6.0 (#146)\r\n\r\nBumps prettier-plugin-apex from 1.5.0 to 1.6.0.\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>\r\n\r\n* Bump @prettier/plugin-xml from 0.7.2 to 0.10.0 (#147)\r\n\r\nBumps [@prettier/plugin-xml](https://github.com/prettier/plugin-xml) from 0.7.2 to 0.10.0.\r\n- [Release notes](https://github.com/prettier/plugin-xml/releases)\r\n- [Changelog](https://github.com/prettier/plugin-xml/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/prettier/plugin-xml/compare/v0.7.2...v0.10.0)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>\r\n\r\n* Bump eslint from 7.4.0 to 7.6.0 (#145)\r\n\r\nBumps [eslint](https://github.com/eslint/eslint) from 7.4.0 to 7.6.0.\r\n- [Release notes](https://github.com/eslint/eslint/releases)\r\n- [Changelog](https://github.com/eslint/eslint/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/eslint/eslint/compare/v7.4.0...v7.6.0)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>\r\n\r\n* Bump @salesforce/sfdx-lwc-jest from 0.9.1 to 0.9.2 (#148)\r\n\r\nBumps [@salesforce/sfdx-lwc-jest](https://github.com/salesforce/sfdx-lwc-jest) from 0.9.1 to 0.9.2.\r\n- [Release notes](https://github.com/salesforce/sfdx-lwc-jest/releases)\r\n- [Changelog](https://github.com/salesforce/sfdx-lwc-jest/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/salesforce/sfdx-lwc-jest/compare/v0.9.1...v0.9.2)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>\r\nCo-authored-by: Aditya Naag <atopalli@salesforce.com>\r\n\r\n* Fixes for Prettier Version Update\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>',
                    },
                ],
            },
            {
                name: 'ESBaseStylesLWC',
                from: '15cb14b',
                to: '2dbd257',
                version: '50.0.5.6',
                latestCommitId: 'd7124579',
                commits: [
                    {
                        commitId: 'd7124579',
                        date: '2020-10-19T02:30:31-04:00',
                        author: 'Mohith Shrivastava',
                        message: "NGV-4000 feat: winter '21 release updates (#178)",
                        body:
                            '* Upgrade sa11y version (#165)\r\n\r\n* Update to v50.0 api version (#164)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* update v50.0\r\n\r\n* feat: flow refactor with innvocable method (#168)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* fix class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete marketServices.cls-meta.xml\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* fix class name in perms\r\n\r\n* refactor flows to be object agnostic\r\n\r\n* fix package lock json merge\r\n\r\n* address comments\r\n\r\n* fix: refactor the reservation manager method\r\n\r\n* run prettier\r\n\r\n* update the version to 50.0\r\n\r\n* refactor: use winter21 safe nav operators for null checks (#170)\r\n\r\n* feat: refactor flows to use flow screen elements (#169)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* fix class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete marketServices.cls-meta.xml\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* fix class name in perms\r\n\r\n* refactor flows to be object agnostic\r\n\r\n* fix package lock json merge\r\n\r\n* feat: refactor flows to use flow screen elements\r\n\r\n* add jest tests for draft event\r\n\r\n* fix comments\r\n\r\n* fix: provide access for @auraenabled apex class winter21 (#172)\r\n\r\n* fix: provide access for @auraenabled apex class winter21\r\n\r\n* pretiier formatting\r\n\r\n* fix: small issues for winter 21 updates (#181)\r\n\r\n* Changed package versions to 50.0.0\r\n\r\nCo-authored-by: Alba Rivas <arivas@salesforce.com>\r\nCo-authored-by: Philippe Ozil <5071767+pozil@users.noreply.github.com>',
                    },
                    {
                        commitId: 'e4fd5b2c',
                        date: '2020-09-28T09:52:59+02:00',
                        author: 'Alba Rivas',
                        message: 'Setup sa11y and implement accessibility tests (#162)',
                        body: '',
                    },
                ],
            },
            {
                name: 'ESObjects',
                from: '15cb14b',
                to: '2dbd257',
                version: '50.0.5.6',
                latestCommitId: '3b12d4c2',
                commits: [
                    {
                        commitId: '3b12d4c2',
                        date: '2020-02-17T11:31:08+05:30',
                        author: 'Aditya Naag',
                        message: 'Spring 20 Updates (#76)',
                        body:
                            '* Bump prettier from 1.18.2 to 1.19.1 (#56)\r\n\r\nBumps [prettier](https://github.com/prettier/prettier) from 1.18.2 to 1.19.1.\r\n- [Release notes](https://github.com/prettier/prettier/releases)\r\n- [Changelog](https://github.com/prettier/prettier/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/prettier/prettier/compare/1.18.2...1.19.1)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\n* Bump semver from 6.3.0 to 7.1.2 (#63)\r\n\r\nBumps [semver](https://github.com/npm/node-semver) from 6.3.0 to 7.1.2.\r\n- [Release notes](https://github.com/npm/node-semver/releases)\r\n- [Changelog](https://github.com/npm/node-semver/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/npm/node-semver/compare/v6.3.0...v7.1.2)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: Aditya Naag <adityanaag@gmail.com>\r\n\r\n* Bump husky from 3.0.9 to 4.2.1 (#64)\r\n\r\nBumps [husky](https://github.com/typicode/husky) from 3.0.9 to 4.2.1.\r\n- [Release notes](https://github.com/typicode/husky/releases)\r\n- [Changelog](https://github.com/typicode/husky/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/typicode/husky/compare/v3.0.9...v4.2.1)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: Aditya Naag <adityanaag@gmail.com>\r\n\r\n* Bump lint-staged from 9.4.2 to 10.0.7 (#65)\r\n\r\nBumps [lint-staged](https://github.com/okonet/lint-staged) from 9.4.2 to 10.0.7.\r\n- [Release notes](https://github.com/okonet/lint-staged/releases)\r\n- [Commits](https://github.com/okonet/lint-staged/compare/v9.4.2...v10.0.7)\r\n\r\nSigned-off-by: dependabot-preview[bot] <support@dependabot.com>\r\n\r\nCo-authored-by: Aditya Naag <adityanaag@gmail.com>\r\n\r\n* Updated Version Numbers (#66)\r\n\r\n* Removed Track Decorator (#67)\r\n\r\n* Updated Version Numbers\r\n\r\n* Removed @track where not needed\r\n\r\n* Prettier Updates (#68)\r\n\r\n* Formatted XML using Prettier (#69)\r\n\r\n* Added WITH SECURITY_ENFORCED Clause to SOQL Queries (#74)\r\n\r\n* updates for with security enforced (#73)\r\n\r\n* updates for with security enforced (#72)\r\n\r\n* updates for with security enforced (#71)\r\n\r\n* Prettier Updates\r\n\r\nCo-authored-by: Kevin Poorman <codefriar@users.noreply.github.com>\r\n\r\n* Updated Package Versions and Readme (#75)\r\n\r\nCo-authored-by: dependabot-preview[bot] <27856297+dependabot-preview[bot]@users.noreply.github.com>\r\nCo-authored-by: Kevin Poorman <codefriar@users.noreply.github.com>\r\n',
                    },
                ],
            },
            {
                name: 'ESSpaceMgmtLWC',
                from: '15cb14b',
                to: '2dbd257',
                version: '50.0.4.6',
                latestCommitId: 'd60274b3',
                commits: [
                    {
                        commitId: 'd60274b3',
                        date: '2020-11-03T10:08:08-05:00',
                        author: 'Mohith Shrivastava',
                        message: 'feat: add in app guidance (#191)',
                        body:
                            '* feat: add in app guidance\r\n\r\n* fix: prettier formatting\r\n\r\n* fix: fix the order of walk throughs\r\n\r\n* fix: Naming issues\r\n\r\n* fix: address In-App guidance issues\r\n\r\n* fix: address minor comments',
                    },
                    {
                        commitId: 'e61ffe19',
                        date: '2020-10-26T15:04:09-04:00',
                        author: 'Mohith Shrivastava',
                        message: 'fix: add order by clause (#189)',
                        body: 'NGV-6000',
                    },
                    {
                        commitId: 'd7124579',
                        date: '2020-10-19T02:30:31-04:00',
                        author: 'Mohith Shrivastava',
                        message: "feat: winter '21 release updates (#178)",
                        body:
                            '* Upgrade sa11y version (#165)\r\n\r\n* Update to v50.0 api version (#164)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* update v50.0\r\n\r\n* feat: flow refactor with innvocable method (#168)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* fix class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete marketServices.cls-meta.xml\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* fix class name in perms\r\n\r\n* refactor flows to be object agnostic\r\n\r\n* fix package lock json merge\r\n\r\n* address comments\r\n\r\n* fix: refactor the reservation manager method\r\n\r\n* run prettier\r\n\r\n* update the version to 50.0\r\n\r\n* refactor: use winter21 safe nav operators for null checks (#170)\r\n\r\n* feat: refactor flows to use flow screen elements (#169)\r\n\r\n* update api version and sfdx-jest versions\r\n\r\n* update sfdx-project.json version\r\n\r\n* updated package json\r\n\r\n* freeze api version for jests to pass\r\n\r\n* update package lock file\r\n\r\n* fix prettier issue\r\n\r\n* fix failing test\r\n\r\n* fix class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete marketServices.cls-meta.xml\r\n\r\nDelete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* Delete lower case class names\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* delete lower cases classes\r\n\r\n* fix class name in perms\r\n\r\n* refactor flows to be object agnostic\r\n\r\n* fix package lock json merge\r\n\r\n* feat: refactor flows to use flow screen elements\r\n\r\n* add jest tests for draft event\r\n\r\n* fix comments\r\n\r\n* fix: provide access for @auraenabled apex class winter21 (#172)\r\n\r\n* fix: provide access for @auraenabled apex class winter21\r\n\r\n* pretiier formatting\r\n\r\n* fix: small issues for winter 21 updates (#181)\r\n\r\n* Changed package versions to 50.0.0\r\n\r\nCo-authored-by: Alba Rivas <arivas@salesforce.com>\r\nCo-authored-by: Philippe Ozil <5071767+pozil@users.noreply.github.com>',
                    },
                    {
                        commitId: 'e4fd5b2c',
                        date: '2020-09-28T09:52:59+02:00',
                        author: 'Alba Rivas',
                        message: 'Setup sa11y and implement accessibility tests (#162)',
                        body: '',
                    },
                ],
            },
        ],
        hashId: 'c97e09b76f82d830731359abe1bab2c9c5be13a9',
    };
});
