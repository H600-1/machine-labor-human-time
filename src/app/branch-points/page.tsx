const branches = [
  ["2028 U.S. election", "Baseline: Whitmer defeats Vance. Alternative: Vance wins if the economy is stronger, Democrats nominate poorly, or voters interpret institutional conflict as disorder needing hard continuity."],
  ["Ukraine", "Baseline: armed armistice. Alternative: a long war continues; Russia breaks through if Ukrainian manpower and air defense fail; Ukraine gains if Europe scales faster than expected."],
  ["China/Taiwan", "Baseline: quarantine crisis short of invasion. Alternative: lower tension if Beijing prioritizes domestic economics, or higher crisis if U.S. paralysis suggests opportunity."],
  ["AI capability", "Baseline: rapid practical improvement with reliability limits. Alternative: infrastructure bottleneck slows diffusion, or agents become substantially more autonomous before governance adapts."],
  ["Economy", "Baseline: uneven productivity plus 2030 correction. Alternative: smoother boom if demand and supply align, or severe recession if capex credit exposure combines with labor shock."],
  ["Democracy", "Baseline: stress, partial resilience, later order backlash. Alternative: authoritarian consolidation if courts and election administration bend further, or stronger democratic recovery if state institutions coordinate effectively."],
  ["Religion and social meaning", "Baseline: embodied-community revival plus techno-spiritual fringe. Alternative: deeper atomization if institutions fail to absorb lonely people and families outsource presence."],
];

export default function BranchPointsPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Branch points</p>
        <h1>Major plausible alternatives</h1>
        <p>The main essay follows one baseline path. These are the forks that would push the decade elsewhere.</p>
      </div>
      <div className="branch-list">
        {branches.map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}
      </div>
    </main>
  );
}
