// ============================================================
// SAM OVENS OPERATING SYSTEM
// Based on Consulting.com methodology
// ============================================================

var SAM = {

  // ── DAILY QUOTES (Rotates daily) ──────────────────────────
  quotes: [
    { text: "The best investment you can make is in yourself. The best project you can work on is you.", context: "Week 1 - Mindset" },
    { text: "You don't rise to the level of your goals. You fall to the level of your systems.", context: "Week 1 - Foundations" },
    { text: "Most people's biggest problem isn't that they don't know what to do. It's that they won't do what they know.", context: "Week 1 - Action" },
    { text: "Stop trying to be a generalist. Pick one niche, one offer, one channel. Dominate that first.", context: "Week 2 - Niche" },
    { text: "Your niche isn't about what YOU want to do. It's about who has a painful problem AND the money to solve it.", context: "Week 2 - Niche Selection" },
    { text: "The riches are in the niches. The broader you go, the more you blend in. The narrower you go, the more you stand out.", context: "Week 2 - Specificity" },
    { text: "Don't build what you think people want. Ask them what keeps them up at night, then solve that.", context: "Week 3 - Offer" },
    { text: "An irresistible offer isn't about price. It's about the gap between where they are and where they want to be.", context: "Week 3 - Offer Creation" },
    { text: "Provide as little of you and your time as possible. That's not lazy - that's scalable.", context: "Week 3 - Minimum Viable" },
    { text: "Your offer should be so good that people feel stupid saying no.", context: "Week 3 - Value Stack" },
    { text: "You don't need a website. You don't need a logo. You need a conversation with someone who has the problem you solve.", context: "Week 4 - Organic Outreach" },
    { text: "Outreach isn't selling. It's starting conversations with people who already have the problem.", context: "Week 4 - Direct Outreach" },
    { text: "The gap between you and your first client is about 100 conversations. Most people quit at 10.", context: "Week 4 - Volume" },
    { text: "Don't pitch. Diagnose. The best salespeople are doctors, not used car dealers.", context: "Week 5 - Sales" },
    { text: "On a sales call, the person asking questions is the one in control. Never stop asking questions.", context: "Week 5 - Consultative Selling" },
    { text: "Price is only an objection when value isn't clear. If they see the ROI, price becomes irrelevant.", context: "Week 5 - Closing" },
    { text: "You can't scale what you can't measure. Track everything. Data beats opinions every time.", context: "Week 6 - Scaling" },
    { text: "Facebook ads are gasoline on a fire. If your offer doesn't convert organically, ads won't save you.", context: "Week 6 - Paid Traffic" },
    { text: "The market doesn't care about your feelings. It only responds to value. Give it value.", context: "First Principles" },
    { text: "Iteration is the game. No awesome offer was created on the first guess. It's all iterations.", context: "Scientific Method" },
    { text: "One small improvement in the foundation creates massive downstream impact. Fix the base.", context: "Leverage" },
    { text: "Your mind, your friends, your family - they're all figments of imagination when it comes to testing ideas. Only the market tells truth.", context: "Market Testing" },
    { text: "Everything can be boiled down to a mathematical equation. Find the equation, optimize the variables.", context: "Simplification" },
    { text: "The only real laboratory is the market. Hypothesize, test, get feedback, iterate. That's the entire game.", context: "Scientific Method" },
    { text: "Most consultants are too busy being busy. Cut the 95% that doesn't move the needle.", context: "Focus" },
    { text: "You're not selling time. You're selling a transformation. Package the transformation, not the hours.", context: "Value-Based Pricing" },
    { text: "A confused mind always says no. Make your offer so clear a 5-year-old could understand it.", context: "Clarity" },
    { text: "The best marketing in the world can't sell a bad offer. Fix the offer first.", context: "Offer" },
    { text: "Stop consuming. Start producing. You already know enough to start.", context: "Action Bias" },
    { text: "Week one before Facebook ads. Foundations before tactics. Always.", context: "Sequence" },
    { text: "Pre-sell before you build. If people won't pay before it exists, they won't pay after either.", context: "Validation" },
  ],

  // ── DAILY PRIORITY FRAMEWORK ──────────────────────────────
  // Sam's hierarchy: What moves revenue closest to TODAY?
  priorityRules: [
    "1. CLOSE DEALS - Anyone waiting on a proposal, follow-up, or decision? That's #1.",
    "2. SALES CALLS - Anyone booked or ready to book? Get on the phone.",
    "3. OUTREACH - No deals in pipeline? 100 conversations is the only fix.",
    "4. OFFER REFINEMENT - Getting on calls but not closing? Fix the offer.",
    "5. CONTENT/SYSTEMS - Only after 1-4 are handled. Never first."
  ],

  // ── WHERE IS JEAN RIGHT NOW? (Sam's 6 Phases) ────────────
  phases: [
    { id: 1, name: "Mindset & Foundations", status: "done", description: "Clear vision, first principles, daily structure" },
    { id: 2, name: "Niche Selection", status: "done", description: "55+ trades owners, $5-50M, ready to exit" },
    { id: 3, name: "Offer Creation", status: "done", description: "Transferable Exit System - $150-200K + success fee" },
    { id: 4, name: "Organic Outreach", status: "current", description: "Direct conversations with qualified owners. Target: 100 conversations." },
    { id: 5, name: "Sales & Closing", status: "active", description: "Diagnostic calls → NDA → Company info → Close. Two-call system." },
    { id: 6, name: "Scale with Paid Traffic", status: "locked", description: "Only after organic converts consistently. VSL + ads." }
  ],

  // ── SAM'S DAILY STRUCTURE ─────────────────────────────────
  // "What would Sam do today?"
  getDailyDirective: function() {
    // Based on current phase (4: Organic Outreach + 5: Sales)
    var directives = [
      {
        focus: "How many conversations did you start yesterday?",
        action: "If less than 5, that's your ONLY job today. Nothing else matters until pipeline is full.",
        metric: "Conversations started this week: ___"
      },
      {
        focus: "Who in your pipeline is closest to a YES?",
        action: "Call them. Not email. Not text. Pick up the phone. Remove every obstacle between them and signing.",
        metric: "Days since last close attempt: ___"
      },
      {
        focus: "Is your offer converting on calls?",
        action: "If you're getting on calls but not closing, the offer needs work. Not your sales skills - the OFFER.",
        metric: "Last 10 calls: ___ closed / 10"
      },
      {
        focus: "Are you doing $500/hr work or $50/hr work?",
        action: "Sales calls and closing = $500/hr. Building systems, tweaking pages, organizing files = $50/hr. Which one are you doing right now?",
        metric: "Hours on revenue activities today: ___"
      },
      {
        focus: "What's the ONE thing that, if done today, makes everything else easier or unnecessary?",
        action: "Do that thing in Flow Block 1. Everything else waits.",
        metric: "Did you protect your flow block? Y/N"
      },
      {
        focus: "Stop perfecting. Start testing.",
        action: "Your funnel is built. Your pages are live. Your NDA works. Now the only thing missing is PEOPLE IN THE FUNNEL. Go find them.",
        metric: "New leads entered funnel this week: ___"
      },
      {
        focus: "The fortune is in the follow-up.",
        action: "Review every open conversation. Who hasn't heard from you in 48+ hours? That silence is killing deals.",
        metric: "Open conversations without recent touch: ___"
      },
    ];

    var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    return directives[dayOfYear % directives.length];
  },

  // ── GET TODAY'S QUOTE ─────────────────────────────────────
  getDailyQuote: function() {
    var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    return this.quotes[dayOfYear % this.quotes.length];
  }
};
