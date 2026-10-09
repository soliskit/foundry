# Process

How every software project here is planned and recorded. This file holds process only. The default permissions and gates are in [Soliskit Principles](https://files.instinct.com/kf80ch2m24nq-soliskit-principles). That page grants nothing by itself: a permission exists only when the owner gives it. Public repos may record authorization scope and status, but never the private grant text or proof behind it.

## Playbook

Every project has one hosted File, named "<Project> Playbook", with three tabs. Each reads top to bottom and gets more technical as it goes.

- **Charter.** Why the project exists, its limits and the milestones in order, each with the result that closes it.
- **Roadmap.** The phases under each milestone, the check that closes each phase, the work lanes and the limits and stop rules.
- **How It Works.** Exactly how each piece behaves, including when something fails. Each requirement's check sits next to the behavior it proves.

Every tab opens in plain words: what it is, where it stands and what the owner decides.

The Playbook has no pointer sentences and no notes about how to read it. If a fact is needed in two places, it lives in one and the other uses plain words.

The Decision Log and the Evidence Record live in the project repo next to the code, under `docs/`.

- **Decision Log.** Each entry records the decision, its effect and its status, which is Open or Settled. Open decisions are never treated as settled.
- **Evidence Record.** Every outside fact with its source, the date checked and a status of Verified or Unproven. Unproven facts cannot support a requirement. A fact with no recorded date says "Date checked: not recorded".

## Rules for every Playbook file

- One purpose per file.
- No version, draft or generation labels.
- No quotes of the owner's words and no message IDs in any Playbook file or public repo.
- Only content specific to that project. A project never names another project.
- Plain English at the very top, then progressively more technical.
- Openings use plain words: key point first, active voice, concrete verbs, each line says why it matters.
- A necessity pass: nothing stays that the file does not need.
- One copy of any content. A link to the single source of a fact is fine. A sentence that only tells the reader where to look next is not.
- Say "public page", not "brochure".
- Hosted software documents are Soliskit Principles and each project's Playbook.

## Public repos

Public repos get only what is necessary. No personal details, no private context. Documenting a project is not permission to publish private context. Old project documents are deleted only after their content is committed to git.

## Workflow rules

1. **Evidence record.** Each outside fact carries a status and a date, so an unproven claim cannot slip into the plan unnoticed.
2. **Decision log.** Each decision gets a numbered entry with its effect and status, so anyone can see what is settled and what is open.
3. **Named gate states.** Every status update says three things separately: review state (Not reviewed, Reviewed with findings, or Review passed), owner authorization (None, or the exact scope given) and execution state (Not started, Running, or Done). Nobody calls a plan ready when it is only written.
4. **Independent review with a checklist.** The reviewer is never the author. Checklist: does each requirement have a check, does each fact have a source, are open items marked open. Findings are accepted or rebutted in writing, not adopted automatically.
5. **Progress report against the plan.** Each report says which requirement or gate moved, or says nothing moved and why, so a stall shows up early.
6. **Quota guard for free-tier projects.** Each plan lists its limits, the reading that counts against them and a stop rule. Re-check the readings at each phase. A limit change reopens the plan.
7. **Keep this starter repo current.** Whenever a blanket change is made to all repos, update this repo too.
8. **Decisions one at a time.** Each decision comes to the owner alone, with a recommendation.

## Parallel work

Independent work runs at the same time; shared work is serialized.

- **Parallel section in every plan.** Every Playbook names what can run at the same time, what must wait, and why. It is titled the same way in each Playbook: Work lanes, or Phases and lanes where phases and lanes share one section.
- **File ownership list.** Before any stream activates, a list names the owner of every proposed file and marks the shared ones. Every pull request is checked against it.
- **Lane record.** A named, versioned record. The next lane starts from that version.
- **Work item record.** Each work item records its scope, owner, input versions, outputs, read and write set, dependencies, independent reviewer and remaining gates.
- **One lane for shared files.** Changes to shared files go through one integration lane, in dependency order. Conflicting edits do not proceed independently.
- **Benchmarks.** Every run targets a fixed commit. Feature commits never enter a benchmark tree. The benchmark branch rebases onto current main before each series.

## Starting a stream early

A later implementation stream starts early only with the owner's approval after a non-interference proof: identical required-check names, test counts, skip structure, coverage gates and deployed output. A file split alone is not proof. Planning, drafting, independent reviews, test-harness design and read-only observation run in parallel without a new approval; implementation start gates do not move.
