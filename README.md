# Foundry

A starter for a new project, with a blank Playbook, decision and evidence records, and a working document-shell presence and heading check. No application is included.

## Start a project

1. Choose **Use this template** on GitHub and create a new repository.
2. Rename the package and replace this README with the project's introduction.
3. Fill in `docs/charter.md`, `docs/build-plan.md` and `docs/specification.md`. Keep unresolved decisions open.
4. Record decisions in `docs/decision-log.md` and sourced facts in `docs/evidence-record.md`. Keep personal details, message references and private proof outside the public repository.
5. Add the application's code and meaningful tests. Run `npm ci` and `npm test` before opening a pull request.
6. Configure the new repository's settings before building. Template contents do not copy repository settings: require pull requests and an up-to-date `test` check on `main`, disallow force pushes and deletion, allow squash merges only, use the PR title as the squash commit title, delete merged branches, and enable secret scanning and push protection where available.

The included `test` check checks document-shell presence and headings only. It is not proof of application behavior, security or readiness. Replace or extend it with the project's own checks, keeping the required check name stable.

## Layout

- `docs/charter.md`: purpose, limits and ordered milestones.
- `docs/build-plan.md`: phases, exit checks and work lanes.
- `docs/specification.md`: numbered requirements and failure behavior.
- `docs/decision-log.md`: decision, effect and open or settled status.
- `docs/evidence-record.md`: source, date checked and verified or unproven status.
- `.github/workflows/test.yml`: push and pull-request checks with read-only permissions and cancellation of replaced runs.
- `test/template.test.js`: checks that the five document shells are present.

Changes after setup go through pull requests. A copied template does not authorize implementation, merging or spending.
