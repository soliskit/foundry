# Foundry

A starter for a new project, with a blank Playbook, decision and evidence records, and a working document-shell presence and heading check. No application is included.

## Start a project

1. Choose **Use this template** on GitHub and create a new repository.
2. Rename the package and replace this README with the project's introduction.
3. Fill in `docs/charter.md`, `docs/build-plan.md` and `docs/specification.md`. Keep unresolved decisions open.
4. Record decisions in `docs/decision-log.md` and sourced facts in `docs/evidence-record.md`. Keep personal details, message references and private proof outside the public repository.
5. Add the application's code and meaningful tests. Run `npm ci` and `npm test` before opening a pull request.
6. Configure the new repository's settings before building, using the checklist below. Template contents do not copy repository settings.

The included `test` check checks document-shell presence and headings only. It is not proof of application behavior, security or readiness. Replace or extend it with the project's own checks, keeping the required check name stable.

## Repository settings checklist

Do this in the new repository's **Settings** after creating it from the template.

1. **General > Pull Requests**: turn off merge commits and rebase merging, leaving squash merging only. Set the squash commit message to "Pull request title". Turn on "Automatically delete head branches".
2. **Security > Advanced Security**: enable Secret Protection and Push protection.
3. **Branches > Add branch protection rule** for `main`: require a pull request before merging with 0 approvals, and turn on "Do not allow bypassing the above settings". Leave force pushes and deletions off.
4. Open a pull request or push once so the `test` workflow runs. Then edit the `main` rule: require status checks to pass, add the `test` check (GitHub Actions), and require branches to be up to date before merging.
5. If the repository is a template, turn on "Template repository" under **General**.

## Layout

- `docs/charter.md`: purpose, limits and ordered milestones.
- `docs/build-plan.md`: phases, exit checks and work lanes.
- `docs/specification.md`: numbered requirements and failure behavior.
- `docs/decision-log.md`: decision, effect and open or settled status.
- `docs/evidence-record.md`: source, date checked and verified or unproven status.
- `.github/workflows/test.yml`: push and pull-request checks with read-only permissions and cancellation of replaced runs.
- `test/template.test.js`: checks that the five document shells are present.

Changes after setup go through pull requests. A copied template does not authorize implementation, merging or spending.
