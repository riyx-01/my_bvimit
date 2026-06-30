"use client";

import type { ReactNode } from "react";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));

interface SiteShellProps {
  children: ReactNode;
  className?: string;
}

export default function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 overflow-x-hidden w-full",
        className,
      )}
    >
      <InstitutionalHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
