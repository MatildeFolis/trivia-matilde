import { useState } from "react";

const preguntas = [
  {
    "pregunta": "¿Cuál es mi color favorito?",
    "opciones": [
      "Verde",
      "Azul",
      "Rojo",
      "Lila"
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿Qué me encanta hacer en mi tiempo libre?",
    "opciones": [
      "Leer",
      "Bailar",
      "Cocinar",
      "Dibujar"
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Cuál es mi comida favorita?",
    "opciones": [
      "Sushi",
      "Asado",
      "Pastas",
      "Milanesa"
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿A qué artista escucho todo el día?",
    "opciones": [
      "Coldplay",
      "Airbag",
      "La Beriso",
      "Miranda"
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Cuál es mi estación favorita?",
    "opciones": [
      "Otoño",
      "Primavera",
      "Invierno",
      "Verano"
    ],
    "correcta": 1
  }
];

export default function InvitacionTrivia() {
  const [pantalla, setPantalla] = useState("invitacion");
  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [respondida, setRespondida] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestas, setRespuestas] = useState([]);

  const handleOpcion = (idx) => {
    if (respondida) return;
    setSeleccion(idx);
    setRespondida(true);
    const correcta = preguntas[paso].correcta === idx;
    if (correcta) setPuntaje((p) => p + 1);
    setRespuestas((r) => [...r, correcta]);
  };

  const handleSiguiente = () => {
    if (paso < preguntas.length - 1) {
      setPaso((p) => p + 1);
      setSeleccion(null);
      setRespondida(false);
    } else {
      setPantalla("resultado");
    }
  };

  const getMensaje = () => {
    if (puntaje === 5) return { texto: "Me conoces de memoria!", sub: "Sos mi persona favorita en la fiesta." };
    if (puntaje >= 3) return { texto: "Bastante bien!", sub: "Ya casi, pero hay cosas que solo yo se..." };
    return { texto: "Hay que ponerse al dia!", sub: "Mas razones para festejar juntos." };
  };

  return (
    <div style={{minHeight:"100vh",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Quicksand',sans-serif",padding:"20px"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Quicksand:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .card{background:#ffffff;max-width:420px;width:100%;overflow:hidden;box-shadow:0 2px 40px rgba(0,0,0,0.07);border:1px solid #e8ebe0}
        .hdr{background:#ffffff;padding:40px 32px 28px;text-align:center;border-bottom:1px solid #e8ebe0}
        .hdr::after{content:'';display:block;width:40px;height:1.5px;background:#474f2e;margin:16px auto 0}
        .nom{font-family:'Playfair Display',serif;font-size:48px;font-weight:400;color:#474f2e;letter-spacing:2px;line-height:1.1}
        .xv{font-family:'Quicksand',sans-serif;font-size:11px;font-weight:500;color:#474f2e;letter-spacing:5px;text-transform:uppercase;margin-bottom:8px;opacity:0.7}
        .body{padding:32px}
        .frow{display:flex;justify-content:space-between;border-top:1px solid #e8ebe0;border-bottom:1px solid #e8ebe0;padding:16px 0;margin-bottom:28px}
        .fi{text-align:center;flex:1}
        .fl{font-family:'Quicksand',sans-serif;font-size:9px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#474f2e;opacity:0.6;display:block;margin-bottom:4px}
        .fv{font-family:'Playfair Display',serif;font-size:18px;color:#474f2e}
        .fdiv{width:1px;background:#e8ebe0;align-self:stretch}
        .cta{background:#474f2e;color:#fff;border:none;width:100%;padding:16px;font-family:'Quicksand',sans-serif;font-size:11px;font-weight:600;letter-spacing:4px;text-transform:uppercase;cursor:pointer}
        .cta2{background:transparent;color:#474f2e;border:1px solid #474f2e;width:100%;padding:14px;font-family:'Quicksand',sans-serif;font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;cursor:pointer;margin-top:12px}
        .thdr{background:#474f2e;padding:24px 32px;display:flex;align-items:center;justify-content:space-between}
        .ttit{font-family:'Playfair Display',serif;font-size:20px;color:#fff;font-weight:400}
        .tnum{font-family:'Quicksand',sans-serif;font-size:10px;color:rgba(255,255,255,0.7);letter-spacing:2px}
        .pbar{height:2px;background:#e8ebe0}
        .pfill{height:2px;background:#474f2e;transition:width 0.4s}
        .pbody{padding:32px}
        .ptxt{font-family:'Playfair Display',serif;font-size:22px;color:#474f2e;line-height:1.5;margin-bottom:24px}
        .obtn{display:block;width:100%;text-align:left;padding:14px 18px;border:1px solid #e8ebe0;background:#ffffff;font-family:'Quicksand',sans-serif;font-size:14px;font-weight:500;color:#333;cursor:pointer;margin-bottom:10px}
        .ok{border-color:#474f2e!important;background:#f0f2eb!important;color:#474f2e!important}
        .no{border-color:#c62828!important;background:#fdf1f1!important;color:#c62828!important}
        .sig{background:#474f2e;color:#fff;border:none;width:100%;padding:15px;font-family:'Quicksand',sans-serif;font-size:10px;font-weight:600;letter-spacing:4px;text-transform:uppercase;cursor:pointer;margin-top:6px}
        .rhdr{background:#474f2e;padding:40px 32px;text-align:center}
        .rnum{font-family:'Playfair Display',serif;font-size:72px;font-weight:400;color:#fff;line-height:1}
        .rsub{font-family:'Quicksand',sans-serif;font-size:11px;letter-spacing:4px;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-top:6px}
        .rbody{padding:32px;text-align:center}
        .rmsg{font-family:'Playfair Display',serif;font-size:26px;color:#474f2e;margin-bottom:10px}
        .rsub2{font-family:'Quicksand',sans-serif;font-size:13px;color:#888;line-height:1.6;margin-bottom:28px}
        .dots{display:flex;justify-content:center;gap:8px;margin-bottom:28px}
        .dot{width:10px;height:10px;border-radius:50%}
      `}</style>
      <div className="card">
        {pantalla==="invitacion" && (
          <>
            <div className="hdr">
              <div className="xv">XV anos</div>
              <div className="nom">Matilde</div>
            </div>
            <div className="body">
              <div className="frow">
                <div className="fi"><span className="fl">Fecha</span><span className="fv">4/8/2026</span></div>
                <div className="fdiv"/>
                <div className="fi"><span className="fl">Hora</span><span className="fv">20:00 Hs.</span></div>
                <div className="fdiv"/>
                <div className="fi"><span className="fl">Lugar</span><span className="fv">Salon</span></div>
              </div>
              <button className="cta" onClick={()=>setPantalla("trivia")}>Juguemos!</button>
            </div>
          </>
        )}
        {pantalla==="trivia" && (
          <>
            <div className="thdr">
              <span className="ttit">Me conoces?</span>
              <span className="tnum">{paso+1} / {preguntas.length}</span>
            </div>
            <div className="pbar"><div className="pfill" style={{width:`${((paso+(respondida?1:0))/preguntas.length)*100}%`}}/></div>
            <div className="pbody">
              <p className="ptxt">{preguntas[paso].pregunta}</p>
              {preguntas[paso].opciones.map((op,idx)=>{
                let c="obtn";
                if(respondida){ if(idx===preguntas[paso].correcta) c+=" ok"; else if(idx===seleccion) c+=" no"; }
                return <button key={idx} className={c} onClick={()=>handleOpcion(idx)} disabled={respondida}>{op}</button>
              })}
              {respondida && <button className="sig" onClick={handleSiguiente}>{paso<preguntas.length-1?"Siguiente":"Ver resultado"}</button>}
            </div>
          </>
        )}
        {pantalla==="resultado" && (()=>{
          const m=getMensaje();
          return (
            <>
              <div className="rhdr">
                <div className="rnum">{puntaje}</div>
                <div className="rsub">de {preguntas.length} correctas</div>
              </div>
              <div className="rbody">
                <div className="dots">{respuestas.map((r,i)=><div key={i} className="dot" style={{background:r?"#474f2e":"#c62828"}}/>)}</div>
                <p className="rmsg">{m.texto}</p>
                <p className="rsub2">{m.sub}</p>
                <button className="cta" onClick={()=>window.location.href="#"}>Volver a la invitacion</button>
                <button className="cta2" onClick={()=>{setPaso(0);setSeleccion(null);setRespondida(false);setPuntaje(0);setRespuestas([]);setPantalla("trivia")}}>Jugar de nuevo</button>
              </div>
            </>
          )
        })()}
      </div>
    </div>
  );
}