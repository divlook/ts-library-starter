/* eslint-disable @typescript-eslint/no-var-requires */

const config = require('conventional-changelog-conventionalcommits')

/**
 * @see https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md
 */
module.exports = config({
    // issuePrefixes: ['BUG-'],
    // issueUrlFormat: 'https://jira.example.com/browse/{{prefix}}{{id}}',
    types: [
        { type: 'feat', section: 'Features' },
        { type: 'feature', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'perf', section: 'Performance Improvements' },
        { type: 'revert', section: 'Reverts' },
        { type: 'docs', section: 'Documentation', hidden: false },
        { type: 'style', section: 'Styles', hidden: true },
        { type: 'chore', section: 'Miscellaneous Chores', hidden: false },
        { type: 'refactor', section: 'Code Refactoring', hidden: false },
        { type: 'test', section: 'Tests', hidden: true },
        { type: 'build', section: 'Build System', hidden: false },
        { type: 'ci', section: 'Continuous Integration', hidden: false },
    ],
})
