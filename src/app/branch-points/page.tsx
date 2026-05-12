const branches = [
  ["2028 U.S. election", "45% baseline: a competence-and-checks Democrat defeats a MAGA-successor Republican. 35%: the MAGA-successor Republican wins if the economy is stronger, Democrats nominate poorly, or voters interpret institutional conflict as disorder needing hard continuity. 20%: recession, scandal, or party fracture creates a less linear election."],
  ["Ukraine", "45% baseline: armed armistice. 30%: a long war continues. 15%: Russia breaks through if Ukrainian manpower and air defense fail. 10%: Ukraine recovers more territory if Europe scales faster than expected."],
  ["China/Taiwan", "50% baseline: quarantine crisis short of invasion. 30%: lower tension if Beijing prioritizes economics. 20%: blockade or invasion crisis if U.S. paralysis creates perceived opportunity."],
  ["AI capability", "55% baseline: rapid practical improvement with reliability limits. 25%: infrastructure bottlenecks slow diffusion. 20%: agents become substantially more autonomous before governance adapts."],
  ["Economy", "50% baseline: uneven productivity plus 2030 correction. 30%: smoother boom if demand and supply align. 20%: severe recession if capex credit exposure combines with labor shock."],
  ["Democracy", "45% baseline: stress, partial resilience, later order backlash. 30%: authoritarian consolidation if courts and election administration bend further. 25%: stronger democratic recovery if state institutions coordinate effectively."],
  ["Religion and social meaning", "45% baseline: synthetic intimacy deepens loneliness for many while thick-tie communities gain minority security and formation roles. 35%: deeper atomization if institutions fail to absorb lonely people. 20%: broader embodied revival if scandals and social exhaustion push more families into congregations and civic groups."],
];

export default function BranchPointsPage() {
  return (
    <main className="container page">
      <div className="section-head wide">
        <p className="eyebrow">Branch points</p>
        <h1>Major plausible alternatives</h1>
        <p>The main essay follows one modal path. The probabilities are coarse buckets, not a model output; each branch sums to about 100% and is meant to make the uncertainty inspectable.</p>
      </div>
      <div className="branch-list">
        {branches.map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}
      </div>
    </main>
  );
}
