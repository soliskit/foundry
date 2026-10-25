# Process

How every software project here is planned and recorded. The default permissions and gates are in Oversight. That page grants nothing by itself: a permission exists only when the owner gives it. Public repos may record authorization scope and status, but never the private grant text or proof behind it.

## Records

The Decision Log and the Evidence Record live in the project repo next to the code, under `docs/`. The blank templates are `docs/decisions.md` and `docs/evidence-record.md`.

## Decisions

Each decision comes to the owner alone, with a recommendation.

## Parallel work

- **File ownership list.** Before any stream activates, a list names the owner of every proposed file and marks the shared ones. Every pull request is checked against it.
- **Lane record.** A named, versioned record. The next lane starts from that version.
- **Work item record.** Each work item records its scope, owner, input versions, outputs, read and write set, dependencies, independent reviewer, and remaining gates.
- **One lane for shared files.** Changes to shared files go through one integration lane, in dependency order.
- **Benchmarks.** Every run targets a fixed commit. Feature commits never enter a benchmark tree. The benchmark branch rebases onto current main before each series.
