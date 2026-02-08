import React from 'react';
import { STYLE_DESCRIPTIONS, StyleDescriptionKeys } from './cardStyles';

export function StyleHint({
  name,
  children,
}: {
  name: StyleDescriptionKeys;
  children: React.ReactNode;
}) {
  const desc = STYLE_DESCRIPTIONS[name] ?? '';
  return (
    <span className="relative inline-block group">
      {children}
      <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap bg-black text-white text-xs py-1 px-2 rounded-md shadow-lg z-50">
        {desc}
      </span>
    </span>
  );
}
