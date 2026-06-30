import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Edit, Bell, FileText } from "lucide-react";
import { documentAssetPaths } from "@/data/publicAssetMap";

export default function RightColumn() {
  return (
    <div className="space-y-6">
      {/* Registration Form */}
      <Card className="border-t-4 border-t-[#60a5fa] shadow-md bg-card">
        <CardHeader className="bg-[#60a5fa] pb-3 pt-3">
          <CardTitle className="flex items-center justify-center text-white font-bold text-lg">
            <Edit className="w-5 h-5 mr-2" /> Registration form
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Your Name" className="bg-muted/50 border-muted" />
            <Input placeholder="Your Email id" type="email" className="bg-muted/50 border-muted" />
            <Input placeholder="Your Year" className="bg-muted/50 border-muted" />
            <Input placeholder="Phone No." type="tel" className="bg-muted/50 border-muted" />
            <Textarea placeholder="Your enquiry" className="bg-muted/50 border-muted min-h-[100px]" />
            <Button className="w-full bg-[#60a5fa] hover:bg-[#3b82f6] text-white font-bold">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-t-4 border-t-[#1e3a8a] shadow-md bg-card overflow-hidden">
        <CardHeader className="bg-[#1e3a8a] pb-3 pt-3">
          <CardTitle className="flex items-center justify-center text-white font-bold text-lg">
             Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y divide-border text-sm">
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="block px-4 py-3 hover:bg-muted/50 text-[#1e3a8a] font-medium transition-colors">
                MCA LATEST
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="block px-4 py-3 hover:bg-muted/50 text-[#1e3a8a] font-medium transition-colors">
                Alumni Meet 2024
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="block px-4 py-3 hover:bg-muted/50 text-[#1e3a8a] font-medium transition-colors">
                Extention of Approval
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="block px-4 py-3 hover:bg-muted/50 text-[#1e3a8a] font-medium transition-colors flex items-center">
                <span className="text-orange-500 mr-2 text-xs">NEW</span> MCA 2024 103 and 104 Practical
              </a>
            </li>
            <li>
              <a href={documentAssetPaths.mcaBrochure2025} target="_blank" rel="noreferrer" className="block px-4 py-3 hover:bg-muted/50 text-[#1e3a8a] font-medium transition-colors">
                MCA Brochure 2025-26
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()} className="block px-4 py-3 hover:bg-muted/50 text-[#1e3a8a] font-medium transition-colors">
                AICTE Approval Letters
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* MCA Placement Bulletin */}
      <Card className="border-t-4 border-t-[#1e3a8a] shadow-md bg-card text-center">
         <CardHeader className="bg-[#1e3a8a] pb-3 pt-3">
          <CardTitle className="flex items-center justify-center text-white font-bold text-sm">
             MCA Placement<br/>Bulletin Batch 2025
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 pb-6 space-y-4">
           <div>
             <h4 className="text-lg font-bold text-[#1e3a8a]">Saint Gobain</h4>
             <p className="text-sm text-muted-foreground">(CTC - 4.5 LPA)</p>
           </div>
           <div className="flex justify-center items-center gap-2">
             <span className="text-orange-500">🎓</span> 
             <span className="text-sm font-semibold text-foreground">01 Student Placed</span>
           </div>
           <p className="text-sm text-muted-foreground font-medium">Bhavik Deshmukh</p>
           <p className="text-xs text-muted-foreground">Global Move</p>
           <p className="text-xs text-muted-foreground">Goan</p>
        </CardContent>
      </Card>
    </div>
  );
}
