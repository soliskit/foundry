# Decision Log

| Entry | Decision | Effect | Status |
| --- | --- | --- | --- |
| F1 | Repository standards adopted. Foundry carries the pull request template, the PR title and PR description checks, the commit template and guide, the issue forms and the contributing guide, matching the other projects. The description checker verifies the required shape, not whether answers are true, and required-check activation waits for a real later pull request result. | New pull requests must use the template, and titles must not start with a bracketed tag. Existing test and review gates remain. | Settled |
| F3 | Node floor raised to the 26 LTS line. The declared floor still named the old 22 LTS line after Node 26 became the current LTS line. The floor becomes the caret range ^26.13.0, which allows any 26.x release from 26.13.0 up but not 27; the test workflow's six document-shell checks run under the selected allowed version, proving the shells on that runtime, not the floor minimum or every allowed version. | New projects from the template declare and test on Node 26. | Settled |

<!-- Status is Open or Settled. Keep proof private, keyed by entry number. Do not include personal details, message references, clock times, or owner quotes. -->
