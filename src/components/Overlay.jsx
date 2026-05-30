import { useEffect } from "react";
import { X } from "lucide-react";

export default function Overlay({ item, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background:"rgba(2,12,27,0.95)", backdropFilter:"blur(20px)" }}
    >
      <div className="overlay-in relative w-full max-w-4xl mx-8 rounded-2xl overflow-hidden"
        style={{ background:"linear-gradient(145deg,#0A1E35,#061428)", border:"1px solid rgba(30,144,255,0.3)" }}>

        {/* Top accent */}
        <div className="h-1" style={{ background:"linear-gradient(90deg,#1E90FF,#4DABFF,#1E90FF)" }} />

        <div className="p-14">
          {/* Label */}
          {item.label && (
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full"
              style={{ background:"rgba(30,144,255,0.1)", border:"1px solid rgba(30,144,255,0.25)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-wb pulse-dot" />
              <span className="font-mono-code text-xs text-wb tracking-widest uppercase">{item.label}</span>
            </div>
          )}

          {/* Headline */}
          <h2 className="font-condensed font-900 text-white leading-none mb-8"
            style={{ fontSize:"clamp(2.5rem,4.5vw,4rem)" }}>
            {item.headline}
          </h2>

          {/* Body */}
          <p className="font-barlow text-white/80 leading-relaxed"
            style={{ fontSize:"clamp(1.3rem,2vw,1.7rem)" }}>
            {item.body}
          </p>

          {/* Key sentence */}
          {item.key && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-condensed font-700 text-wb"
                style={{ fontSize:"clamp(1.3rem,2vw,1.7rem)" }}>
                "{item.key}"
              </p>
            </div>
          )}
        </div>

        <button onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background:"rgba(255,255,255,0.06)" }}>
          <X size={18} className="text-white/60" />
        </button>

        <div className="px-14 pb-8 opacity-25">
          <kbd className="text-xs font-mono-code text-white bg-white/10 px-2 py-0.5 rounded">ESC</kbd>
          <span className="text-xs font-mono-code text-white ml-2">to close</span>
        </div>
      </div>
    </div>
  );
}
