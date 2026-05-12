# Research notes: AI capabilities, adoption, infrastructure, risk, law (baseline: May 2026)

Scope note: current evidence available as of May 2026. I did not invent late-summer 2026 facts. Use these as grounding inputs for scenario modeling, not as forecasts.

## AI capabilities and coding agents

- Stanford HAI, “AI Index Report” (2026 landing page). Link: https://hai.stanford.edu/ai-index
  - Relevance: broad annual baseline for model capability, investment, adoption, policy, safety, and education. The 2026 landing summary says capabilities/integration/investment are advancing while governance, evaluation, and transparency lag. Good top-level source for “capabilities outrun institutions” framing.

- METR, “Measuring AI Ability to Complete Long Tasks” (Mar. 2025). Link: https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/
  - Relevance: empirical framing for agent capability as “time horizon” of tasks completed. METR reports exponential improvement over six years, with task-length capability doubling around every 7 months; later Time Horizon 1.1 page text indicates models through Nov. 2025. Scenario variable: if the doubling trend continues, AI agents move from minutes/hour-scale tasks toward day/week software tasks within the decade; if it stalls, labor substitution is slower.

- SWE-bench / SWE-bench Verified. Link: https://www.swebench.com/ ; paper: https://arxiv.org/abs/2310.06770
  - Relevance: real GitHub issue benchmark for software agents. Useful for tracking coding-agent progress separately from chat benchmarks. Caveat: benchmark saturation/contamination and agent scaffolding make leaderboard gains imperfect proxies for autonomous workplace productivity.

- OpenAI, “Disrupting malicious uses of AI by state-affiliated threat actors” (2024). Link: https://openai.com/index/disrupting-malicious-uses-of-ai-by-state-affiliated-threat-actors/
  - Relevance: shows frontier-model providers observing cyber/influence actors using models mainly for productivity support, reconnaissance, scripting, translation, and content generation rather than novel autonomous attacks. Useful dual-use evidence for both capability and threat modeling.

## Enterprise adoption and productivity

- Stanford HAI, AI Index 2025/2026 materials. Link: https://hai.stanford.edu/ai-index
  - Relevance: HAI 2025 page text reports AI business usage rising to 78% of organizations in 2024 from 55% in 2023, and U.S. private AI investment of $109.1B in 2024. Use as a high-level adoption/investment anchor.

- McKinsey, “The State of AI” survey series. Link: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
  - Relevance: recurring executive survey on genAI adoption, functions affected, risk practices, and value capture. Useful for modeling diffusion from experimentation to workflow redesign. Caveat: survey population skews toward firms engaged enough to answer.

- Microsoft Work Trend Index 2025. Link: https://www.microsoft.com/en-us/worklab/work-trend-index/2025
  - Relevance: workplace/knowledge-worker adoption, “frontier firm” narrative, and managerial intent around agents. Use cautiously because it is vendor-produced, but it captures how enterprise software vendors are packaging AI labor.

- Menlo Ventures, “The State of Generative AI in the Enterprise” (2024). Link: https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/
  - Relevance: enterprise spend shifted from pilots to production; useful for buyer-side adoption categories and vendor stack mapping. Vendor/VC source, so use mainly for market color, not neutral macro measurement.

## Capex, chips, memory, power, and data centers

- Microsoft, Brad Smith, “The Golden Opportunity for American AI” (Jan. 2025). Link: https://blogs.microsoft.com/on-the-issues/2025/01/03/the-golden-opportunity-for-american-ai/
  - Relevance: Microsoft stated it was on track to invest about $80B in FY2025 on AI-enabled datacenters. Anchor for hyperscaler capex escalation.

- Meta, Q4/FY 2024 earnings release (2025 capex guidance). Link: https://investor.fb.com/investor-news/press-release-details/2025/Meta-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx
  - Relevance: Meta guided 2025 capital expenditures to roughly $60B-$65B, driven by AI infrastructure. Anchor for social-platform AI compute arms race.

- Alphabet investor relations / Q4 2024 results. Link: https://abc.xyz/investor/
  - Relevance: Alphabet signaled a large 2025 capex step-up for technical infrastructure/AI. Use for hyperscaler capex comparison with Microsoft/Amazon/Meta.

- Amazon investor relations / 2024 Q4 results. Link: https://ir.aboutamazon.com/
  - Relevance: Amazon discussed very large AI/cloud infrastructure capex, with AWS demand as driver. Use for scenario variable: cloud supply expansion vs power/grid/chip constraints.

- International Energy Agency, “Energy and AI” (2025). Link: https://www.iea.org/reports/energy-and-ai
  - Relevance: leading global energy baseline for AI/data-center electricity demand and grid implications. Widely cited headline: data-center electricity demand could roughly double by 2030, approaching the scale of Japan’s current electricity consumption. Use for power bottleneck and regional siting scenarios.

- Lawrence Berkeley National Laboratory, “2024 United States Data Center Energy Usage Report.” Link: https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf
  - Relevance: U.S. data-center electricity use baseline and forecast range. Useful for quantitative U.S. power-demand scenarios and for distinguishing “AI data center” hype from total data-center load.

- Electric Power Research Institute, “Powering Intelligence: Analyzing Artificial Intelligence and Data Center Energy Consumption” (2024). Link: https://www.epri.com/research/products/000000003002028905
  - Relevance: utility-facing forecast; estimates U.S. data centers could rise from about 4% of electricity use to a materially higher share by 2030 depending on adoption/efficiency. Good for grid planning and local bottleneck scenarios.

