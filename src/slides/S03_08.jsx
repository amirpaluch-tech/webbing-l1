// S03 — CUSTOMERS BUY CONFIDENCE (Iceberg)
export function S03() {
  const below = ["INFRASTRUCTURE","NETWORKS","MONITORING","PEOPLE","PROCESSES","SECURITY","DATA"];
  return (
    <div className="slide">
      {/* Sky to deep ocean gradient */}
      <div className="absolute inset-0" style={{
        background:`linear-gradient(180deg,
          #0A1E35 0%, #0D2845 25%,
          #051525 45%, #020C1B 55%,
          #020812 70%, #010610 100%)`
      }}/>
      {/* Water line shimmer */}
      <div className="absolute left-0 right-0" style={{
        top:"42%", height:"2px",
        background:"linear-gradient(90deg, transparent, rgba(30,144,255,0.4), rgba(96,180,255,0.6), rgba(30,144,255,0.4), transparent)"
      }}/>
      {/* Above water light */}
      <div className="absolute" style={{
        top:"10%", right:"25%", width:"300px", height:"200px",
        background:"radial-gradient(ellipse, rgba(120,180,255,0.15) 0%, transparent 70%)"
      }}/>

      {/* Iceberg SVG */}
      <div className="absolute" style={{ right:"10%", top:"5%", bottom:"0", width:"45%", pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 500 700" preserveAspectRatio="xMidYMid meet">
          {/* Above water - bright white peak */}
          <polygon points="250,40 320,200 180,200"
            fill="url(#snowGrad)" stroke="rgba(150,200,255,0.3)" strokeWidth="0.5"/>
          <polygon points="180,200 320,200 340,280 160,280"
            fill="url(#snowGrad2)" />
          <defs>
            <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(200,225,255,0.9)"/>
              <stop offset="100%" stopColor="rgba(100,160,220,0.7)"/>
            </linearGradient>
            <linearGradient id="snowGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(100,160,220,0.7)"/>
              <stop offset="100%" stopColor="rgba(30,80,140,0.8)"/>
            </linearGradient>
            <linearGradient id="deepIce" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(20,60,120,0.9)"/>
              <stop offset="100%" stopColor="rgba(5,20,50,0.95)"/>
            </linearGradient>
          </defs>
          {/* CONNECTIVITY label */}
          <line x1="330" y1="130" x2="420" y2="130" stroke="#1E90FF" strokeWidth="1"/>
          <circle cx="327" cy="130" r="3" fill="#1E90FF"/>
          <text x="430" y="134" fill="#60B4FF" fontFamily="'Barlow Condensed'" fontWeight="700"
            fontSize="13" letterSpacing="1">CONNECTIVITY</text>

          {/* Below water mass */}
          <polygon points="160,280 340,280 390,400 420,550 380,680 120,680 80,550 110,400"
            fill="url(#deepIce)" stroke="rgba(30,100,180,0.3)" strokeWidth="0.8"/>

          {/* Labels with lines on below-water */}
          {below.map((label, i) => {
            const y = 320 + i * 52;
            const lineX1 = i%2===0 ? 155 : 345;
            const lineX2 = i%2===0 ? 60 : 440;
            return (
              <g key={label}>
                <line x1={lineX1} y1={y} x2={lineX2} y2={y}
                  stroke="rgba(30,144,255,0.5)" strokeWidth="0.8"/>
                <circle cx={lineX1} cy={y} r="2.5" fill="#1E90FF" opacity="0.7"/>
                <text x={i%2===0 ? 52 : 448} y={y+4}
                  textAnchor={i%2===0?"end":"start"}
                  fill="rgba(150,200,255,0.6)"
                  fontFamily="'Barlow Condensed'" fontWeight="700"
                  fontSize="11" letterSpacing="1">{label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dark gradient over right for text area */}
      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.9) 0%, rgba(2,12,27,0.7) 45%, transparent 70%)"
      }}/>

      {/* Text */}
      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div style={{ maxWidth:"500px" }}>
            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(4rem,7.5vw,7rem)" }}>WHAT</h1>
            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(4rem,7.5vw,7rem)" }}>CUSTOMERS</h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(4rem,7.5vw,7rem)", color:"#1E90FF" }}>BUY</h1>

            <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0" }}/>

            {/* Shield + CONFIDENCE */}
            <div className="flex items-center gap-4 mb-8">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L8 12V24C8 33.9 15.1 43.2 24 46C32.9 43.2 40 33.9 40 24V12L24 4Z"
                  fill="rgba(30,144,255,0.15)" stroke="#1E90FF" strokeWidth="1.5"/>
                <path d="M16 24L21 29L32 18" stroke="#1E90FF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="font-bc font-900 uppercase" style={{ fontSize:"clamp(2rem,3.5vw,3rem)", color:"#fff" }}>
                CONFIDENCE
              </span>
            </div>

            <p className="font-bc font-700 text-white/50 uppercase tracking-wider"
              style={{ fontSize:"clamp(0.85rem,1.3vw,1rem)" }}>
              Customers only see outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// S04 — COMPLEXITY ALWAYS WINS (Dark control room feel)
export function S04() {
  const items = ["MORE CUSTOMERS","MORE SYSTEMS","MORE ALERTS","MORE TEAMS","MORE COMPLEXITY"];
  return (
    <div className="slide">
      {/* Dark red-tinted chaos background */}
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 60% at 70% 40%, #1A0808 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 50% 80%, #0D0505 0%, #020C1B 50%),
          linear-gradient(135deg, #020C1B 0%, #0A0808 50%, #020C1B 100%)
        `
      }}/>

      {/* Monitor grid background */}
      <div className="absolute inset-0 opacity-20" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800">
          {/* Screen-like rectangles */}
          {[
            [600,50,280,160],[900,50,200,120],[1120,50,220,140],
            [560,220,200,130],[780,220,220,130],[1020,220,180,120],[1220,220,160,110],
            [600,360,240,140],[860,360,200,130],[1080,360,220,140],
          ].map(([x,y,w,h],i)=>(
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} rx="4"
                fill="rgba(180,20,20,0.08)" stroke="rgba(200,30,30,0.3)" strokeWidth="1"/>
              <text x={x+w/2} y={y+h/2-8} textAnchor="middle"
                fill="rgba(255,80,80,0.7)" fontFamily="sans-serif" fontWeight="700" fontSize="14">⚠</text>
              <text x={x+w/2} y={y+h/2+10} textAnchor="middle"
                fill="rgba(255,80,80,0.6)" fontFamily="sans-serif" fontWeight="700" fontSize="11">ALERT</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Monitor glow */}
      <div className="absolute" style={{
        right:"5%", top:"10%", width:"55%", height:"80%",
        background:"radial-gradient(ellipse, rgba(180,20,20,0.08) 0%, transparent 70%)"
      }}/>

      {/* Gradient for text legibility */}
      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.92) 0%, rgba(2,12,27,0.75) 45%, rgba(2,12,27,0.2) 100%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div style={{ maxWidth:"540px" }}>
            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(4.5rem,8vw,7.5rem)" }}>THE</h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(4.5rem,8vw,7.5rem)", color:"#1E90FF" }}>REALITY</h1>

            <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 28px" }}/>

            {/* Pulse icon */}
            <div className="mb-6 w-14 h-14 rounded-full flex items-center justify-center"
              style={{ border:"2px solid rgba(30,144,255,0.4)", background:"rgba(30,144,255,0.08)" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M2 14h5l3-8 4 16 3-10 2 4h7" stroke="#1E90FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="space-y-3 mb-8">
              {items.map((item,i) => (
                <div key={item} className="flex items-center gap-3">
                  <div style={{ width:"28px", height:"2px", background:"rgba(30,144,255,0.5)" }}/>
                  <span className="font-bc font-700 text-white tracking-wider uppercase"
                    style={{ fontSize:"clamp(1.2rem,2vw,1.6rem)" }}>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-bc font-900 uppercase leading-tight"
              style={{ fontSize:"clamp(1.5rem,2.8vw,2.4rem)", color:"#1E90FF" }}>
              SUPPORT BECOMES<br/>REACTIVE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// S05 — EVERYONE OWNS A COMPONENT / NOBODY OWNS THE EXPERIENCE
export function S05() {
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 100% 80% at 50% 50%, #061828 0%, #020C1B 70%),
          linear-gradient(180deg, #020C1B 0%, #061828 50%, #020C1B 100%)
        `
      }}/>

      {/* Background team silhouettes as photo-like panels */}
      <div className="absolute inset-0 opacity-15" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* 6 "photo panels" at corners */}
          {[
            [20,60,280,220], [550,30,280,220], [1100,60,280,220],
            [20,520,280,220], [550,550,280,220], [1100,520,280,220],
          ].map(([x,y,w,h],i)=>(
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} rx="8"
                fill="rgba(30,144,255,0.05)" stroke="rgba(30,144,255,0.15)" strokeWidth="1"/>
              {/* silhouette person */}
              <ellipse cx={x+w/2} cy={y+h*0.35} rx={w*0.12} ry={w*0.14}
                fill="rgba(100,160,220,0.2)"/>
              <rect x={x+w*0.35} y={y+h*0.5} width={w*0.3} height={h*0.3} rx="4"
                fill="rgba(100,160,220,0.15)"/>
            </g>
          ))}
          {/* Blue laser lines from center */}
          {[[160,170],[690,140],[1240,170],[160,630],[690,660],[1240,630]].map(([x,y],i)=>(
            <line key={i} x1="700" y1="400" x2={x} y2={y}
              stroke="#1E90FF" strokeWidth="1.5" opacity="0.4"/>
          ))}
        </svg>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(180deg, rgba(2,12,27,0.3) 0%, rgba(2,12,27,0.1) 50%, rgba(2,12,27,0.3) 100%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="text-center">
            <h1 className="font-bc font-900 text-white leading-none uppercase"
              style={{ fontSize:"clamp(3rem,5.5vw,5rem)" }}>
              EVERYONE OWNS A COMPONENT
            </h1>
            <h1 className="font-bc font-900 leading-none uppercase mb-8"
              style={{ fontSize:"clamp(3rem,5.5vw,5rem)", color:"#1E90FF" }}>
              NOBODY OWNS THE EXPERIENCE
            </h1>

            {/* Team tags in a ring */}
            <div className="relative mx-auto" style={{ width:"600px", height:"260px" }}>
              {/* Center customer */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
                  style={{ background:"rgba(30,144,255,0.15)", border:"2px solid rgba(30,144,255,0.5)" }}>
                  <span style={{ fontSize:"2rem" }}>👤</span>
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full">
                {[
                  {label:"NOC",x:60,y:50,icon:"📺"},
                  {label:"NETWORK",x:220,y:20,icon:"🔗"},
                  {label:"PRODUCT",x:380,y:20,icon:"📦"},
                  {label:"ANALYTICS",x:520,y:50,icon:"📊"},
                  {label:"DEVOPS",x:60,y:200,icon:"♾️"},
                  {label:"CUSTOMER SUCCESS",x:470,y:200,icon:"🤝"},
                ].map((t,i)=>(
                  <g key={t.label}>
                    <line x1="300" y1="130" x2={t.x+40} y2={t.y+20}
                      stroke="#1E90FF" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.5"/>
                  </g>
                ))}
              </svg>

              {[
                {label:"NOC",x:"2%",y:"5%",icon:"📺"},
                {label:"NETWORK",x:"31%",y:"-5%",icon:"🔗"},
                {label:"PRODUCT",x:"59%",y:"-5%",icon:"📦"},
                {label:"ANALYTICS",x:"82%",y:"5%",icon:"📊"},
                {label:"DEVOPS",x:"2%",y:"65%",icon:"♾️"},
                {label:"CUSTOMER SUCCESS",x:"72%",y:"65%",icon:"🤝"},
              ].map(t=>(
                <div key={t.label} className="absolute flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ left:t.x, top:t.y, background:"rgba(30,144,255,0.08)", border:"1px solid rgba(30,144,255,0.25)" }}>
                  <span style={{ fontSize:"1rem" }}>{t.icon}</span>
                  <span className="font-bc font-700 text-white tracking-wider"
                    style={{ fontSize:"0.75rem", whiteSpace:"nowrap" }}>{t.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4" style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px", display:"inline-block", textAlign:"left" }}>
              <p className="font-bc font-700 text-white/70" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)" }}>
                Silos optimize locally.{" "}
                <span style={{ color:"#1E90FF" }}>Customers experience globally.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S06 — THE CUSTOMER DOESN'T CARE
export function S06() {
  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 60% at 30% 50%, #0A0A1E 0%, transparent 60%),
          radial-gradient(ellipse 70% 60% at 70% 50%, #100808 0%, transparent 60%),
          linear-gradient(135deg, #020C1B 0%, #080818 50%, #020C1B 100%)
        `
      }}/>

      {/* Architecture diagram in background right */}
      <div className="absolute" style={{ right:"5%", top:"10%", bottom:"10%", width:"50%", opacity:0.2, pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 600 600">
          {[
            {label:"NETWORK\nINFRASTRUCTURE",x:60,y:60},
            {label:"LOAD\nBALANCER",x:200,y:60},
            {label:"API\nGATEWAY",x:340,y:60},
            {label:"APPLICATION\nSERVICES",x:480,y:60},
            {label:"DATABASE\nCLUSTER",x:520,y:180},
            {label:"REDIS\nCACHE",x:520,y:280},
            {label:"MESSAGE\nQUEUE",x:520,y:380},
            {label:"MONITORING\n& ALERTS",x:520,y:480},
            {label:"LOG\nMANAGEMENT",x:380,y:530},
            {label:"MICROSERVICES",x:100,y:530},
          ].map((n,i)=>(
            <g key={i}>
              <rect x={n.x} y={n.y} width={90} height={50} rx="4"
                fill="rgba(30,144,255,0.06)" stroke="rgba(30,144,255,0.3)" strokeWidth="0.8"/>
              {n.label.split("\n").map((line,li)=>(
                <text key={li} x={n.x+45} y={n.y+18+li*14} textAnchor="middle"
                  fill="rgba(150,200,255,0.7)" fontFamily="'Barlow Condensed'" fontSize="9">{line}</text>
              ))}
            </g>
          ))}
        </svg>
      </div>

      {/* SERVICE DOWN box — center right */}
      <div className="absolute" style={{ right:"15%", top:"50%", transform:"translateY(-50%)" }}>
        <div className="rounded-2xl px-12 py-10 text-center"
          style={{ background:"rgba(180,20,20,0.12)", border:"2px solid rgba(255,68,68,0.6)",
            boxShadow:"0 0 40px rgba(255,68,68,0.15)" }}>
          <div style={{ fontSize:"3.5rem", marginBottom:"12px" }}>⚠</div>
          <div className="font-bc font-900 tracking-widest uppercase"
            style={{ fontSize:"1.8rem", color:"#FF4444" }}>SERVICE DOWN</div>
          <div className="font-bc font-600 text-white/40 mt-2">Please try again later.</div>
        </div>
      </div>

      {/* Left overlay */}
      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.95) 0%, rgba(2,12,27,0.7) 40%, rgba(2,12,27,0.1) 70%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div style={{ maxWidth:"480px" }}>
            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(3.5rem,7vw,6.5rem)" }}>THE CUSTOMER</h1>
            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(3.5rem,7vw,6.5rem)" }}>DOESN'T</h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(3.5rem,7vw,6.5rem)", color:"#1E90FF" }}>CARE</h1>

            <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 24px" }}/>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ border:"2px solid rgba(30,144,255,0.4)" }}>
                <span style={{ fontSize:"1.4rem" }}>👤</span>
              </div>
              <div>
                <div className="font-bc font-600 text-white/40 text-xs tracking-widest uppercase mb-1">CUSTOMER SEES</div>
                <p className="font-bc font-800 text-white uppercase"
                  style={{ fontSize:"clamp(1.1rem,1.8vw,1.5rem)" }}>
                  "MY SERVICE <span style={{ color:"#1E90FF" }}>DOESN'T WORK."</span>
                </p>
              </div>
            </div>

            <div style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
              <p className="font-bc font-700 text-white/60" style={{ fontSize:"clamp(1rem,1.6vw,1.2rem)" }}>
                The customer doesn't care whose fault it is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S07 — NO INCIDENT OWNER (most emotional)
export function S07() {
  return (
    <div className="slide">
      {/* Fire/burning background */}
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 60% at 60% 50%, #2A0A05 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 60% 40%, #3D1005 0%, transparent 40%),
          linear-gradient(135deg, #020C1B 0%, #1A0808 40%, #020C1B 100%)
        `
      }}/>
      {/* Flame glow */}
      <div className="absolute" style={{
        left:"40%", top:"20%", width:"350px", height:"350px",
        background:"radial-gradient(ellipse, rgba(255,120,20,0.12) 0%, transparent 70%)"
      }}/>

      {/* Pointing fingers SVG scene */}
      <div className="absolute inset-0 opacity-25" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Team name tags */}
          {[
            {label:"NETWORK",x:120,y:200},{label:"INFRASTRUCTURE",x:600,y:80},
            {label:"APPLICATIONS",x:950,y:120},{label:"SECURITY",x:1200,y:200},
            {label:"OPERATIONS",x:100,y:580},{label:"VENDORS",x:1200,y:580},
          ].map(n=>(
            <g key={n.label}>
              <rect x={n.x-60} y={n.y-18} width={120} height={36} rx="4"
                fill="rgba(30,144,255,0.06)" stroke="rgba(30,144,255,0.25)" strokeWidth="1"/>
              <text x={n.x} y={n.y+5} textAnchor="middle"
                fill="rgba(100,160,220,0.7)" fontFamily="'Barlow Condensed'"
                fontWeight="700" fontSize="11" letterSpacing="1">{n.label}</text>
            </g>
          ))}
          {/* Critical incident laptop */}
          <rect x="570" y="500" width="260" height="160" rx="8"
            fill="rgba(180,20,20,0.1)" stroke="rgba(255,68,68,0.4)" strokeWidth="1.5"/>
          <text x="700" y="570" textAnchor="middle" fill="rgba(255,80,80,0.8)"
            fontFamily="'Barlow Condensed'" fontWeight="900" fontSize="14">⚠ CRITICAL INCIDENT</text>
          <text x="700" y="595" textAnchor="middle" fill="rgba(255,255,255,0.4)"
            fontFamily="'Barlow Condensed'" fontSize="11">IMPACTING CUSTOMERS</text>
          <text x="700" y="614" textAnchor="middle" fill="rgba(255,255,255,0.4)"
            fontFamily="'Barlow Condensed'" fontSize="11">REVENUE AT RISK</text>
        </svg>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.92) 0%, rgba(2,12,27,0.65) 45%, rgba(2,12,27,0.15) 100%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div style={{ maxWidth:"580px" }}>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#FF4444", boxShadow:"0 0 12px #FF4444" }} className="pulse"/>
              <span className="font-bc font-600 text-white/40 tracking-[0.2em] text-xs uppercase">The Real Failure</span>
            </div>

            <h1 className="font-bc font-900 text-white leading-none uppercase mb-0"
              style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)" }}>NO INCIDENT</h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(3.5rem,6.5vw,6rem)", color:"#1E90FF" }}>OWNER</h1>

            <div style={{ width:"70px", height:"3px", background:"#FF4444", margin:"20px 0 28px" }}/>

            <div className="space-y-2 mb-8">
              {[
                {who:"CSM",      says:"Opens incident.", c:"#60B4FF"},
                {who:"NETWORK",  says:'"Not me."',       c:"rgba(255,100,100,0.9)"},
                {who:"PRODUCT",  says:'"Not me."',       c:"rgba(255,100,100,0.9)"},
                {who:"DEVOPS",   says:'"Not me."',       c:"rgba(255,100,100,0.9)"},
                {who:"VENDOR",   says:'"Not me."',       c:"rgba(255,100,100,0.9)"},
                {who:"CUSTOMER", says:"Waits.",          c:"rgba(255,255,255,0.35)"},
              ].map(row=>(
                <div key={row.who} className="flex items-center gap-4">
                  <span className="font-bc font-700 text-right" style={{ color:"rgba(30,144,255,0.6)", fontSize:"0.8rem", width:"90px", letterSpacing:"0.1em" }}>{row.who}</span>
                  <span className="font-bc font-700" style={{ color:row.c, fontSize:"clamp(1rem,1.7vw,1.35rem)" }}>{row.says}</span>
                </div>
              ))}
            </div>

            <div style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
              <p className="font-bc font-700 text-white/80 mb-1" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)" }}>
                Customers don't suffer from monitoring gaps.
              </p>
              <p className="font-bc font-900" style={{ fontSize:"clamp(1rem,1.6vw,1.3rem)", color:"#1E90FF" }}>
                They suffer from ownership gaps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// S08 — 1800 ALERTS. 0 OWNERS.
