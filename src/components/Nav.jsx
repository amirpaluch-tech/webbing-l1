import { ChevronLeft, ChevronRight } from "lucide-react";

const LABELS = ["Opening","About Me","Customers Buy","Reality","Silos","Doesn't Care","No Owner","1800 Alerts","Observability","One Truth","Incident Cmd","Operating Model","Missing Role","Roadmap","Metrics","Closing"];

export default function Nav({ current, total, onPrev, onNext, onGo }) {
  return (
    <>
      <div id="pbar" style={{ width:`${((current+1)/total)*100}%` }} />
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 h-14"
        style={{ background:"rgba(2,12,27,0.8)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(30,144,255,0.12)" }}>
        <div className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="5" fill="rgba(30,144,255,0.15)" stroke="rgba(30,144,255,0.4)" strokeWidth="1"/>
            <path d="M5 8l4 10 4-7 4 7 4-10" stroke="#1E90FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bc font-700 text-white tracking-widest text-sm">WEBBING</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          {LABELS.map((l,i) => (
            <button key={i} onClick={() => onGo(i)} title={l}
              className={`rounded-full transition-all duration-200 ${i===current ? "w-6 h-2 bg-wb" : "w-2 h-2 hover:bg-white/50"}`}
              style={{ background: i===current ? "#1E90FF" : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
        <span className="font-bc text-xs text-white/30 tracking-wider">{current+1} / {total}</span>
      </nav>
      <button onClick={onPrev} disabled={current===0}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
        style={{ background:"rgba(30,144,255,0.12)", border:"1px solid rgba(30,144,255,0.25)" }}>
        <ChevronLeft size={18} className="text-wb" />
      </button>
      <button onClick={onNext} disabled={current===total-1}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
        style={{ background:"rgba(30,144,255,0.12)", border:"1px solid rgba(30,144,255,0.25)" }}>
        <ChevronRight size={18} className="text-wb" />
      </button>
      <div className="fixed bottom-4 right-6 z-[100] flex gap-1 opacity-20">
        <kbd className="text-xs font-bc text-white bg-white/10 px-1.5 py-0.5 rounded">←</kbd>
        <kbd className="text-xs font-bc text-white bg-white/10 px-1.5 py-0.5 rounded">→</kbd>
      </div>
    </>
  );
}
