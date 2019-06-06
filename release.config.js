module.exports = {
	branch: 'master',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/changelog',
			{
				changelogFile: 'CHANGELOG.md'
			}
		],
		[
			'@semantic-release/npm',
			{
				tarballDir: 'dist'
			}
		],
		[
			'@semantic-release/git',
			{
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}' // eslint-disable-line no-template-curly-in-string
			}
		],
		[
			'@semantic-release/github',
			{
				assets: 'dist/*.tgz'
			}
		]
	]
};
