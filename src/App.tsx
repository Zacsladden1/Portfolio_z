import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Plus, Minus, Layers, Workflow, Sparkles, PlugZap, BrainCircuit, Zap, Activity } from 'lucide-react';
import './index.css';
import { motion, useReducedMotion } from 'framer-motion';

const work = [
  {name:'Property inspections', category:'Automation / Operations', title:'Property inspections, connected.', description:'An n8n workflow that reads tenant replies, classifies intent with AI and updates the right records. Confirmations and follow-ups stay connected.', tags:['n8n','AI intent classification','SMS & APIs'], className:'inspections'},
  {name:'Noahtrains', category:'Product / Web application', title:'A coach in your corner. An app in your pocket.', description:'Training plans, workout logging, nutrition and messaging brought together for a personal trainer and their clients.', image:'/noahtrains-screenshot.jpg', tags:['Coaching platform','Real-time chat','Progress tracking'], className:'coaching'},
];
const services = [
  {icon:Workflow, title:'APIs & connected infrastructure', text:'Custom APIs, webhooks and integrations that connect your applications, models and business data.', detail:'Authentication, data validation, retries and useful logs are part of the design, so the connections can be maintained as your business grows.'},
  {icon:Sparkles, title:'AI development & intelligent workflows', text:'LLM-powered applications, document processing and AI workflows connected to the tools your team uses.', detail:'We start with a specific task, decide where human review belongs and check the output against real examples.'},
  {icon:Layers, title:'Full-stack product engineering', text:'A client portal, a coaching app or an internal workspace. Software shaped around what your business needs.', detail:'From interface design to databases and integrations, you work directly with the person building it.'},
];
export default function App() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(0);
  const project = work[selected];
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const architecture = [
    ['Connect', 'A request arrives through your app or API.', 'Validate the payload and permissions before processing.'],
    ['Understand', 'Give the model the context it needs.', 'Retrieve relevant information, structure the prompt and request a usable response.'],
    ['Act', 'Turn the response into a controlled action.', 'Validate the output, require review where needed and update the connected system.'],
    ['Observe', 'Make the behaviour visible.', 'Track outcomes, inspect failures and improve the workflow using real examples.'],
  ];
  return <div className="site">
    <a className="skip" href="#main">Skip to content</a>
    <header className="header">
      <a className="brand" href="#top" aria-label="Automated by Zac home"><img className="brand-logo" src="/automated-by-zac-logo-v2.png" alt="Automated by Zac" width="1891" height="831"/></a>
      <a className="header-contact" href="mailto:zac@builtbyzac.ai">Let’s talk <ArrowUpRight size={17}/></a>
    </header>
    <main id="main">
      <section className="intro" id="top">
        <div className="intro-top"><p>AI development / Automation / Websites</p><span>Based in Kent, working everywhere.</span></div>
        <motion.h1 initial={reducedMotion ? false : {opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.65}}>AI development.<br/><span className="headline-end">Connected systems<span className="period">.</span></span></motion.h1>
        <div className="intro-bottom"><div className="intro-note"><span className="little-orbit" aria-hidden="true">✳</span><span>From model<br/>to production.</span></div><p>I’m Zac. I build AI applications, connected automations and distinctive business websites. From your first impression online to the systems behind it, I bring the design and development together.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowRight size={28}/></a></div>
      </section>
      <section className="architecture" aria-labelledby="architecture-title">
        <div className="architecture-head"><div><p className="section-label">Inside the build</p><h2 id="architecture-title">Intelligence is only<br/>one part of the system.</h2></div><p>An illustrative AI workflow. Explore the engineering around the model.</p></div>
        <div className="architecture-steps" aria-label="Explore the architecture">{architecture.map((step,i)=>{
          const Icon = [PlugZap, BrainCircuit, Zap, Activity][i];
          return <button key={step[0]} aria-pressed={activeStep===i} onClick={()=>setActiveStep(i)}><Icon className={i===1?'understand-icon':undefined} size={24} strokeWidth={1.7} aria-hidden="true"/><span>{step[0]}</span><span className="step-line" aria-hidden="true"/></button>;
        })}</div>
        <motion.div className="architecture-detail" key={activeStep} initial={reducedMotion?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.25}} aria-live="polite"><h3>{architecture[activeStep][1]}</h3><p>{architecture[activeStep][2]}</p></motion.div>
        <div className="engineering-strip"><span>LLM applications</span><span>API integration</span><span>Workflow orchestration</span><span>Custom software</span></div>
      </section>
      <section className="work" id="work" aria-label="Selected projects">
        <div className="work-toolbar"><span className="workspace-title"><span className="small-dot"/> A few things I’ve built</span><div className="project-tabs" role="tablist" aria-label="Choose a project">{work.map((item,i)=><button key={item.name} id={'tab-'+i} role="tab" aria-selected={selected===i} aria-controls="project-panel" tabIndex={selected===i?0:-1} onClick={()=>setSelected(i)} onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=1-selected;setSelected(next);document.getElementById('tab-'+next)?.focus();}}}>{item.name}</button>)}</div></div>
        <div className={'project-panel '+project.className} id="project-panel" role="tabpanel" aria-labelledby={'tab-'+selected}>
          <div className="project-copy"><p className="project-category">{project.category}</p><h2>{project.title}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact">Build something with me <ArrowUpRight size={18}/></a></div>
          {project.className==='inspections' ? <div className="case-study">
            <div className="case-context"><h3>The problem</h3><p>Inspection scheduling and tenant replies meant moving information between spreadsheets, messages and property records.</p></div>
            <div className="case-build"><h3>What I built</h3><ul>
              <li><strong>Inspection scheduling</strong><p>Standardised branch exports and distributed inspections across inspectors, with geographic grouping and configurable daily limits.</p></li>
              <li><strong>AI that understands replies</strong><p>Connected incoming SMS with conversation history, then used an AI model to classify the tenant’s intent.</p></li>
              <li><strong>Connected follow-ups</strong><p>Updated inspection records, sent confirmations and routed notifications through one connected workflow.</p></li>
            </ul></div>
            <div className="case-result"><h3>The result</h3><p>Scheduling, tenant communication and record updates work together, reducing the manual handoffs between tools.</p><span>Built with n8n, Supabase, Twilio and API integrations.</span></div>
          </div> : <div className="project-screen"><motion.img initial={reducedMotion?false:{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.35}} key={project.image} src={project.image} alt={project.name+' application screenshot'}/></div>}
        </div>
        <div className="work-foot"><span>Real tools. Built around the people using them.</span><span>{String(selected+1).padStart(2,'0')} / 02</span></div>
      </section>
      <section className="approach" id="approach">
        <div className="section-intro"><p className="section-label">Where I can help</p><h2>Beyond the prompt.<br/>Across the stack.</h2><a className="plain-link" href="#contact">Tell me what you’re thinking <ArrowUpRight size={19}/></a></div>
        <div className="capabilities">{services.map((s,i)=><article key={s.title} className={expanded===i?'capability expanded':'capability'}><s.icon size={28} strokeWidth={1.4}/><h3>{s.title}</h3><p>{s.text}</p><button aria-expanded={expanded===i} aria-controls={'detail-'+i} onClick={()=>setExpanded(expanded===i?null:i)}>{expanded===i?'Less detail':'How I approach it'}{expanded===i?<Minus size={16}/>:<Plus size={16}/>}</button><p id={'detail-'+i} hidden={expanded!==i} className="capability-detail">{s.detail}</p></article>)}</div>
      </section>
      <section className="websites-section" id="websites" aria-labelledby="websites-title">
        <div className="websites-intro"><p className="section-label">Website design by Built by Zac</p><h2 id="websites-title">Your business.<br/>A website that<br/>feels like it.</h2><p>Zac and Oli design and build distinctive websites for independent businesses. Cafés, shops, salons and service businesses, with their character front and centre.</p><p>From a focused single page to a full website, we handle the design, mobile layout and launch together.</p><a className="website-cta" href="https://sites.builtbyzac.ai/#examples">Explore the website examples <ArrowUpRight size={19}/></a><span className="website-demo-note">Explore working concepts for a café, hair studio and plant shop.</span></div>
        <div className="website-packages"><h3>A starting point for your website</h3>
          <a href="https://sites.builtbyzac.ai/#packages"><div><h4>Starter</h4><p>One bespoke page with the essentials: services, opening times and ways to get in touch.</p></div><span>From £450 <ArrowUpRight size={17}/></span></a>
          <a href="https://sites.builtbyzac.ai/#packages"><div><h4>Shopfront</h4><p>Up to five pages, with room for your story, gallery, team and booking links.</p></div><span>From £900 <ArrowUpRight size={17}/></span></a>
          <a href="https://sites.builtbyzac.ai/#packages"><div><h4>Custom</h4><p>Ecommerce, ordering, bookings or a more ambitious idea, scoped around your business.</p></div><span>Let’s talk <ArrowUpRight size={17}/></span></a>
          <p className="website-price-note">Starting prices. The final scope and quote are agreed before work begins.</p>
        </div>
      </section>
      <section className="about" id="about"><div className="about-mark" aria-hidden="true">z<span>.</span></div><div className="about-copy"><p className="section-label">The person behind the build</p><h2>Hello, I’m Zac.</h2><p>I’m an AI developer and automation engineer. I connect models, APIs, databases and interfaces to turn complex requirements into working software.</p><p>I’m an independent developer based in Thanet, Kent. You work with me from the first conversation through to launch, with regular previews and clear decisions along the way.</p><div className="about-links"><a href="https://uk.linkedin.com/in/zacsladden">Find me on LinkedIn <ArrowUpRight size={16}/></a><a href="https://sites.builtbyzac.ai/">Looking for a business website? <ArrowUpRight size={16}/></a></div></div></section>
      <section className="contact" id="contact"><p>Have a process that could work better?</p><h2>Let’s get<br/>into it<ArrowUpRight aria-hidden="true"/></h2><div className="contact-bottom"><a href="mailto:zac@builtbyzac.ai">zac@builtbyzac.ai</a><a className="whatsapp" href="https://wa.me/message/WFUXJMREY36HN1">Chat on WhatsApp <ArrowUpRight size={19}/></a></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Automated by Zac</span><span>AI, automation & a bit of independent thinking.</span><a href="#top">Back to top ↑</a></footer>
  </div>;
}
