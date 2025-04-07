
import React, { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface BudgetHeaderProps {
  budget: number;
  setBudget: (budget: number) => void;
}

const BudgetHeader: React.FC<BudgetHeaderProps> = ({ budget, setBudget }) => {
  const { toast } = useToast();
  const [editingBudget, setEditingBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(budget.toString());

  const handleUpdateBudget = () => {
    const updatedBudget = parseInt(newBudget);
    if (isNaN(updatedBudget) || updatedBudget <= 0) {
      toast({
        title: "Invalid budget",
        description: "Please enter a valid budget amount.",
        variant: "destructive",
      });
      return;
    }

    setBudget(updatedBudget);
    setEditingBudget(false);
    toast({
      title: "Budget updated",
      description: `Your travel budget has been set to ₹${updatedBudget}.`,
    });
  };

  return (
    <CardHeader className="pb-2">
      <CardTitle className="text-xl flex items-center justify-between">
        <div className="flex items-center">
          <Wallet className="mr-2" size={20} />
          Budget Planner
        </div>
        {!editingBudget ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setNewBudget(budget.toString());
              setEditingBudget(true);
            }}
          >
            Edit
          </Button>
        ) : null}
      </CardTitle>
      {editingBudget && (
        <div className="mb-4 space-y-2">
          <Label htmlFor="budget">Total Budget (₹)</Label>
          <div className="flex space-x-2">
            <Input
              id="budget"
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleUpdateBudget}>Save</Button>
            <Button variant="outline" onClick={() => setEditingBudget(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </CardHeader>
  );
};

export default BudgetHeader;
