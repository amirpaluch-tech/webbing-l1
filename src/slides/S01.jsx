// S01 — BUILDING CUSTOMER CONFIDENCE
export default function S01() {
  return (
    <div className="slide">
      {/* Full-bleed night earth scene */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 50% at 70% 60%, #0A2540 0%, transparent 60%),
          radial-gradient(ellipse 100% 60% at 50% 100%, #051525 0%, #020C1B 50%),
          radial-gradient(ellipse 60% 40% at 75% 65%, #0D3060 0%, transparent 50%),
          linear-gradient(180deg, #020C1B 0%, #041830 40%, #020C1B 100%)
        `
      }}/>

      {/* Globe arc */}
      <div className="absolute bottom-0 right-0 left-0 flex justify-center" style={{ bottom:"-30%", pointerEvents:"none" }}>
        <div style={{
          width:"160vw", height:"80vw",
          borderRadius:"50%",
          border:"1px solid rgba(30,144,255,0.15)",
          boxShadow:"0 0 80px 20px rgba(30,144,255,0.08), inset 0 0 80px 20px rgba(30,144,255,0.05)",
          background:"radial-gradient(ellipse at 50% 20%, rgba(30,144,255,0.06) 0%, rgba(2,12,27,0.8) 60%)"
        }}/>
      </div>

      {/* City lights effect */}
      <div className="absolute inset-0" style={{ pointerEvents:"none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* City light clusters */}
          {[
            [400,420],[450,440],[480,430],[510,450],[530,435],
            [700,400],[730,415],[760,405],[790,420],
            [900,380],[940,395],[970,385],[1000,400],
            [1100,360],[1140,375],[1170,365],
            [300,460],[330,475],[360,465],
            [600,460],[640,475],[670,465],[700,480],
            [800,440],[840,455],[870,445],
          ].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={1.5+Math.random()*2}
              fill={Math.random()>0.5?"#FFB74D":"#90CAF9"}
              opacity={0.3+Math.random()*0.5} />
          ))}
          {/* Connection arcs */}
          {[
            ["M 350,150 Q 700,80 1050,180"],
            ["M 450,200 Q 700,120 950,200"],
            ["M 300,180 Q 700,100 1100,160"],
            ["M 500,140 Q 750,60 1000,150"],
          ].map((d,i) => (
            <path key={i} d={d} fill="none"
              stroke="rgba(30,144,255,0.25)" strokeWidth="0.8"
              strokeDasharray="6,8" />
          ))}
          {/* Customer node — bright */}
          <circle cx="700" cy="160" r="12" fill="rgba(30,144,255,0.2)" stroke="#1E90FF" strokeWidth="1.5"/>
          <circle cx="700" cy="160" r="6" fill="#1E90FF" />
          <circle cx="700" cy="160" r="25" fill="none" stroke="rgba(30,144,255,0.3)" strokeWidth="0.8"/>
          <circle cx="700" cy="160" r="40" fill="none" stroke="rgba(30,144,255,0.15)" strokeWidth="0.5"/>
          {/* Other nodes */}
          {[[350,145],[500,130],[850,155],[1000,170],[1100,145],[250,200],[1150,200]].map(([x,y],i)=>(
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="rgba(30,144,255,0.6)" />
              <line x1={x} y1={y} x2="700" y2="160" stroke="rgba(30,144,255,0.2)" strokeWidth="0.6" strokeDasharray="4,6"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Dark overlay left side for text legibility */}
      <div className="absolute inset-0" style={{
        background:"linear-gradient(90deg, rgba(2,12,27,0.85) 0%, rgba(2,12,27,0.6) 50%, rgba(2,12,27,0.1) 100%)"
      }}/>

      {/* Content */}
      <div className="slide-inner">
        <div className="w-full max-w-7xl mx-auto px-16">
          <div className="max-w-2xl">
            {/* Webbing badge */}
            <div className="flex items-center gap-3 mb-10">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect width="22" height="22" rx="4" fill="rgba(30,144,255,0.2)" stroke="rgba(30,144,255,0.5)" strokeWidth="1"/>
                <path d="M4 7l3.5 8 3.5-6 3.5 6L18 7" stroke="#1E90FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bc font-600 text-white/50 tracking-[0.2em] text-xs uppercase">Webbing · Executive Briefing</span>
            </div>

            <h1 className="font-bc font-900 text-white leading-none mb-0 uppercase"
              style={{ fontSize:"clamp(5rem,9vw,8.5rem)", letterSpacing:"-0.01em" }}>
              BUILDING
            </h1>
            <h1 className="font-bc font-900 text-white leading-none mb-0 uppercase"
              style={{ fontSize:"clamp(5rem,9vw,8.5rem)", letterSpacing:"-0.01em" }}>
              CUSTOMER
            </h1>
            <h1 className="font-bc font-900 leading-none uppercase"
              style={{ fontSize:"clamp(5rem,9vw,8.5rem)", letterSpacing:"-0.01em", color:"#1E90FF" }}>
              CONFIDENCE
            </h1>

            {/* Blue rule */}
            <div className="mt-6 mb-8" style={{ width:"80px", height:"3px", background:"#1E90FF" }}/>

            <p className="font-bc font-600 text-white/50 tracking-[0.15em] uppercase mb-1"
              style={{ fontSize:"clamp(0.9rem,1.4vw,1.1rem)" }}>FROM COMPLEXITY.</p>
            <p className="font-bc font-600 text-white/50 tracking-[0.15em] uppercase mb-1"
              style={{ fontSize:"clamp(0.9rem,1.4vw,1.1rem)" }}>TO RELIABILITY.</p>
            <p className="font-bc font-700 tracking-[0.15em] uppercase"
              style={{ fontSize:"clamp(0.9rem,1.4vw,1.1rem)", color:"#1E90FF" }}>FOR EVERY CUSTOMER.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
