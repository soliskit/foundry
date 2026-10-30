# Foundry

A starter for a new project, with a blank Playbook (Charter, Roadmap, How It Works), decision and evidence records, and working checks for the document shells, pull request titles and pull request descriptions. No application is included.

## Start a project

1. Choose **Use this template** on GitHub and create a new repository.
2. Rename the package and replace this README with the project's introduction.
3. Fill in `docs/charter.md`, `docs/roadmap.md`, and `docs/how-it-works.md`. Keep unresolved decisions open.
4. Record requirements in `docs/requirements.md`, decisions in `docs/decisions.md`, and sourced facts in `docs/evidence-record.md`. Keep personal details, message references, and private proof outside the public repository.
5. Point the checks at the new repository: set its name in `.github/description_config.json` and `.github/title_config.json`, and as `EXPECTED_REPO` in `.github/workflows/pr-title.yml` and `.github/workflows/pr-description.yml`. Choose the project's decision-record letter in `.github/description_config.json` (F belongs to Foundry itself) and adapt the class definitions in `.github/pull_request_template.md` to the project's code layout. `docs/contributing.md` covers the commit and pull request writing standard.
6. Add the application's code and meaningful tests. Run `npm ci` and `npm test` before opening a pull request.
7. Configure the new repository's settings before building, using the checklist below. Template contents do not copy repository settings.

The included `test` check checks document-shell presence and headings only. It is not proof of application behavior, security, or readiness. Replace or extend it with the project's own checks, keeping the required check name stable.

## Repository settings checklist

Configure the repository settings after creating it from the template. The Actions email option below is an account setting, not a repository setting.

1. **General > Pull Requests**: turn off merge commits and rebase merging, leaving squash merging only. Set the squash commit message to "Pull request title". Turn on "Automatically delete head branches".
2. **Security > Advanced Security**: enable Secret Protection and Push protection.
3. **Rules > Rulesets > New branch ruleset** targeting the default branch (`main`), set to Active with an empty bypass list: restrict deletions, block force pushes, and require a pull request before merging with 0 approvals.
4. Open a pull request or push once so the `test` workflow runs, and open one pull request so the `PR title` and `PR description` checks post their statuses. Then edit the ruleset: require status checks to pass, add the `test`, `PR title` and `PR description` checks, and require branches to be up to date before merging.
5. If the repository is a template, turn on "Template repository" under **General**.
6. In your account notification settings, under System > Actions, select Email, do not select Only notify for failed workflows, and save. Successful and failed workflow runs you trigger can then email you. This account-level preference is not copied by the template. Verify delivery after an eligible run finishes; the setting alone does not prove that an email arrived. See [GitHub's Actions notification guidance](https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-github-actions-notifications).

## Layout

- `docs/charter.md`: purpose, limits, and ordered milestones.
- `docs/roadmap.md`: phases, exit checks, and work lanes.
- `docs/requirements.md`: numbered requirements, each with the check that proves it.
- `docs/how-it-works.md`: how the project works and its failure behavior.
- `docs/process.md`: how every project is planned and recorded.
- `docs/decisions.md`: decision, effect, and open or settled status.
- `docs/evidence-record.md`: source, date checked, and verified or unproven status.
- `.github/pull_request_template.md`: the required pull request description.
- `.github/ISSUE_TEMPLATE/`: the bug and feature forms.
- `.github/commit-template.txt`: the commit message template; setup is in `docs/contributing.md`.
- `.github/workflows/test.yml`: push and pull-request checks with read-only permissions and cancellation of replaced runs.
- `.github/workflows/pr-title.yml` and `.github/workflows/pr-description.yml`: trusted-base checks for the pull request title and description.
- `test/template.test.js`: checks that the six document shells are present.
- `docs/contributing.md`: the commit and pull request writing standard.
- `docs/commit-guide-source.md` and `docs/licenses/`: the source and license for the commit guide.

Changes after setup go through pull requests.

