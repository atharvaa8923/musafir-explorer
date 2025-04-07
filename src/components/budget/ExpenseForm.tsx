
import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Expense, categories } from "./types";
import CategoryIcon from "./CategoryIcon";

interface ExpenseFormProps {
  addingExpense: boolean;
  setAddingExpense: (adding: boolean) => void;
  newExpense: Omit<Expense, "id">;
  setNewExpense: (expense: Omit<Expense, "id">) => void;
  handleAddExpense: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  addingExpense,
  setAddingExpense,
  newExpense,
  setNewExpense,
  handleAddExpense,
}) => {
  if (!addingExpense) {
    return (
      <Button
        variant="outline"
        onClick={() => setAddingExpense(true)}
        className="w-full flex items-center justify-center"
      >
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Expense
      </Button>
    );
  }

  return (
    <div className="border border-border rounded-md p-3 space-y-3">
      <h3 className="font-medium">Add New Expense</h3>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select
          value={newExpense.category}
          onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(categories).map(([key, category]) => (
              <SelectItem key={key} value={key}>
                <div className="flex items-center">
                  <CategoryIcon category={key} className={`mr-2 h-4 w-4 ${category.color}`} />
                  {category.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (₹)</Label>
        <Input
          id="amount"
          type="number"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) || 0 })}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={newExpense.date}
          onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="note">Note (optional)</Label>
        <Input
          id="note"
          value={newExpense.note}
          onChange={(e) => setNewExpense({ ...newExpense, note: e.target.value })}
          placeholder="E.g., Train ticket to Rishikesh"
        />
      </div>
      
      <div className="flex space-x-2 pt-2">
        <Button onClick={handleAddExpense} className="flex-1">
          Save Expense
        </Button>
        <Button variant="outline" onClick={() => setAddingExpense(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpenseForm;
