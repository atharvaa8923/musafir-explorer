
import React from "react";
import { Progress } from "@/components/ui/progress";

interface BudgetProgressProps {
  budget: number;
  spent: number;
  remaining: number;
}

const BudgetProgress: React.FC<BudgetProgressProps> = ({ budget, spent, remaining }) => {
  const percentSpent = (spent / budget) * 100;

  const getBudgetStatusColor = () => {
    if (remaining < 0) return "bg-red-500";
    if (remaining < budget * 0.2) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-muted-foreground">Budget: ₹{budget}</span>
        <span className={`text-sm font-medium ${remaining < 0 ? "text-red-500" : ""}`}>
          ₹{remaining} remaining
        </span>
      </div>
      <Progress value={percentSpent} className={`h-2 ${getBudgetStatusColor()}`} />
    </div>
  );
};

export default BudgetProgress;
