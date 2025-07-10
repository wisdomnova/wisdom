// File: components/SectionWrapper.tsx
'use client';

import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </section>
  );
}
