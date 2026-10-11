// All site content lives here. Add a project by adding an object to `projects`.
export const person = {
  name: 'Prakhar Agrawal',
  email: '25je0392@iitism.ac.in',
  phone: '+91 9575745111',
  phoneHref: 'tel:+919575745111',
  linkedin: 'https://www.linkedin.com/in/prakharagrawal17',
  github: 'https://github.com/prakhar720',
  resume: '/resume.pdf',
}

export const filters = ['All', 'Product Strategy', 'Fintech', 'UX', 'Technical']

const team = 'Prakhar Agrawal, Pavitr Jain, Atharv Sahasrabudhe, Samir Nimgade'

export const projects = [
  {
    slug: 'jar', title: 'Jar | Driving Meaningful User Engagement',
    short: 'Passive round-off saving makes saving effortless, and gives users no reason to come back. A widget and a Goal Progress Engine to fix that.',
    tags: ['Product Strategy', 'Fintech', 'UX'], labels: ['Engagement', 'Retention', 'Monetization'],
    kind: 'Team case study', context: 'CaseBlitz 2026, Round 1, IIT (ISM) Dhanbad', team: 'Proxy PM: ' + team,
    deck: 'jar', pages: 11, cover: 'jar-01', pdf: '/decks/jar.pdf',
    sections: [
      ['Problem', ['Jar rounds up UPI payments into digital gold automatically. Once set up, users never need to open the app, so saving continues but the reason to return disappears.', 'Jar reports 35M registered users, and 95% are first-time savers, so engagement with the habit matters for long-term value.']],
      ['Research and insights', ['The saving trigger sits in UPI apps (PhonePe, Google Pay), not in Jar. Savings of a few rupees are invisible, so users cannot see them add up.', 'Round-off is not unique: Gullak, Spare8 and Pluto Money offer similar mechanics, and PhonePe already embeds Jar-powered daily saving.', 'Some user reviews raise concerns about transparency, charges and buy-sell spreads.', 'Persona: Aarav, 19, a hostel-based B.Tech student who saves daily without noticing and rarely opens the app.']],
      ['Root cause', ['Jar removed the need to act, and with it the reason to return.']],
      ['Solutions proposed', ['A home-screen widget that shows savings progress, gold price or a weekly saving story, and deep-links each tap to a useful screen.', 'A Goal Progress Engine that links round-off savings to personal goals (a phone, a trip) and shows milestones.', 'Round-off logic stays untouched, the widget is opt-in and display-only, and no new push notifications are added.']],
      ['Trade-offs', ['Personalization versus privacy: use only relevant savings goals.', 'Frequent updates versus notification fatigue.', 'Optimise for meaningful opens, not empty opens.']],
      ['Success metrics and guardrails', ['Meaningful opens per user per week (target 2-3, an assumed rhythm), widget-to-app click-through, goal creation rate.', 'Guardrails: round-off opt-out rate stays flat; widget opt-out rate stays low.']],
    ],
    status: [['Estimate', 'The deck projects +10% active users and +15.5% savings flow, revenue and contribution profit. These are estimates from the case, not measured results.'], ['Proposal', 'This is a case-competition proposal. Nothing was built or shipped.']],
    links: [],
  },
  {
    slug: 'ascend', title: 'Ascend | Rethinking Credit Building for Students',
    short: 'A refundable-deposit starter credit line for students with no credit history, with full cost shown first and a clickable prototype.',
    tags: ['Product Strategy', 'Fintech'], labels: ['Credit building', 'Risk', 'Growth'],
    kind: 'Team case study + prototype', context: 'CaseBlitz 2026, Round 2, IIT (ISM) Dhanbad', team: 'Team CODE',
    deck: 'ascend', pages: 1, cover: 'ascend-1', pdf: '/decks/ascend.pdf', scroll: true,
    sections: [
      ['Problem and user', ['Students with no credit history are rejected by banks and fall back on a parent\'s card or instant-loan apps. The deck cites about 80% of young applicants rejected and under 10% having any credit history.', 'Persona: Ishaan, 20, a second-year engineering student in Hyderabad with irregular income and a fear of debt traps. He was chosen as the cleanest test of a structured path to credit.']],
      ['Core idea', ['Two signals instead of a credit score: intent (a refundable deposit) and capability (consented monthly inflow, checked against statements).', 'A small starting limit of 1.5x the deposit from a regulated partner lender. Ascend does not lend and never holds the money.', 'Interest, fees and the worst case are shown in plain words before any spend. On-time repayment is reported to credit bureaus.']],
      ['Risk, trust and affordability', ['Spend-spike lock on limit growth, periodic inflow checks, reminders at 7, 3 and 1 days, one free date shift, then a step-down with the reason shown.', 'Per-purpose consent switches, no access to contacts, photos or messages, and an opt-in read-only progress link for parents.']],
      ['Business model and partnerships', ['Proposed income: lender-paid fee on performing accounts, share of card economics, merchant-funded offers, and a graduation referral to a larger bank. Late-fee income is deliberately zero.', 'Launch with one partner lender and one city cluster, then expand to multiple banks.']],
      ['Success metrics', ['North Star: 6 on-time repayments in a row (early indicator: 3). Risk guardrail: at least 92% repaying within the grace period. Deposit drop-off and overspend triggers are defined.']],
    ],
    status: [['Proposal', 'Starter line, deposit model, 1.5x cap, 18% rate, Rs 50 late fee, Rs 4,000 inflow gate and the partner list are illustrative assumptions to be set with a lender.'], ['Prototype', 'The live prototype simulates onboarding, consent, inflow check, deposit, limit, cost sheet, repayments, score view and a lender console on a simulated cohort of about 200 users. DigiLocker, bank data, bureau reporting and the lender are all simulated.'], ['Not claimed', 'No bank partnerships, live lending or measured user outcomes.']],
    links: [['Open live prototype', 'https://blackirron.github.io/Ascend-Frontend/']],
  },
  {
    slug: 'ditto', title: 'Ditto | Leading India\'s Insurance Revolution',
    short: 'A trust-led strategy for Ditto in the 100% FDI era: own the whole customer lifecycle, from purchase to claim to renewal.',
    tags: ['Product Strategy'], labels: ['Market research', 'Growth', 'Go-to-market'],
    kind: 'Team case study', context: 'CaseVerse 2.0, Analytics and Consulting Club, NIT Rourkela, 2026 (final round)', team: 'Proxy PM: ' + team,
    deck: 'ditto', pages: 13, cover: 'ditto-02', pdf: '/decks/ditto.pdf',
    sections: [
      ['Situation', ['India\'s insurance market is projected by the deck at $222B by 2030, with the FDI cap moving to 100% in 2026 (per the deck) and low penetration versus global peers.']],
      ['Insight: the trust gap', ['Deck figures: 68% worry about claim rejection, 56% feel mis-sold, and 23% trust insurers. Ditto is trusted for honest advice, but its journey largely ends at purchase while the pain point is claims.', 'Research: qualitative desk research across 350+ consumer claim reviews and 15+ case studies from high-engagement personal-finance communities. Persona: Rahul Sharma, 31, a corporate professional in Bengaluru.']],
      ['Strategy proposed', ['Goal: make Ditto a lifetime insurance partner.', 'Claim Companion: end-to-end claims support from documentation to settlement.', 'Transparent Review: verified customer reviews and claim experiences for every policy.', 'Honest Recommendations: recommend what is right for the customer, not what pays more.']],
    ],
    status: [['Estimate', 'The deck sets 2030 targets such as 4-5x active customers, 2.5-3.5x revenue, 3x+ renewal rate, NPS 80+ and 25-30% lower CAC. These are projections, not results.'], ['Proposal', 'These are competition recommendations. They were not implemented by Ditto.']],
    links: [],
  },
  {
    slug: 'urban-company', title: 'Urban Company | From First Booking to Lasting Habit',
    short: 'Redesigning Urban Company\'s retention experience so a good first booking becomes repeat engagement.',
    tags: ['Product Strategy', 'UX'], labels: ['Retention', 'Research', 'Prioritization'],
    kind: 'Team case study', context: 'Internal case competition, Product Management Club, IIT (ISM) Dhanbad, 2026', team: 'PM Team 2: Samir Nimgade, Pavitr Jain, Prakhar Agrawal',
    deck: 'urban', pages: 13, cover: 'urban-02', pdf: '/decks/urban.pdf',
    sections: [
      ['Problem', ['Urban Company has strong acquisition and trust, but weak retention. The deck cites UC Plus growing 7.7% year on year against 36% overall revenue growth, over 50% of users lost within three days, and near-zero cross-category usage.']],
      ['Research and root causes', ['Market sizing and competitor analysis against local vendors and subscription benchmarks, plus personas on both sides (a customer and a service partner).', 'Root causes: platform bypass after the first service, chatbot-heavy support, customers not understanding the real appliance issue, and adverse selection among professionals.']],
      ['Solutions proposed', ['SmartCare Reminders: predict the next service date from booking history and allow one-tap rebooking.', 'The Reassuring Expert: a pre-booking remote diagnosis by audio or video that adds the correct service to the cart.', 'Humanized support: AI first, then a clear path to a human agent.', 'The deck also covers prioritization of the options.']],
    ],
    status: [['Proposal', 'Competition recommendations only, with no implementation or measured outcome. This was an internal club competition and no placement is claimed.']],
    links: [],
  },
  {
    slug: 'share', title: 'Share | Detecting Intent Before Emotional Trading',
    short: 'A finance case on behavioural bias: detect a user\'s intent before execution and intervene with risk scoring.',
    tags: ['Product Strategy', 'Fintech'], labels: ['Behavioural finance', 'Risk', 'Case competition'],
    kind: 'Case competition entry', context: 'Global case study competition (finance and consulting), IIT Kanpur', team: null,
    deck: 'share', pages: 15, cover: 'share-02', pdf: '/decks/share.pdf',
    sections: [
      ['Problem', ['Markets are intent blind. Retail investors act on fear, greed and overconfidence, which causes panic selling, FOMO buying and drift from long-term goals.']],
      ['Research and insights', ['The deck reports that 78% of surveyed investors admit at least one emotionally driven decision, and that a few behaviours (panic selling, FOMO, overconfidence, loss aversion) account for about 75% of behavioural risk.', 'It draws on the 2008 crisis, COVID-19 and crypto cycles as real-world instances.']],
      ['Solution proposed', ['Detect user intent before execution, score the risk, and intervene with behavioural insights. The flow runs User Action, Risk Score, Outcome, aiming at rational returns and better retention.']],
    ],
    status: [['Proposal', 'Concept for a competition. Not built, and no outcomes are claimed.']],
    links: [],
  },
  {
    slug: 'google-pay', title: 'Google Pay | Spending Awareness Without Friction',
    short: 'How might Google Pay help users stay aware of spending without interrupting the payment?',
    tags: ['Product Strategy', 'Fintech', 'UX'], labels: ['UPI', 'Research', 'UX'],
    kind: 'Case study', context: 'Presented by Prakhar Agrawal', team: null,
    deck: 'gpay', pages: 19, cover: 'gpay-02', pdf: '/decks/gpay.pdf',
    sections: [
      ['Problem', ['UPI makes payments instant, but awareness of spending arrives late, at week or month end, when correction is no longer possible. The result is overspending, regret and a reduced sense of control.']],
      ['Research', ['Market context on UPI volumes and Google Pay\'s position, competitor analysis against PhonePe and Paytm, and a primary survey of college students on spending behaviour.']],
    ],
    status: [['Proposal', 'Case study only. The full solution and metrics are in the deck.']],
    links: [],
  },
  {
    slug: 'carbontrack', title: 'CarbonTrack | Tamper-Evident Emission Reporting',
    short: 'A web platform where companies report emissions, auditors verify them, and the public sees verified records, chained with SHA-256 hashes.',
    tags: ['Technical'], labels: ['JavaScript', 'Firebase', 'SHA-256'],
    kind: 'Technical project', context: 'Web application, deployed on Vercel', team: null, noSlides: true,
    sections: [
      ['Problem and users', ['Emission reports are easy to alter after submission. CarbonTrack gives three user groups a shared record: companies submit, auditors verify, the public reads verified data.']],
      ['Workflow', ['A company submits monthly emissions with evidence and an automatic CO2 calculation. An auditor reviews the evidence, recomputes emissions, and approves or rejects with remarks. Verified reports appear on a public dashboard with company comparisons.']],
      ['Architecture', ['Plain JavaScript, HTML and CSS with Firebase for authentication and storage, and Chart.js for analytics.', 'Each submission stores a SHA-256 hash and the previous report\'s hash, forming an append-only chain that makes silent edits detectable. Auditor decisions are hashed as well.']],
    ],
    status: [['Honest limits', 'This is blockchain-inspired, not a blockchain. Hashes are computed in the browser and stored in Firebase, so a user with database access could rewrite the chain. True immutability would need server-side hashing, security rules and external anchoring.'], ['Next steps', 'Move hashing server-side, add Firestore security rules, anchor hashes to a public ledger, and add an independent chain-verification page.']],
    links: [['Open live site', 'https://carbontrack-gamma.vercel.app/'], ['View source on GitHub', 'https://github.com/prakhar720/CarbonTrack-Project']],
  },
]

