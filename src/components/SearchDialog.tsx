"use client";

import * as React from "react";
import { FileText } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Simulated full-text search index
const SEARCH_INDEX = [
  { title: "Home Page", href: "/", content: "Welcome to Bharati Vidyapeeth Institute of Management & Information Technology. We offer a premier two-year Master of Computer Applications (MCA) postgraduate program. Experience vibrant campus life, excellent placements, and top-tier education affiliated with Mumbai University." },
  { title: "MCA Admissions", href: "/courses/mca", content: "Admissions open for 2024-25. The Master of Computer Applications (MCA) program bridges the gap between foundational computing theory and advanced industry practice. Check the syllabus and fee structure." },
  { title: "Placements Overview", href: "/placements", content: "Our placement network partners with global industry leaders. Highest CTC Offered is 18 LPA. Average package is 4.5 LPA. Top recruiters include TCS, Accenture, L&T Infotech, Infosys, Wipro, Capgemini, Tech Mahindra." },
  { title: "Virtual Tour", href: "/virtual-tour", content: "Explore our campus through a 360 virtual tour. State-of-the-art infrastructure, computer labs, library, canteen, and sports facilities." },
  { title: "Faculty Directory", href: "/faculty", content: "Meet our experienced faculty. Our professors and staff are dedicated to teaching, research, and guiding students to academic excellence." },
  { title: "Research & Publications", href: "/research", content: "Our vision is to pursue research in all branches of computing. We regularly host the International Conference on Emerging Technologies (ICET). Read our code of ethics and research publications." },
  { title: "Student Corner & Activities", href: "/students/iste", content: "Join the ISTE Student Chapter, NPTEL local chapter, and participate in technical magazines. Explore student achievements and the Prabhat newsletter." },
  { title: "Events & Seminars", href: "/events/seminars", content: "Stay updated with MCA latest events. We organize seminars, workshops, FDPs, internal hackathons, sports days, and the Manthan festival." },
  { title: "Institutional Social Responsibility (ISR)", href: "/outreach/isr", content: "We believe in giving back. Participate in Swachh Bharat Abhiyan, Covid-19 awareness, blood donation camps, tree plantation, and Khusiyo Ki Pathshala." },
  { title: "Contact Us", href: "/contact", content: "Sector 8, C.B.D. Belapur, Navi Mumbai - 400614. Phone: 022-27578415. Email: principal.bvimit@bharatividyapeeth.edu. Connect with us for any inquiries." },
  { title: "Library", href: "/campus/library", content: "The central library provides a vast collection of academic books, international journals, and digital resources for MCA students." },
  { title: "NIRF Reports", href: "/pdf/nirfbvimit2025.pdf", content: "Access the National Institutional Ranking Framework (NIRF) data and reports for BVIMIT." },
  { title: "Syllabus", href: "/courses/mca#syllabus", content: "Download the MCA NEP 2020 syllabus for 1st Year and 2nd Year." },
];

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

const dictionary = Array.from(new Set(
  SEARCH_INDEX.flatMap(item => `${item.title} ${item.content}`.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/))
)).filter(w => w.length > 3);

export function SearchDialog({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const didYouMean = React.useMemo(() => {
    if (!query || query.length < 3) return null;
    
    const words = query.toLowerCase().split(/\s+/);
    let suggestion = [];
    let changed = false;

    for (const word of words) {
      if (word.length < 3) {
        suggestion.push(word);
        continue;
      }
      
      let bestMatch = word;
      let minDistance = Infinity;
      
      for (const dictWord of dictionary) {
        const dist = levenshtein(word, dictWord);
        if (dist < minDistance && dist <= (word.length <= 4 ? 1 : 2)) {
          minDistance = dist;
          bestMatch = dictWord;
        }
      }
      
      if (bestMatch !== word) changed = true;
      suggestion.push(bestMatch);
    }
    
    return changed ? suggestion.join(" ") : null;
  }, [query]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search pages, academics, events..." 
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>
          <div className="py-6 text-center text-sm">
            <p>No results found for &quot;{query}&quot;.</p>
            {didYouMean && (
              <p className="mt-4 text-muted-foreground">
                Did you mean:{" "}
                <button 
                  onClick={() => setQuery(didYouMean)} 
                  className="text-primary font-black tracking-wide hover:underline cursor-pointer"
                >
                  {didYouMean}
                </button>?
              </p>
            )}
          </div>
        </CommandEmpty>
        
        <CommandGroup heading="Search Results">
          {SEARCH_INDEX.map((item) => {
            const qIndex = item.content.toLowerCase().indexOf(query.toLowerCase());
            let snippet = item.content;
            
            if (query && qIndex !== -1) {
              const start = Math.max(0, qIndex - 40);
              const end = Math.min(item.content.length, qIndex + query.length + 50);
              snippet = (start > 0 ? "..." : "") + item.content.substring(start, end) + (end < item.content.length ? "..." : "");
            } else {
              snippet = item.content.substring(0, 90) + "...";
            }

            const boldRegex = query ? new RegExp(`(${query})`, "gi") : null;
            const snippetParts = boldRegex ? snippet.split(boldRegex) : [snippet];

            return (
              <CommandItem
                key={item.href}
                value={item.title + " " + item.content}
                onSelect={() => {
                  setOpen(false);
                  window.location.href = item.href;
                }}
                className="flex flex-col items-start gap-1 py-3 px-4 cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary group-data-[selected=true]:text-accent-foreground" />
                  <span className="font-bold text-foreground group-data-[selected=true]:text-accent-foreground">{item.title}</span>
                </div>
                <p className="text-xs text-muted-foreground group-data-[selected=true]:text-accent-foreground/80 line-clamp-2 pl-6 leading-relaxed">
                  {snippetParts.map((part, i) => 
                    boldRegex && part.toLowerCase() === query.toLowerCase() ? (
                      <span key={i} className="bg-primary/20 text-primary group-data-[selected=true]:text-accent-foreground group-data-[selected=true]:bg-white/20 font-bold px-0.5 rounded">{part}</span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
