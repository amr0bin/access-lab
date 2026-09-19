// Access Lab — calendar data
// One entry per dated thing. Three statuses, and they are not interchangeable:
//   verified  the date was read on the organisation's own page, on the date in `verified`
//   expected  projected from a previous cycle; confirm when the call or intake opens
//   target    a date set here, by me. The only kind that may move, and moving it is logged
// kind: gate | deadline | review | decision | window
// Dates are ISO (local). Add, never silently delete: a passed entry moves to the record.
window.ACCESS_CALENDAR = [
  {
    id: "first-tuesday",
    name: "First Access Lab Tuesday",
    kind: "window", date: "2026-09-22", status: "target", verified: "set 2026-09-19",
    url: "access-lab.md",
    fit: "CPACC week 1; the employment contract read; the record opened; the Fieldwork repository licensed and the two planning repositories made private",
    needs: "the contract to hand; the CPACC Body of Knowledge; this repository",
    check: "the three contract clauses: IP assignment, moral rights waiver, outside activities"
  },
  {
    id: "baseline-review-2026",
    name: "Baseline ledger review",
    kind: "review", date: "2026-11-03", status: "target", verified: "set 2026-09-19",
    url: "ceiling.html",
    fit: "the first November review. Nothing is expected to have gained an entry yet; this is the line later years are measured from",
    needs: "the record page, the five ledgers, twenty minutes",
    check: "that the record has a line for every Tuesday since 22 September, including the missed ones"
  },
  {
    id: "cpacc-apply",
    name: "CPACC · apply and book",
    kind: "gate", date: "2026-11-10", status: "target", verified: "set 2026-09-19",
    url: "https://www.accessibilityassociation.org/cpacc",
    fit: "submit the IAAP application so approval clears before a mid-December sitting",
    needs: "the IAAP account; the membership decision made; any testing accommodations requested at application",
    check: "the current fee, delivery options and approval time on the IAAP site; the fee did not render there on 19 September"
  },
  {
    id: "cpacc-exam",
    name: "CPACC · sit the exam",
    kind: "gate", date: "2026-12-15", status: "target", verified: "set 2026-09-19",
    url: "cpacc.html",
    fit: "the week after the twelfth study Tuesday (8 December). First week of January is the fallback",
    needs: "one full timed mock passed comfortably on the twelfth Tuesday",
    check: "Pearson VUE availability once the application is approved"
  },
  {
    id: "decide-intake",
    name: "Decide March or September 2027",
    kind: "decision", date: "2027-01-05", status: "target", verified: "set 2026-09-19",
    url: "leeds.html",
    fit: "the spine's rule: whichever start lets Stage one genuinely finish first. On current shape, September",
    needs: "the CPACC result; an honest look at the record since September",
    check: "the March 2027 application deadline, which decides whether March is still possible at all"
  },
  {
    id: "leeds-march-deadline",
    name: "Leeds · likely deadline for a March 2027 start",
    kind: "deadline", date: "2027-02-04", status: "expected", verified: "pattern from 2025",
    url: "https://courses.leeds.ac.uk/d326/disability-studies-rights-and-inclusion-msc",
    fit: "only if March is chosen on 5 January. The March 2025 intake closed 4 February 2025",
    needs: "statement, referees, transcript",
    check: "the actual 2027 date on the course page"
  },
  {
    id: "leeds-submit",
    name: "Leeds · application submitted",
    kind: "gate", date: "2027-03-31", status: "target", verified: "set 2026-09-19",
    url: "leeds.html",
    fit: "for a September 2027 start. Early enough that an offer is in hand before any scholarship that requires one",
    needs: "the statement written from the question; two referees who have seen the work; the entry route chosen",
    check: "how Leeds reads a Canadian BFA and GPA, and whether the professional route is the stronger door"
  },
  {
    id: "posting-season-2027",
    name: "Advisor posting season, as far as two data points show",
    kind: "window", date: "2027-05-07", status: "expected", verified: "pattern from 2025 and 2026",
    url: "role.html",
    fit: "UBC's advisor posting closed 7 May 2026; SFU's was posted 15 May 2025. Two postings are not a cycle; watch weekly from March",
    needs: "the CV in the postings' vocabulary and the equivalence paragraph, finished by March",
    check: "every new posting logged in access-lab-postings.md the day it is read"
  },
  {
    id: "leeds-scholarship-2027",
    name: "Leeds · likely School scholarship deadline",
    kind: "deadline", date: "2027-05-31", status: "expected", verified: "pattern from 2026",
    url: "https://courses.leeds.ac.uk/d326/disability-studies-rights-and-inclusion-msc",
    fit: "the 2026/27 School scholarship closed 31 May 2026 and required an offer. Snowdon masters grants for disabled students are a separate route",
    needs: "an offer; a scholarship statement",
    check: "the 2027/28 scholarship terms, and Snowdon's current eligibility for international applicants"
  },
  {
    id: "leeds-sept-deadline",
    name: "Leeds · likely deadline for a September 2027 start",
    kind: "deadline", date: "2027-08-13", status: "expected", verified: "pattern from 2024",
    url: "https://courses.leeds.ac.uk/d326/disability-studies-rights-and-inclusion-msc",
    fit: "the backstop, not the plan. The September 2024 intake closed 13 August 2024",
    needs: "—",
    check: "the actual 2027 date"
  },
  {
    id: "annual-review-2027",
    name: "November review · did every ledger gain an entry?",
    kind: "review", date: "2027-11-02", status: "target", verified: "set 2026-09-19",
    url: "ceiling.html",
    fit: "the first real comparison against the 2026 baseline. The question paragraph for 2027 is written the same day",
    needs: "the record; the ledger table; the 2026 question paragraph",
    check: "which row of the postings table moved this year"
  }
];

