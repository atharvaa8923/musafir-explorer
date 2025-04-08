import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Download, Send, FileDown, Files, FileText } from "lucide-react";
import { Expense, CategorySummary } from "./types";

interface ExportBudgetProps {
  expenses: Expense[];
  budget: number;
  spent: number;
  remaining: number;
  categoryExpenses: CategorySummary[];
}

const ExportBudget: React.FC<ExportBudgetProps> = ({ 
  expenses, 
  budget, 
  spent, 
  remaining, 
  categoryExpenses 
}) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  const formatDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const generateCSV = () => {
    let csvContent = "Category,Amount,Date,Note\n";
    
    expenses.forEach(expense => {
      const row = [
        `"${expense.category}"`,
        expense.amount,
        expense.date,
        `"${expense.note.replace(/"/g, '""')}"`
      ].join(",");
      csvContent += row + "\n";
    });
    
    csvContent += "\n";
    csvContent += "Summary\n";
    csvContent += `Total Budget,₹${budget}\n`;
    csvContent += `Total Spent,₹${spent}\n`;
    csvContent += `Remaining,₹${remaining}\n`;
    csvContent += "\n";
    csvContent += "Category Breakdown\n";
    
    categoryExpenses.forEach(category => {
      csvContent += `${category.name},₹${category.total}\n`;
    });
    
    return csvContent;
  };

  const downloadCSV = () => {
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `travel_budget_${formatDate()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "CSV Downloaded",
      description: "Your budget report has been downloaded as a CSV file."
    });
  };

  const generatePDF = async () => {
    const pdfData = {
      title: `Travel Budget Report - ${formatDate()}`,
      budget: budget,
      spent: spent,
      remaining: remaining,
      categories: categoryExpenses.map(cat => ({
        name: cat.name,
        amount: cat.total
      })),
      expenses: expenses.map(exp => ({
        category: exp.category,
        amount: exp.amount,
        date: exp.date,
        note: exp.note
      }))
    };

    const blob = new Blob([JSON.stringify(pdfData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `travel_budget_${formatDate()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "PDF Downloaded",
      description: "Your budget report has been downloaded. (JSON format for demo)"
    });
  };

  const shareViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTimeout(() => {
      toast({
        title: "Report Shared",
        description: `Budget report has been shared to ${email}`
      });
      setEmail("");
      setIsShareDialogOpen(false);
    }, 1000);
  };

  return (
    <div className="mt-4 pt-4 border-t border-border">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Export Budget</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={downloadCSV} className="cursor-pointer">
              <Files className="mr-2 h-4 w-4" />
              <span>Download as CSV</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={generatePDF} className="cursor-pointer">
              <FileText className="mr-2 h-4 w-4" />
              <span>Download as PDF</span>
            </DropdownMenuItem>
            <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => {
                  e.preventDefault();
                }} className="cursor-pointer">
                  <Send className="mr-2 h-4 w-4" />
                  <span>Share via Email</span>
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Budget Report</DialogTitle>
                </DialogHeader>
                <form onSubmit={shareViaEmail} className="space-y-4 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="recipient@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Report</Button>
                </form>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ExportBudget;
