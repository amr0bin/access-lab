# Access Lab

The working repository for Accessible Learning Labs' independent practice, run on
Tuesdays alongside a full-time career. Three goals (the CPACC, the Leeds MSc in
Disability Studies, Rights and Inclusion, and an Accessibility Advisor role at UBC
or SFU), one flagship study, and a door through which the work leaves as public
resources for Accessible Learning Labs.

Built on the Studio Day pattern: a defended block of time, a floor and a ceiling,
five ledgers, a record that starts now, an external forcing function, and a named
reader who is not me. It holds decisions already made, written down so they do
not have to be made again.

---

## Keep this repository private

This is a plan, not a product. It names the offices being applied to, the route
in, and the odds. **Create it as a private repository.** The pages carry
`noindex, nofollow` as a second line of defence, not the first.

Two ways to use the pages while private:

1. **Open `index.html` directly** from a local clone or download. Every page works
   from the file system: the calendar data is a script, not a fetch, so nothing
   needs a server. The Asap font loads from Google Fonts when online and falls
   back to the system font when not.
2. **GitHub Pages on a private repository** needs a paid GitHub plan for personal
   accounts (**verify** the current terms). If Pages is turned on, the site is
   public even though the repository is not. Do not do that with this one.

What leaves this repository goes out through `contribute.html`, as a product.

---

## Pages

| File | What it holds |
|---|---|
| `index.html` | **The Tuesday.** The landing page, and the one to open at ten on a Tuesday. What today is (which CPACC week, which rotation), the standing order for the current phase, the next dated thing. |
| `cpacc.html` | **01 · CPACC.** Twelve Tuesdays against the Body of Knowledge (October 2023, v4.0), 22 September to 8 December 2026, with pages, practice and a *done means* for each. |
| `corpus.html` | **02 · The Corpus.** The essential-requirements study: why it is the flagship, the question, the seven codes, the eight stages, the paper that comes first. |
| `leeds.html` | **03 · Leeds.** The application kit, the programme as read, and the nine modules with what each one becomes in public. |
| `role.html` | **04 · The Role.** The posting read line by line against the record, the five moves, application craft, the watch, the posting log. |
| `ceiling.html` | **Ceiling.** What excellence is, goal by goal (met, strong, excellent), excellence at the level of the field, the five ledgers, the floors, 2026 to 2036. |
| `calendar.html` | **Calendar.** Every dated thing as verified, expected or target, the readiness kit, the rolling list still waiting for dates, the ladder. |
| `year.html` | **The Year.** September 2026 to August 2027 month by month, the four phases, the MSc years in outline. |
| `record.html` | **Record.** A Tuesday log with *Copy as Markdown*, the ledger check, and where the real record lives. |
| `contribute.html` | **Contribute.** The door to Accessible Learning Labs: what is public and what is not, the three questions, the licence, the eight steps from draft to DOI, what is waiting to leave, and the fixes owed to the public surface. |

## Notes

| File | What it holds |
|---|---|
| `access-lab.md` | The system: the Tuesday, the ceiling, the gates, the ledgers, the floors, the question, the reader, the ethic, the rights. |
| `access-lab-strategy.md` | How the pieces fit, what excellence is, the honest arithmetic, the sequence, the decisions. |
| `access-lab-postings.md` | The ceiling in full: every posting read, what it asks, where the file stands. |
| `access-lab-record.md` | **The record.** Append-only. The Tuesday log, the resource log with clean-room fields, contributors, ledger entries, gates, the November review. |
| `question.md` | The dated paragraph, one a year. |
| `people.md` | The named reader, the second coder, the conversations, the referees. |
| `identifiers.md` | The ORCID iD and every DOI. |

These notes are also kept in the Accessible Learning Labs project. Where the two
disagree, the more recently dated version governs; `00-portfolio-spine-shared.md`
governs anything that crosses properties.

## Data

| File | Edit this to change |
|---|---|
| `calendar-data.js` | Every dated entry (`ACCESS_CALENDAR`) and the rolling list (`ACCESS_ROLLING`). The index, the calendar and the year all read it. Each entry has a `status` of `verified`, `expected` or `target`, and a `verified` field saying when and how the date was read. |
| `style.css` | Shared styling. Built on Studio Day's stylesheet, so the two systems read as one practice. |

---

## What is stored where

Ticks on the CPACC, Corpus, Leeds, Role, Calendar and Contribute pages, and the
Tuesday log on the Record page, are kept in **this browser's local storage only**.
They are conveniences. They do not travel between devices, they can be cleared,
and nobody else sees them. The record that counts is `access-lab-record.md`,
committed to this repository.

---

## The palette

Same system as Studio Day, a cooler ink. White background.

| Token | Value | Role | Contrast on white |
|---|---|---|---|
| `--ink-strong` | `#172023` | Headings, dark tiles | 16.6:1 |
| `--ink` | `#3b4447` | Body text | 10.0:1 |
| `--stone` | `#63707a` | Captions, labels | 5.1:1 |
| `--accent` | `#1d5e5a` | Links, focus, the flagship tile | 7.5:1 |
| `--accent-warm` | `#9a5b2f` | *Expected* flags, gaps | 5.4:1 |

Every text colour clears 4.5:1 on both the white page and the panel tint. Status
is never carried by colour alone: every flag also says *verified*, *expected* or
*target* in words.

---

## Conventions

**Verification.** Anything not read on its source's own page carries **verify**.
No figure is trusted past the date it was read.

**Dates.** Targets are set here and may move; moving one is logged. Expected dates
are projections from a previous cycle. Verified dates carry the day they were read.

**Language.** Barrier-first and social model. *Disabled people*, *access
requirements*, *historically, persistently or systemically marginalised*. Words
from a posting are quoted and attributed, not adopted.

**Phrasing.** "Over the past decade", not a count of years.

**Printing.** Every page prints. Paper drops the navigation and the controls.

---

## Still open

- The employment contract: IP assignment, moral rights waiver, outside activities.
  **Blocking** anything new.
- `cpacc.html` follows the Body of Knowledge directly; the original
  `cpacc-twelve-weeks.md` was not in the project. Reconcile if it turns up.
- CPACC fee and format, Leeds 2027 deadlines and scholarship terms, how Leeds
  reads a Canadian BFA: all marked **verify** where they appear.
- The MSc's extra twelve or so hours a week: decided in the main project before
  the Leeds application goes in.
- The named reader and the corpus second coder: ideally one disabled practitioner,
  paid, in both roles.

---

*Accessible Learning Labs · Access Lab · September 2026*