// Rolling, or not yet dated. Each needs its date read on its own site and moved above.
window.ACCESS_ROLLING = [
  { name: "Accessible BC Act accessibility committees · UBC, SFU, a college, Fraser Health", url: "role.html", status: "verify", note: "Move 2 in the competitiveness plan. One seat is enough; recruitment is public and irregular" },
  { name: "Disability Alliance BC · Advocacy Access volunteers", url: "https://disabilityalliancebc.org/", status: "verify", note: "The documentation-facing route the two-year plan ranks first. Ask about the current intake" },
  { name: "Crisis Centre BC · distress-line volunteer training", url: "https://crisiscentre.bc.ca/", status: "verify", note: "Already in the plan. Trauma-informed, supervised, and named in the SFU posting's language" },
  { name: "Canadian Disability Studies Association · conference at Congress", url: "https://www.federationhss.ca/en/congress", status: "verify", note: "CDSA meets at the Congress of the Humanities and Social Sciences. Call for proposals usually opens in winter. Find its current page from the Congress site: the old cdsa-acei.ca domain no longer appears to be the association's" },
  { name: "CADSPPE, within CACUSS · conference and membership", url: "https://www.cacuss.ca/", status: "verify", note: "The disability service providers' community sits inside CACUSS, the Canadian student affairs association. Where post-secondary accessibility advisors gather" },
  { name: "AHEAD · annual conference; JPED submissions", url: "https://www.ahead.org/", status: "verify", note: "JPED is the first-choice venue for the corpus paper" },
  { name: "Accessibility Standards Canada · technical committee recruitment", url: "https://accessible.canada.ca/", status: "verify", note: "The essential-requirements work at national scale, no degree required" },
  { name: "Canadian Journal of Disability Studies · open submissions", url: "https://cjds.uwaterloo.ca/index.php/cjds/about/submissions", status: "verify", note: "First-choice venue for the four-literature paper: under 6,000 words, under 40 references" },
  { name: "BCcampus · accessibility and UDL events and calls", url: "https://bccampus.ca/", status: "verify", note: "Where BC post-secondary open resources are adopted" }
];
