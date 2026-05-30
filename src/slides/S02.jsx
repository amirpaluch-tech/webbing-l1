// S02 — LEADER. OPERATOR. PROBLEM SOLVER.
const expertise = [
  { icon:"⚙️", label:"OPERATIONS LEADERSHIP" },
  { icon:"📡", label:"NETWORK EXPERTISE" },
  { icon:"🔒", label:"SECURITY EXPERTISE" },
  { icon:"📊", label:"SERVICE DELIVERY & SUPPORT" },
  { icon:"💰", label:"FINANCE EXPERTISE" },
  { icon:"🌍", label:"GLOBAL EXPERIENCE" },
];

export default function S02() {
  return (
    <div className="slide">
      {/* Deep blue background */}
      <div className="absolute inset-0" style={{
        background:"linear-gradient(135deg, #020C1B 0%, #041830 40%, #020C1B 100%)"
      }}/>

      {/* World map dot pattern in background */}
      <div className="absolute inset-0 opacity-5" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800">
          {Array.from({length:120}).map((_,i)=>(
            <circle key={i} cx={50+Math.random()*1300} cy={50+Math.random()*700}
              r={1} fill="#1E90FF" opacity={Math.random()}/>
          ))}
          {Array.from({length:30}).map((_,i)=>(
            <line key={i}
              x1={Math.random()*1400} y1={Math.random()*800}
              x2={Math.random()*1400} y2={Math.random()*800}
              stroke="#1E90FF" strokeWidth="0.5" opacity={Math.random()*0.5}/>
          ))}
        </svg>
      </div>

      {/* Photo — left side, full height */}
      <div className="absolute left-0 top-0 bottom-0" style={{ width:"38%", pointerEvents:"none" }}>
        <img src="/amir-paluch.jpg" alt="Amir Paluch"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition:"50% 20%" }}/>
        {/* Gradient fade right */}
        <div className="absolute inset-0" style={{
          background:"linear-gradient(90deg, transparent 50%, #020C1B 100%)"
        }}/>
        {/* Gradient fade bottom */}
        <div className="absolute inset-0" style={{
          background:"linear-gradient(0deg, #020C1B 0%, transparent 30%)"
        }}/>
      </div>

      {/* Content — right side */}
      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="ml-auto" style={{ width:"58%" }}>
            {/* Title */}
            <h1 className="font-bc font-900 text-white leading-none uppercase mb-1"
              style={{ fontSize:"clamp(3.5rem,6vw,5.5rem)" }}>
              ABOUT <span style={{ color:"#1E90FF" }}>ME</span>
            </h1>
            <div style={{ width:"60px", height:"3px", background:"#1E90FF", marginBottom:"12px" }}/>
            <p className="font-bc font-600 text-white/50 tracking-[0.18em] uppercase mb-8"
              style={{ fontSize:"clamp(0.9rem,1.3vw,1.1rem)" }}>
              LEADER.&nbsp; OPERATOR.&nbsp; PROBLEM SOLVER.
            </p>

            {/* Hub diagram — W center + 6 nodes */}
            <div className="relative mb-6" style={{ height:"280px" }}>
              <svg width="100%" height="280" viewBox="0 0 580 280">
                {/* Center hub */}
                <circle cx="290" cy="140" r="42" fill="rgba(30,144,255,0.15)" stroke="rgba(30,144,255,0.5)" strokeWidth="1.5"/>
                <circle cx="290" cy="140" r="28" fill="rgba(30,144,255,0.1)" stroke="rgba(30,144,255,0.3)" strokeWidth="1"/>
                {/* W letter */}
                <text x="290" y="148" textAnchor="middle" fill="#1E90FF"
                  fontFamily="'Barlow Condensed'" fontWeight="900" fontSize="28">W</text>

                {/* Nodes */}
                {[
                  {label:"OPERATIONS\nLEADERSHIP",  x:110, y:60},
                  {label:"SERVICE DELIVERY\n& SUPPORT",x:470,y:60},
                  {label:"NETWORK\nEXPERTISE",      x:70,  y:140},
                  {label:"FINANCE\nEXPERTISE",      x:510, y:140},
                  {label:"SECURITY\nEXPERTISE",     x:110, y:220},
                  {label:"GLOBAL\nEXPERIENCE",      x:470, y:220},
                ].map((n,i)=>(
                  <g key={i}>
                    <line x1={n.x} y1={n.y} x2="290" y2="140"
                      stroke="rgba(30,144,255,0.35)" strokeWidth="1" strokeDasharray="4,5"/>
                    <circle cx={n.x} cy={n.y} r="26"
                      fill="rgba(30,144,255,0.1)" stroke="rgba(30,144,255,0.4)" strokeWidth="1"/>
                    {n.label.split("\n").map((line,li)=>(
                      <text key={li} x={n.x} y={n.y - 4 + li*14} textAnchor="middle"
                        fill="#1E90FF" fontFamily="'Barlow Condensed'" fontWeight="700"
                        fontSize="9" letterSpacing="0.5">{line}</text>
                    ))}
                  </g>
                ))}
              </svg>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                {num:"25+", label:"YEARS OF\nEXPERIENCE", icon:"🌐"},
                {num:"7",   label:"COUNTRIES\nWORKED ACROSS", icon:"📍"},
                {num:"360°",label:"MULTI-DISCIPLINARY\nLEADERSHIP", icon:"👥"},
                {num:"CX",  label:"CUSTOMER\nCONFIDENCE FOCUS", icon:"🎯"},
              ].map(s=>(
                <div key={s.num} className="flex items-center gap-2 px-3 py-3 rounded-xl"
                  style={{ background:"rgba(30,144,255,0.06)", border:"1px solid rgba(30,144,255,0.15)" }}>
                  <span style={{ fontSize:"1.2rem" }}>{s.icon}</span>
                  <div>
                    <div className="font-bc font-900 leading-none mb-0.5"
                      style={{ fontSize:"1.4rem", color:"#1E90FF" }}>{s.num}</div>
                    <div className="font-bc font-600 text-white/40 leading-tight"
                      style={{ fontSize:"0.58rem", letterSpacing:"0.05em" }}>
                      {s.label.split("\n").map((l,i)=><span key={i} className="block">{l}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="flex gap-4 items-start" style={{ borderLeft:"3px solid #1E90FF", paddingLeft:"16px" }}>
              <p className="font-bc font-600 text-white/70" style={{ fontSize:"clamp(0.9rem,1.4vw,1.15rem)" }}>
                I've spent my career solving complex operational challenges where{" "}
                <span style={{ color:"#1E90FF", fontWeight:700 }}>customers depend on reliability.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
