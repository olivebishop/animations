"use client";

import Navbar from "@/components/Navbar";
import { AnimatePresence } from 'framer-motion';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </>
  );
}