export const experience = {
  org: 'WorldQuant BRAIN', role: 'Research Consultant', dates: 'May 2026 to present',
  points: ['Designed and iterated alpha factors, evaluating performance, robustness, correlation and risk metrics.', 'Analyzed strategy performance and adjusted models based on simulation results to improve diversification and reduce self-correlation.'],
}

export const achievements = [
  ['CaseBlitz \'26', 'IIT (ISM) Dhanbad', 'Top 10 finish after a 24-hour hackathon; qualified for the final pitching round.'],
  ['Proydessy', 'IIM Indore', 'Qualified for the offline final round of the Product Management Case Competition.'],
  ['CaseVerse 2.0', 'NIT Rourkela', 'Reached the final round of the case study competition.'],
]

export const skills = {
  'Product management': ['Product Strategy', 'User Research', 'Feature Prioritization', 'UX Analysis', 'Go-to-Market Strategy', 'Competitive Analysis', 'Product Metrics'],
  'Analytics': ['Python', 'SQL', 'Excel', 'Statistics', 'Data Analysis', 'Data Visualization', 'Machine Learning'],
  'Technical': ['JavaScript', 'React.js', 'HTML/CSS', 'C', 'Firebase', 'Git/GitHub', 'Blockchain Fundamentals'],
  'Tools': ['Figma', 'PowerPoint', 'Canva'],
}

export const clubs = ['Product Management Club, Associate', 'Fintech Club, Associate', 'CyberLabs Blockchain Division, Member (Jan to Sep 2026)']
