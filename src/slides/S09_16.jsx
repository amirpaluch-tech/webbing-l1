// S09 — WHAT HAPPENED? → WHO IS AFFECTED?
export function S09() {
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 60% 80% at 25% 50%, #030D1F 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 75% 50%, #061828 0%, transparent 60%),
          linear-gradient(180deg, #020C1B 0%, #051525 50%, #020C1B 100%)
        `
      }}/>

      {/* Split screen bg: left = tech dashboard, right = customer map */}
      <div className="absolute inset-0 opacity-20" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800">
          {/* Left — tech grid */}
          {Array.from({length:8}).map((_,i)=>(
            <g key={i}>
              <rect x={60+i*80} y={80} width={70} height={40} rx="3"
                fill="rgba(30,144,255,0.05)" stroke="rgba(30,144,255,0.2)" strokeWidth="0.8"/>
              <rect x={60+(i%4)*160} y={150+(Math.floor(i/4))*60} width={150} height={40} rx="3"
                fill="rgba(30,144,255,0.03)" stroke="rgba(30,144,255,0.15)" strokeWidth="0.8"/>
            </g>
          ))}
          {/* Center divider */}
          <line x1="700" y1="100" x2="700" y2="700" stroke="rgba(30,144,255,0.2)" strokeWidth="1" strokeDasharray="8,8"/>
          {/* Right — customer dots (map) */}
          {Array.from({length:25}).map((_,i)=>(
            <circle key={i} cx={750+(i*53)%600} cy={100+(i*71)%600}
              r={3+((i*11)%4)} fill="#1E90FF"
              opacity={0.3+(i%5)*0.1}/>
          ))}
        </svg>
      </div>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width:"32px", height:"2px", background:"#1E90FF" }}/>
            <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">The Evolution</span>
          </div>

          <div className="space-y-5 max-w-3xl">
            {[
              { q:"WHAT HAPPENED?",      label:"MONITORING",             dim:true,  big:false },
              { q:"WHY DID IT HAPPEN?",  label:"OBSERVABILITY",          dim:false, big:false },
              { q:"WHO IS AFFECTED?",    label:"BUSINESS OBSERVABILITY", dim:false, big:true  },
            ].map((item,i)=>(
              <div key={item.q} className="flex items-center gap-6 px-8 py-5 rounded-2xl"
                style={{
                  background: item.big ? "rgba(30,144,255,0.12)" : "rgba(30,144,255,0.04)",
                  border: `1px solid ${item.big ? "rgba(30,144,255,0.45)" : "rgba(30,144,255,0.15)"}`,
                  opacity: item.dim ? 0.5 : 1
                }}>
                <div className="font-bc font-900 text-white/50 w-6 text-lg">{i+1}</div>
                <div className="flex-1">
                  <div className="font-bc font-600 text-white/30 text-xs tracking-widest mb-1">{item.label}</div>
                  <div className="font-bc font-900 uppercase"
                    style={{
                      fontSize: item.big ? "clamp(2rem,3.8vw,3.2rem)" : "clamp(1.5rem,2.8vw,2.4rem)",
                      color: item.big ? "#1E90FF" : "white"
                    }}>
                    {item.q}
                  </div>
                </div>
                {i < 2 && <div className="font-bc font-900 text-white/20 text-3xl">→</div>}
              </div>
            ))}
          </div>

          <div className="mt-10" style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
            <p className="font-bc font-700 text-white/70" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)" }}>
              Data becomes valuable only when connected to{" "}
              <span style={{ color:"#1E90FF" }}>customer impact.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// S10 — ONE VERSION OF THE TRUTH
export function S10() {
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 60% at 65% 50%, #061E3E 0%, transparent 60%),
          linear-gradient(135deg, #020C1B 0%, #041830 60%, #020C1B 100%)
        `
      }}/>

      {/* Mission control monitors bg */}
      <div className="absolute inset-0 opacity-15" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {[
            [500,80,380,240],[900,80,240,180],[1160,80,220,180],
            [500,340,240,200],[760,340,280,200],[1060,340,320,200],
          ].map(([x,y,w,h],i)=>(
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} rx="6"
                fill="rgba(30,144,255,0.04)" stroke="rgba(30,144,255,0.2)" strokeWidth="1"/>
              {/* Mini chart lines */}
              <polyline points={`${x+20},${y+h-30} ${x+w*0.3},${y+h*0.4} ${x+w*0.6},${y+h*0.6} ${x+w-20},${y+h*0.3}`}
                fill="none" stroke="rgba(30,144,255,0.4)" strokeWidth="1.5"/>
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.92) 0%, rgba(2,12,27,0.65) 45%, rgba(2,12,27,0.1) 100%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ width:"32px", height:"2px", background:"#1E90FF" }}/>
                <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">What Great Looks Like</span>
              </div>
              <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
                style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)" }}>ONE VERSION</h1>
              <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
                style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)" }}>OF THE</h1>
              <h1 className="font-bc font-900 leading-none uppercase"
                style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)", color:"#1E90FF" }}>TRUTH</h1>

              <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 28px" }}/>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  {t:"Multiple dashboards",good:false},
                  {t:"Multiple truths",    good:false},
                  {t:"One operational truth",good:true},
                  {t:"One conversation",  good:true},
                ].map(item=>(
                  <div key={item.t} className="px-4 py-3 rounded-xl font-bc font-600"
                    style={{
                      background: item.good?"rgba(30,144,255,0.1)":"rgba(255,255,255,0.03)",
                      border: item.good?"1px solid rgba(30,144,255,0.3)":"1px solid rgba(255,255,255,0.06)",
                      color: item.good?"#60B4FF":"rgba(255,255,255,0.3)",
                      fontSize:"0.85rem"
                    }}>
                    {item.good?"✓":"✗"}&nbsp; {item.t}
                  </div>
                ))}
              </div>

              <div style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
                <p className="font-bc font-700 text-white/60 mb-1" style={{ fontSize:"clamp(1rem,1.5vw,1.2rem)" }}>
                  The conversation changes from "Who's right?"
                </p>
                <p className="font-bc font-700" style={{ fontSize:"clamp(1rem,1.5vw,1.2rem)", color:"#1E90FF" }}>
                  To "What do we do next?"
                </p>
              </div>
            </div>

            {/* Single pane visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {["NETWORK","APPS","CUSTOMERS","REVENUE","SERVICES","INFRA"].map((s,i)=>{
                  const angle = (i/6)*Math.PI*2 - Math.PI/2;
                  const r = 130;
                  const x = Math.cos(angle)*r;
                  const y = Math.sin(angle)*r;
                  return (
                    <div key={s} className="absolute flex flex-col items-center"
                      style={{ left:`calc(50% + ${x}px)`, top:`calc(50% + ${y}px)`, transform:"translate(-50%,-50%)" }}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-1"
                        style={{ background:"rgba(30,144,255,0.08)", border:"1px solid rgba(30,144,255,0.25)" }}>
                        <span style={{ fontSize:"1.1rem" }}>{["🔗","📱","👥","💰","⚙️","🖥️"][i]}</span>
                      </div>
                      <span className="font-bc font-700 text-white/40" style={{ fontSize:"0.65rem", letterSpacing:"0.08em" }}>{s}</span>
                    </div>
                  );
                })}
                {/* Center */}
                <div className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center relative z-10"
                  style={{ background:"rgba(30,144,255,0.15)", border:"2px solid rgba(30,144,255,0.5)",
                    boxShadow:"0 0 40px rgba(30,144,255,0.2)" }}>
                  <div className="font-bc font-900 text-wb text-xs tracking-wider mb-1">SINGLE</div>
                  <div className="font-bc font-900 text-wb text-xs tracking-wider mb-1">PANE</div>
                  <div className="flex gap-1 mt-1">
                    {["🟢","🟢","🟡","🟢"].map((c,i)=><span key={i} style={{ fontSize:"0.6rem" }}>{c}</span>)}
                  </div>
                </div>
                {/* Connecting lines */}
                <svg className="absolute inset-0 pointer-events-none" style={{ width:"320px", height:"320px", left:"-96px", top:"-96px" }}>
                  {Array.from({length:6}).map((_,i)=>{
                    const angle=(i/6)*Math.PI*2-Math.PI/2;
                    const r=130;
                    return <line key={i}
                      x1={160+Math.cos(angle)*r} y1={160+Math.sin(angle)*r}
                      x2="160" y2="160"
                      stroke="#1E90FF" strokeWidth="0.8" strokeDasharray="4,5" opacity="0.3"/>;
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S11 — ONE INCIDENT. ONE OWNER. (Air traffic control)
export function S11() {
  const steps = ["DETECT","ASSIGN\nOWNER","COORDINATE","COMMUNICATE","RESOLVE","RCA","PREVENT"];
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 60% at 60% 40%, #031525 0%, transparent 60%),
          linear-gradient(135deg, #020C1B 0%, #051525 60%, #020C1B 100%)
        `
      }}/>

      {/* Radar bg */}
      <div className="absolute" style={{ right:"8%", top:"15%", opacity:0.12, pointerEvents:"none" }}>
        <svg width="360" height="360" viewBox="0 0 360 360">
          {[40,80,120,160].map(r=>(
            <circle key={r} cx="180" cy="180" r={r} fill="none" stroke="#1E90FF" strokeWidth="0.8"/>
          ))}
          <line x1="180" y1="0" x2="180" y2="360" stroke="#1E90FF" strokeWidth="0.5" opacity="0.5"/>
          <line x1="0" y1="180" x2="360" y2="180" stroke="#1E90FF" strokeWidth="0.5" opacity="0.5"/>
          <line x1="0" y1="0" x2="360" y2="360" stroke="#1E90FF" strokeWidth="0.5" opacity="0.3"/>
          <line x1="360" y1="0" x2="0" y2="360" stroke="#1E90FF" strokeWidth="0.5" opacity="0.3"/>
          {/* Sweep */}
          <path d="M180,180 L180,20 A160,160 0 0,1 340,180 Z" fill="rgba(30,144,255,0.05)"/>
          {[[120,100],[220,140],[160,220],[280,200],[80,230]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="4" fill="#1E90FF" opacity={0.4+i*0.1}/>
          ))}
        </svg>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.93) 0%, rgba(2,12,27,0.7) 50%, rgba(2,12,27,0.2) 100%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#1E90FF" }} className="pulse"/>
            <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">⭐ Incident Command Model</span>
          </div>

          <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
            style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)" }}>ONE INCIDENT.</h1>
          <h1 className="font-bc font-900 leading-none uppercase"
            style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)", color:"#1E90FF" }}>ONE OWNER.</h1>

          <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 28px" }}/>

          {/* Flow steps */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            {steps.map((step,i)=>(
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2.5 rounded-xl font-bc font-700 text-center"
                  style={{
                    background: i===1?"rgba(30,144,255,0.2)":"rgba(30,144,255,0.06)",
                    border: i===1?"1px solid rgba(30,144,255,0.6)":"1px solid rgba(30,144,255,0.15)",
                    color: i===1?"#1E90FF":"rgba(255,255,255,0.7)",
                    fontSize:"clamp(0.7rem,1.1vw,0.9rem)",
                    letterSpacing:"0.05em", lineHeight:"1.2",
                    minWidth:"70px"
                  }}>
                  {step}
                </div>
                {i<steps.length-1 && <span className="font-bc font-900 text-wb/30">→</span>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="font-bc font-600 text-white/30 text-xs tracking-widest uppercase mb-4">OWNER RESPONSIBILITIES</div>
              {["Owns coordination","Owns communication","Owns escalation","Owns customer updates","Does NOT need to be the resolver"].map(r=>(
                <div key={r} className="flex items-center gap-3 mb-3">
                  <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#1E90FF", flexShrink:0 }}/>
                  <span className="font-bc font-700 text-white" style={{ fontSize:"clamp(0.9rem,1.5vw,1.2rem)" }}>{r}</span>
                </div>
              ))}
            </div>
            <div style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"24px" }}>
              <p className="font-bc font-700 text-white/70 mb-4" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)" }}>
                One owner. One story.
              </p>
              <p className="font-bc font-900" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)", color:"#1E90FF" }}>
                One customer message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S12 — OPERATE. RESTORE. IMPROVE.
export function S12() {
  const tiers = [
    { n:"T3", label:"ENGINEERING & PRODUCT",   mission:"Prevent recurrence. Permanent fixes.", w:"55%",  bg:"rgba(30,144,255,0.18)", border:"rgba(30,144,255,0.5)" },
    { n:"T2", label:"TECHNICAL OPERATIONS",    mission:"Restore. Deep troubleshooting.",       w:"75%",  bg:"rgba(30,144,255,0.1)",  border:"rgba(30,144,255,0.35)" },
    { n:"T1", label:"SERVICE OPERATIONS / NOC",mission:"Detect. Triage. Communicate.",         w:"100%", bg:"rgba(30,144,255,0.05)", border:"rgba(30,144,255,0.2)" },
  ];
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:"radial-gradient(ellipse 80% 60% at 50% 50%, #061828 0%, #020C1B 70%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
                style={{ fontSize:"clamp(3.5rem,6vw,5.5rem)" }}>OPERATE.</h1>
              <h1 className="font-bc font-900 leading-none uppercase mb-0"
                style={{ fontSize:"clamp(3.5rem,6vw,5.5rem)", color:"#1E90FF" }}>RESTORE.</h1>
              <h1 className="font-bc font-900 text-white leading-none uppercase"
                style={{ fontSize:"clamp(3.5rem,6vw,5.5rem)" }}>IMPROVE.</h1>

              <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 28px" }}/>

              <div className="font-bc font-600 text-white/30 text-xs tracking-widest uppercase mb-4">SUPPORTING FUNCTIONS</div>
              <div className="flex flex-wrap gap-2">
                {["OBSERVABILITY","AUTOMATION","INCIDENT MGMT","SRE"].map(s=>(
                  <div key={s} className="px-3 py-2 rounded-lg font-bc font-700 tracking-wider"
                    style={{ background:"rgba(30,144,255,0.08)", border:"1px solid rgba(30,144,255,0.2)",
                      color:"#60B4FF", fontSize:"0.8rem" }}>{s}</div>
                ))}
              </div>
            </div>

            {/* Pyramid */}
            <div className="flex flex-col items-center gap-3">
              <div className="font-bc font-600 text-white/25 text-xs tracking-widest uppercase mb-2">OPERATING MODEL</div>
              {tiers.map(t=>(
                <div key={t.n} className="flex items-center gap-4 px-6 py-4 rounded-xl"
                  style={{ background:t.bg, border:`1px solid ${t.border}`, width:t.w }}>
                  <div className="font-bc font-900 text-xl shrink-0" style={{ color:"#1E90FF" }}>{t.n}</div>
                  <div>
                    <div className="font-bc font-800 text-white tracking-wider"
                      style={{ fontSize:"clamp(0.75rem,1.2vw,0.95rem)" }}>{t.label}</div>
                    <div className="font-bc font-500 text-white/40"
                      style={{ fontSize:"clamp(0.65rem,1vw,0.8rem)" }}>{t.mission}</div>
                  </div>
                </div>
              ))}
              <div className="font-bc font-700 text-wb/50 text-sm text-center tracking-wider mt-2">
                Every layer has a mission.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S13 — SOMEBODY MUST OWN THE OUTCOME
export function S13() {
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 70% 70% at 70% 50%, #031A3A 0%, transparent 60%),
          linear-gradient(135deg, #020C1B 0%, #041828 60%, #020C1B 100%)
        `
      }}/>

      {/* Glowing hub bg */}
      <div className="absolute" style={{
        right:"10%", top:"50%", transform:"translateY(-50%)",
        width:"400px", height:"400px",
        background:"radial-gradient(ellipse, rgba(30,144,255,0.1) 0%, transparent 70%)",
        pointerEvents:"none"
      }}/>
      <div className="absolute inset-0" style={{ pointerEvents:"none", opacity:0.12 }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800">
          <circle cx="1050" cy="400" r="120" fill="none" stroke="#1E90FF" strokeWidth="1.5"/>
          <circle cx="1050" cy="400" r="180" fill="none" stroke="#1E90FF" strokeWidth="0.8" strokeDasharray="6,8"/>
          <circle cx="1050" cy="400" r="240" fill="none" stroke="#1E90FF" strokeWidth="0.5" strokeDasharray="4,10"/>
          {["RELIABILITY","INCIDENT OWN.","ESCALATION","CX VISIBILITY","CROSS-FUNC."].map((l,i)=>{
            const a=(i/5)*Math.PI*2-Math.PI/2;
            const r=150;
            return (
              <g key={l}>
                <circle cx={1050+Math.cos(a)*r} cy={400+Math.sin(a)*r} r="30"
                  fill="rgba(30,144,255,0.08)" stroke="rgba(30,144,255,0.35)" strokeWidth="1"/>
                <line x1={1050+Math.cos(a)*70} y1={400+Math.sin(a)*70}
                  x2={1050+Math.cos(a)*120} y2={400+Math.sin(a)*120}
                  stroke="rgba(30,144,255,0.4)" strokeWidth="1"/>
                <text x={1050+Math.cos(a)*r} y={400+Math.sin(a)*r+4}
                  textAnchor="middle" fill="rgba(96,180,255,0.7)"
                  fontFamily="'Barlow Condensed'" fontWeight="700" fontSize="9">{l}</text>
              </g>
            );
          })}
          <circle cx="1050" cy="400" r="50" fill="rgba(30,144,255,0.15)" stroke="#1E90FF" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.93) 0%, rgba(2,12,27,0.7) 50%, rgba(2,12,27,0.15) 100%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div style={{ maxWidth:"580px" }}>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#1E90FF" }} className="pulse"/>
              <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">⭐ The Missing Role</span>
            </div>

            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(3rem,5.5vw,5rem)" }}>SOMEBODY MUST</h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(3rem,5.5vw,5rem)", color:"#1E90FF" }}>OWN THE OUTCOME</h1>

            <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 24px" }}/>

            <div className="space-y-2 mb-8">
              {["Not another tool.","Not another dashboard.","A leadership function."].map((t,i)=>(
                <div key={t} className="font-bc font-700"
                  style={{
                    fontSize:"clamp(1rem,1.6vw,1.3rem)",
                    color: i===2?"#1E90FF":"rgba(255,255,255,0.25)",
                    textDecoration: i<2?"line-through":"none"
                  }}>{t}</div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden mb-8" style={{ border:"1px solid rgba(30,144,255,0.3)" }}>
              <div className="px-6 py-4" style={{ background:"rgba(30,144,255,0.15)", borderBottom:"1px solid rgba(30,144,255,0.2)" }}>
                <div className="font-bc font-600 text-white/30 text-xs tracking-widest uppercase mb-1">RECOMMENDED TITLE</div>
                <div className="font-bc font-900 text-white uppercase tracking-wide"
                  style={{ fontSize:"clamp(0.9rem,1.5vw,1.2rem)" }}>
                  DIRECTOR OF SERVICE RELIABILITY & OPERATIONS
                </div>
              </div>
              <div className="px-6 py-4 grid grid-cols-2 gap-2" style={{ background:"rgba(4,14,30,0.8)" }}>
                {["Reliability","Incident ownership","Escalation governance","Customer impact visibility","Cross-functional execution","NOC transformation"].map(r=>(
                  <div key={r} className="flex items-center gap-2">
                    <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#1E90FF", flexShrink:0 }}/>
                    <span className="font-bc font-600 text-white/70" style={{ fontSize:"0.8rem" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
              <p className="font-bc font-700" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)", color:"#1E90FF" }}>
                Somebody must wake up every morning thinking about customer confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S14 — STANDARDIZE → CENTRALIZE → SIMPLIFY → PREDICT → AUTOMATE
export function S14() {
  const phases = [
    { n:"01", t:"STANDARDIZE", sub:"Monitoring standards, SLAs, ownership, escalation framework" },
    { n:"02", t:"CENTRALIZE",  sub:"Unified dashboards, event correlation, service mapping" },
    { n:"03", t:"SIMPLIFY",    sub:"Deduplicate alerts, reduce noise, actionable alerting" },
    { n:"04", t:"PREDICT",     sub:"Trend analysis, proactive monitoring, anomaly detection" },
    { n:"05", t:"AUTOMATE",    sub:"Auto-remediation, runbooks, smart escalations" },
  ];
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:"radial-gradient(ellipse 80% 60% at 50% 50%, #061828 0%, #020C1B 70%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width:"32px", height:"2px", background:"#1E90FF" }}/>
            <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">Transformation Roadmap</span>
          </div>

          <h1 className="font-bc font-900 text-white leading-none uppercase mb-10"
            style={{ fontSize:"clamp(2rem,3.5vw,3rem)", letterSpacing:"0.05em" }}>
            STANDARDIZE →&nbsp;CENTRALIZE →&nbsp;SIMPLIFY →&nbsp;PREDICT →&nbsp;AUTOMATE
          </h1>

          {/* Metro stations */}
          <div className="relative">
            <div className="absolute left-7 right-7 h-0.5" style={{ top:"28px", background:"rgba(30,144,255,0.2)" }}/>
            <div className="grid grid-cols-5 gap-4">
              {phases.map((p,i)=>(
                <div key={p.n} className="flex flex-col items-center gap-3">
                  <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background:"#020C1B", border:`2px solid #1E90FF` }}>
                    <span className="font-bc font-900 text-wb" style={{ fontSize:"0.9rem" }}>{p.n}</span>
                  </div>
                  <div className="text-center px-3 py-4 rounded-xl w-full"
                    style={{ background:"rgba(30,144,255,0.05)", border:"1px solid rgba(30,144,255,0.15)" }}>
                    <div className="font-bc font-900 tracking-wider mb-2" style={{ fontSize:"clamp(0.85rem,1.3vw,1.05rem)", color:"#1E90FF" }}>
                      {p.t}
                    </div>
                    <div className="font-bc font-500 text-white/35 leading-snug" style={{ fontSize:"0.7rem" }}>
                      {p.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8" style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
            <p className="font-bc font-700" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)", color:"#1E90FF" }}>
              Transformation is a journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// S15 — MEASURE WHAT MATTERS (Cockpit gauges)
export function S15() {
  const groups = [
    { cat:"CUSTOMER",    icon:"👥", items:["SLA compliance","Impacted customers","Escalation volume"] },
    { cat:"RELIABILITY", icon:"⚡", items:["MTTD","MTTR","Service availability"] },
    { cat:"OPERATIONS",  icon:"⚙️", items:["Alert quality","Escalation quality","Incident recurrence"] },
    { cat:"BUSINESS",    icon:"📈", items:["Revenue protection","Customer retention","Enterprise satisfaction"] },
  ];
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 60% 80% at 70% 50%, #031525 0%, transparent 55%),
          linear-gradient(135deg, #020C1B 0%, #041828 60%, #020C1B 100%)
        `
      }}/>

      {/* Cockpit gauge bg */}
      <div className="absolute" style={{ right:"5%", top:"15%", opacity:0.08, pointerEvents:"none" }}>
        <svg width="400" height="400" viewBox="0 0 400 400">
          {[60,90,120].map(r=>(
            <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#1E90FF" strokeWidth="1"/>
          ))}
          {Array.from({length:12}).map((_,i)=>{
            const a=(i/12)*Math.PI*2;
            return <line key={i} x1={200+Math.cos(a)*90} y1={200+Math.sin(a)*90}
              x2={200+Math.cos(a)*120} y2={200+Math.sin(a)*120}
              stroke="#1E90FF" strokeWidth="1.5"/>;
          })}
          <path d="M200,200 L200,110 A90,90 0 0,1 280,180 Z" fill="rgba(30,144,255,0.08)"/>
        </svg>
      </div>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width:"32px", height:"2px", background:"#1E90FF" }}/>
            <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">Success Metrics</span>
          </div>

          <h1 className="font-bc font-900 uppercase leading-none mb-8"
            style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)" }}>
            MEASURE WHAT <span style={{ color:"#1E90FF" }}>MATTERS</span>
          </h1>

          <div className="grid grid-cols-4 gap-4">
            {groups.map(g=>(
              <div key={g.cat} className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(30,144,255,0.2)" }}>
                <div className="px-5 py-4 flex items-center gap-3"
                  style={{ background:"rgba(30,144,255,0.12)", borderBottom:"1px solid rgba(30,144,255,0.15)" }}>
                  <span style={{ fontSize:"1.3rem" }}>{g.icon}</span>
                  <div className="font-bc font-900 tracking-widest" style={{ color:"#1E90FF", fontSize:"0.85rem" }}>{g.cat}</div>
                </div>
                <div className="px-5 py-4 space-y-3" style={{ background:"rgba(4,14,30,0.8)" }}>
                  {g.items.map(item=>(
                    <div key={item} className="flex items-center gap-2">
                      <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#1E90FF", flexShrink:0 }}/>
                      <span className="font-bc font-700 text-white leading-tight"
                        style={{ fontSize:"clamp(0.85rem,1.3vw,1.05rem)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8" style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
            <p className="font-bc font-700 text-white/60 mb-1" style={{ fontSize:"clamp(1rem,1.5vw,1.2rem)" }}>Stop measuring infrastructure.</p>
            <p className="font-bc font-900" style={{ fontSize:"clamp(1rem,1.5vw,1.2rem)", color:"#1E90FF" }}>Measure outcomes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// S16 — CUSTOMER CONFIDENCE (Closing)
export function S16() {
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 80% at 50% 50%, #061E3E 0%, #020C1B 65%),
          linear-gradient(180deg, #020C1B 0%, #041828 50%, #020C1B 100%)
        `
      }}/>

      {/* Globe + green health glow */}
      <div className="absolute inset-0" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Globe */}
          <circle cx="700" cy="500" r="340" fill="none" stroke="rgba(30,144,255,0.15)" strokeWidth="1"/>
          <circle cx="700" cy="500" r="280" fill="none" stroke="rgba(30,144,255,0.1)" strokeWidth="0.8"/>
          <ellipse cx="700" cy="500" rx="340" ry="100" fill="none" stroke="rgba(30,144,255,0.08)" strokeWidth="0.6"/>
          <ellipse cx="700" cy="500" rx="340" ry="200" fill="none" stroke="rgba(30,144,255,0.06)" strokeWidth="0.6"/>
          {/* City lights green/healthy */}
          {Array.from({length:30}).map((_,i)=>(
            <circle key={i} cx={350+(i*73)%700} cy={320+(i*53)%360} r={2+((i*7)%4)}
              fill={i%4===0?"#00FF88":"#1E90FF"} opacity={0.3+((i*11)%8)*0.05}/>
          ))}
          {/* Connected arcs */}
          {[
            "M200,300 Q700,200 1200,300",
            "M250,400 Q700,280 1150,380",
            "M300,500 Q700,350 1100,480",
          ].map((d,i)=>(
            <path key={i} d={d} fill="none" stroke="rgba(30,144,255,0.2)" strokeWidth="0.8" strokeDasharray="6,8"/>
          ))}
          {/* Customer node above globe */}
          <circle cx="700" cy="160" r="16" fill="rgba(30,144,255,0.2)" stroke="#1E90FF" strokeWidth="2"/>
          <circle cx="700" cy="160" r="8" fill="#1E90FF"/>
          <circle cx="700" cy="160" r="30" fill="none" stroke="rgba(30,144,255,0.3)" strokeWidth="0.8"/>
          <circle cx="700" cy="160" r="50" fill="none" stroke="rgba(30,144,255,0.15)" strokeWidth="0.5"/>
          <line x1="700" y1="176" x2="700" y2="220" stroke="rgba(30,144,255,0.4)" strokeWidth="1" strokeDasharray="4,4"/>
          {/* Green health indicators */}
          {[[400,200],[600,180],[800,185],[1000,200]].map(([x,y],i)=>(
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="rgba(0,255,136,0.2)" stroke="#00FF88" strokeWidth="1"/>
              <circle cx={x} cy={y} r="2.5" fill="#00FF88"/>
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(180deg, rgba(2,12,27,0.5) 0%, rgba(2,12,27,0.2) 40%, rgba(2,12,27,0.8) 100%)"
      }}/>

      <div className="slide-inner items-center justify-center" style={{ display:"flex" }}>
        <div className="w-full max-w-7xl mx-auto px-16 text-center">
          <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
            style={{ fontSize:"clamp(5rem,10vw,9rem)" }}>CUSTOMER</h1>
          <h1 className="font-bc font-900 leading-none uppercase mb-8"
            style={{ fontSize:"clamp(5rem,10vw,9rem)", color:"#1E90FF" }}>CONFIDENCE</h1>

          {/* 4 pillars */}
          <div className="flex justify-center gap-4 mb-8">
            {[{icon:"👁️",l:"VISIBILITY"},{icon:"✋",l:"OWNERSHIP"},{icon:"📋",l:"DISCIPLINE"},{icon:"⚙️",l:"AUTOMATION"}].map(p=>(
              <div key={p.l} className="flex flex-col items-center px-8 py-4 rounded-2xl"
                style={{ background:"rgba(30,144,255,0.08)", border:"1px solid rgba(30,144,255,0.2)" }}>
                <span style={{ fontSize:"1.8rem", marginBottom:"6px" }}>{p.icon}</span>
                <span className="font-bc font-900 text-white tracking-widest" style={{ fontSize:"0.9rem" }}>{p.l}</span>
              </div>
            ))}
          </div>

          {/* Final quote */}
          <div className="mx-auto max-w-3xl rounded-2xl px-10 py-6 relative"
            style={{ background:"rgba(30,144,255,0.06)", border:"1px solid rgba(30,144,255,0.2)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-wb rounded-l-2xl"/>
            <p className="font-bc font-700 text-white/70 mb-2" style={{ fontSize:"clamp(0.9rem,1.4vw,1.15rem)" }}>
              The organizations that win are not the ones with the most monitoring tools.
            </p>
            <p className="font-bc font-900" style={{ fontSize:"clamp(0.9rem,1.4vw,1.15rem)", color:"#1E90FF" }}>
              They are the ones that create clear ownership, rapid execution, and customer confidence.
            </p>
          </div>

          <div className="mt-6 font-bc font-700 text-white/25 tracking-[0.3em] uppercase text-sm">
            THANK YOU. &nbsp;QUESTIONS?
          </div>
        </div>
      </div>
    </div>
  );
}
