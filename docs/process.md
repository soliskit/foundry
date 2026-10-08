# Process

How every software project here is planned and recorded. This file holds process only. What the owner has authorized lives in the owner's private Soliskit Principles, never in a repo.

## Playbook

Every project has one hosted File, named "<Project> Playbook". It reads top to bottom and gets more technical as it goes:

- **Opening.** A plain statement of what the project is and where it stands, in a few lines.
- **Plan.** Why the project exists, its limits, the milestones in order, the phases and lanes, and the check that closes each.
- **Detail.** Exactly how each piece behaves, including when something fails. Each requirement's check sits next to the behavior it proves.
- **Proof of decisions.** A private tab at the end.

The Playbook has no pointer sentences and no notes about how to read it. If a fact is needed in two places, it lives in one and the other uses plain words.

The Decision Log and the Evidence Record live in the project repo next to the code, under `docs/`.

- **Decision Log.** Each decision is settled or open. A settled entry records the decision, its effect and its status, with no message IDs, times or long quotes, because repos are public. Open decisions are never treated as settled. Each entry has a number; the owner's private record keeps the proof under that number.
- **Evidence Record.** Every outside fact with its source, the date checked and a status of verified or unproven. Unproven facts cannot support a requirement. A fact with no recorded date says "Date checked: not recorded".

## Rules for every Playbook file

- One purpose per file.
- No version, draft or generation labels.
- No quotes of the owner's words and no message IDs in any Playbook file or public repo. The one exception is the private "Proof of decisions" tab at the end of each project's Playbook, which holds the proof behind that project's Decision Log entries by entry number.
- Only content specific to that project. A project never names another project.
- Readable at the very top, then progressively more technical. The first lines are plain English for the owner: what it is, where it stands, what the owner decides. Technical detail comes below and grows as the reader goes down.
- Openings use plain words: key point first, active voice, concrete verbs, each line says why it matters, no jargon.
- A necessity pass: nothing stays that the file does not need.
- One copy of any content. Link to it elsewhere.
- Say "public page", not "brochure".

## Public repos

Public repos get only what is necessary. No personal details, no private context. Documenting a project is not permission to publish private context. Old project documents are deleted only after their content is committed to git.

## Workflow rules

1. **Evidence ledger.** Research passes through several agents, and some flag their own claims as unverified. A label and a date on each fact stops unproven items from sliding into the plan.
2. **Decision log with proof kept private.** Agents often cannot read the owner's original message and work from a relay. Each decision gets an entry number in the repo log, and the matching message reference stays in the private proof, so any agent can confirm a decision without asking again and the public repo carries no personal details.
3. **Named gate states.** Every status update says three things separately: review state (not reviewed, reviewed with findings, or review passed), owner authorization (none, or the exact scope given), and execution state (not started, running, done). Nobody calls a plan ready when it is only written. This is separate from the ban on version labels such as draft or v2 in file names and headings.
4. **Fixed independent reviewer with a checklist.** The reviewer is never the author. Checklist: does each requirement have a check, does each fact have a source, are open items marked open. Findings are accepted or rebutted in writing, not adopted automatically.
5. **Progress report against the plan.** Each report says which requirement or gate moved, or says nothing moved and why, so a stall shows up early.
6. **Quota guard for free-tier projects.** Each plan lists its limits, the reading that counts against them, and a stop rule. Re-check the readings at each phase. A limit change reopens the plan.
7. **Keep this starter repo current.** Whenever a blanket change is made to all repos, update this repo too.
8. **Decisions one at a time.** Each decision comes to the owner alone, with a recommendation.

## Second opinions

- **Review Brief.** A one-off file written so another model can give a second opinion: what is asked, what to look at, and what must come back. The project keeps ownership of the work and only borrows a view.
- **Review Reply.** The other model's answer to a Review Brief.

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