export function S08() {
  // Deterministic alert positions
  const alerts = Array.from({length:50}, (_,i) => ({
    x: (i * 137 + 43) % 95,
    y: (i * 97 + 11) % 90,
    size: 0.5 + ((i*31)%10)/20,
    opacity: 0.15 + ((i*17)%10)/25,
    num: Math.floor((i*173 + 247) % 1800),
  }));

  return (
    <div className="slide">
      <div className="absolute inset-0" style={{
        background:`
          radial-gradient(ellipse 80% 60% at 60% 40%, #1A0505 0%, transparent 55%),
          linear-gradient(135deg, #020C1B 0%, #0D0303 50%, #020C1B 100%)
        `
      }}/>

      {/* Alert wall */}
      <div className="absolute inset-0" style={{ pointerEvents:"none" }}>
        {alerts.map((a,i)=>(
          <div key={i} className="absolute font-bc font-700 text-warn"
            style={{
              left:`${a.x}%`, top:`${a.y}%`,
              fontSize:`${a.size}rem`,
              opacity: a.opacity,
              border:`1px solid rgba(255,68,68,${a.opacity*0.8})`,
              padding:"2px 6px", borderRadius:"3px",
              background:`rgba(255,68,68,${a.opacity*0.15})`,
              whiteSpace:"nowrap", color:`rgba(255,${60+i*3%80},${60+i*5%80},${a.opacity*2})`
            }}>
            ⚠ ALERT #{a.num}
          </div>
        ))}
      </div>

      {/* Highlighted alert */}
      <div className="absolute z-10" style={{ right:"12%", top:"50%", transform:"translateY(-50%)" }}>
        <div className="rounded-2xl px-8 py-6"
          style={{ background:"rgba(30,144,255,0.1)", border:"2px solid rgba(30,144,255,0.5)",
            boxShadow:"0 0 40px rgba(30,144,255,0.15)" }}>
          <div className="font-bc font-600 text-white/40 text-xs tracking-widest mb-2">ALERT #847</div>
          <div className="font-bc font-800 text-white mb-1" style={{ fontSize:"1.2rem" }}>Service Degradation</div>
          <div className="font-bc font-600 text-white/50 text-sm mb-3">Customer impacted · SLA at risk</div>
          <div className="font-bc font-700 text-warn text-sm px-3 py-1 rounded-full text-center"
            style={{ background:"rgba(255,68,68,0.1)", border:"1px solid rgba(255,68,68,0.35)" }}>
            OWNER: UNASSIGNED
          </div>
        </div>
      </div>

      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.93) 0%, rgba(2,12,27,0.7) 45%, rgba(2,12,27,0.1) 75%)"
      }}/>

      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div style={{ maxWidth:"520px" }}>
            <h1 className="font-bc font-900 text-white leading-none uppercase"
              style={{ fontSize:"clamp(4rem,7.5vw,7rem)" }}>1800 ALERTS</h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(4rem,7.5vw,7rem)", color:"#1E90FF" }}>0 OWNERS</h1>

            <div style={{ width:"70px", height:"3px", background:"#1E90FF", margin:"20px 0 28px" }}/>

            <div className="space-y-3 mb-8">
              {[
                {t:"Monitoring",   c:true},
                {t:"Dashboards",   c:true},
                {t:"Alerts",       c:true},
                {t:"Ownership",    c:false},
              ].map(item=>(
                <div key={item.t} className="flex items-center gap-3">
                  <span className="font-bc font-700 tracking-widest"
                    style={{
                      fontSize:"clamp(1.1rem,1.8vw,1.5rem)",
                      color: item.c ? "rgba(255,255,255,0.45)" : "#FF4444",
                      textDecoration: item.c ? "none" : "none"
                    }}>
                    {item.c ? "✓" : "✗"}&nbsp; {item.t}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
              <p className="font-bc font-900" style={{ fontSize:"clamp(1.1rem,1.8vw,1.5rem)", color:"#1E90FF" }}>
                Monitoring without ownership creates noise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
