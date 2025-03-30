
import { Wallet, Train, Bed, Utensils, Coffee } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BudgetTracker = () => {
  // This is a placeholder component; in a real app, we'd track actual budget data
  const budget = 5000;
  const spent = 3200;
  const remaining = budget - spent;
  const percentSpent = (spent / budget) * 100;

  const expenses = [
    { category: "Transport", icon: Train, amount: 1200, color: "text-musafir-trekking" },
    { category: "Accommodation", icon: Bed, amount: 1000, color: "text-musafir-spiritual" },
    { category: "Food", icon: Utensils, amount: 700, color: "text-musafir-forest" },
    { category: "Activities", icon: Coffee, amount: 300, color: "text-musafir-meditation" },
  ];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Wallet className="mr-2" size={20} />
          Budget Tracker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">Budget: ₹{budget}</span>
            <span className="text-sm font-medium">₹{remaining} remaining</span>
          </div>
          <Progress value={percentSpent} className="h-2" />
        </div>
        
        <div className="space-y-3">
          {expenses.map((expense, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`mr-3 ${expense.color}`}>
                  <expense.icon size={18} />
                </div>
                <span>{expense.category}</span>
              </div>
              <span className="font-medium">₹{expense.amount}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetTracker;