- CSET, “AI and Compute” / compute governance work. Link: https://cset.georgetown.edu/publication/ai-and-compute/
  - Relevance: tracks compute as a strategic input; useful for modeling chips/export controls, cloud concentration, and whether compute remains a binding constraint.

- NVIDIA investor relations. Link: https://investor.nvidia.com/
  - Relevance: direct source for data-center GPU revenue, Blackwell/Hopper demand, supply constraints, and gross margins. Use for chip-cycle evidence; pair with hyperscaler capex and HBM suppliers.

## Cyber, fraud, and security

- NIST, AI Risk Management Framework. Link: https://www.nist.gov/itl/ai-risk-management-framework
  - Relevance: baseline U.S. risk taxonomy and governance language for AI systems; useful for scenario assumptions about voluntary vs regulated safety practices.

- NIST, “Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile,” NIST AI 600-1 (2024). Link: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
  - Relevance: detailed genAI risk profile: confabulation, cybersecurity, CBRN, data privacy, harmful bias, information integrity, IP, and value-chain risks. Good source for risk categories.

- CISA, “Roadmap for Artificial Intelligence” (2023/updated program materials). Link: https://www.cisa.gov/resources-tools/resources/roadmap-artificial-intelligence
  - Relevance: U.S. cyber agency priorities: responsibly use AI for defense, secure AI systems, protect critical infrastructure, and counter malicious AI use.

- FBI IC3, “Internet Crime Report 2024.” Link: https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf
  - Relevance: reported U.S. cybercrime/fraud losses reached $16.6B in 2024. Use as baseline for fraud growth; AI may amplify social engineering but is not the only driver.

- FTC, “New FTC Data Show a Big Jump in Reported Losses to Fraud to $12.5 Billion in 2024” (Mar. 2025). Link: https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024
  - Relevance: consumer-fraud baseline. Important for AI voice cloning, synthetic identity, impersonation, romance/investment scams, and business-email compromise scenarios.

- RAND, AI and cybersecurity research hub. Link: https://www.rand.org/topics/artificial-intelligence-and-cybersecurity.html
  - Relevance: policy-oriented synthesis on AI cyber offense/defense. Useful for balanced view: AI lowers barriers and speeds tasks, but catastrophic autonomous cyber capability is not established by public evidence.

## Education, provenance, and legal/regulatory developments

- U.S. Department of Education, “Artificial Intelligence and the Future of Teaching and Learning” (2023). Link: https://www.ed.gov/sites/ed/files/documents/ai-report/ai-report.pdf
  - Relevance: U.S. education policy baseline: AI literacy, human-in-the-loop use, privacy, bias, and assessment integrity. Good for education scenarios where tutoring and cheating detection co-evolve.

- UNESCO, “Guidance for generative AI in education and research” (2023). Link: https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research
  - Relevance: international education governance lens; emphasizes age limits, teacher agency, data protection, and curriculum updates.

- C2PA technical standard. Link: https://c2pa.org/
  - Relevance: provenance/content credentials standard for cryptographically signed media metadata. Scenario variable: adoption by cameras, platforms, newsrooms, and AI tools vs stripping/spoofing and limited consumer attention.

- Content Authenticity Initiative. Link: https://contentauthenticity.org/
  - Relevance: implementation ecosystem around C2PA/content credentials; useful for provenance adoption examples.

- European Commission, AI Act overview. Link: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
  - Relevance: EU AI Act entered force in 2024 with phased obligations. Key for scenarios: GPAI transparency, risk-tiering, prohibited practices, conformity assessments, and extraterritorial compliance pressure.

- U.S. Copyright Office, Copyright and Artificial Intelligence reports. Link: https://www.copyright.gov/ai/
  - Relevance: authoritative U.S. copyright process on digital replicas, copyrightability of AI-generated works, and training/data questions. Key legal uncertainty for model training, licensing markets, and creative labor.

- Thomson Reuters v. Ross Intelligence, U.S. District Court D. Delaware docket/background. Link: https://www.ded.uscourts.gov/
  - Relevance: early AI/training-data fair-use litigation involving legal research content; useful legal signal that facts are case-specific and “AI training is always fair use” is not settled. Pair with Copyright Office reports and later appellate developments.

## Scenario-modeling variables suggested by the evidence

- Agent task horizon: METR-style doubling continues, slows, or hits reliability/tooling bottlenecks.
- Enterprise conversion: adoption remains seat-level assistant use vs shifts to process redesign, headcount substitution, and autonomous workflows.
- Compute supply: hyperscaler capex and GPU/HBM supply keep scaling vs power/interconnect/permitting/grid bottlenecks bind.
- Cost curve: inference costs fall fast enough to make always-on agents cheap vs demand absorbs efficiency gains and keeps prices high.
- Cyber/fraud: AI mainly increases scale/personalization of existing attacks vs enables qualitatively new autonomous attack chains.
- Provenance: C2PA/content credentials become default for high-trust media vs remain niche because metadata is stripped, ignored, or spoofed.
- Education: AI tutoring and teacher productivity gains outweigh assessment breakdown vs institutions struggle with cheating, privacy, and unequal access.
- Law/regulation: EU-style risk governance diffuses globally vs U.S./China sectoral approaches dominate; copyright training liability remains a major uncertainty.
