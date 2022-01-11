import mermaid from 'mermaid';
import React, { useEffect } from 'react';

const fontFamily = `Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

mermaid.initialize({
  fontFamily: fontFamily,
  gantt: {
    fontFamily: fontFamily,
  },
  sequence: {
    actorFontFamily: fontFamily,
    messageFontFamily: fontFamily,
    messageFontWeight: 100,
    noteFontFamily: fontFamily,
    showSequenceNumbers: true,
  },
  startOnLoad: true,
});

export function Mermaid({ chart }) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, []);
  return <div className="mermaid">{chart}</div>;
}
