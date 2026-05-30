import { useState, useEffect, useCallback, useRef } from "react";
import Nav from "./components/Nav";
import S01 from "./slides/S01";
import S02 from "./slides/S02";
import { S03, S04, S05, S06, S07, S08 } from "./slides/S03_08";
import { S09, S10, S11, S12, S13, S14, S15, S16 } from "./slides/S09_16";

const SLIDES = [S01,S02,S03,S04,S05,S06,S07,S08,S09,S10,S11,S12,S13,S14,S15,S16];
const TOTAL = SLIDES.length;

export default function App() {
  const [cur, setCur]   = useState(0);
  const [anim, setAnim] = useState("");
  const busy = useRef(false);

  const goTo = useCallback((next) => {
    if (busy.current || next === cur || next < 0 || next >= TOTAL) return;
    busy.current = true;
    const fwd = next > cur;
    setAnim(fwd ? "exit-left" : "exit-right");
    setTimeout(() => {
      setCur(next);
      setAnim(fwd ? "enter-right" : "enter-left");
      setTimeout(() => { setAnim(""); busy.current = false; }, 450);
    }, 280);
  }, [cur]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(cur + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goTo(cur - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [cur, goTo]);

  const Slide = SLIDES[cur];

  return (
    <div style={{ width:"100vw", height:"100vh", overflow:"hidden", position:"relative" }}>
      <Nav current={cur} total={TOTAL} onPrev={() => goTo(cur-1)} onNext={() => goTo(cur+1)} onGo={goTo} />
      <div className={anim} style={{ position:"absolute", inset:0 }}>
        <Slide />
      </div>
    </div>
  );
}
