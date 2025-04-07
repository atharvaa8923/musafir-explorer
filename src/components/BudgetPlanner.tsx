
import React, { useState, useEffect } from "react";
import { Wallet, Train, Bed, Utensils, Coffee, PlusCircle, DollarSign, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  note: string;
}

interface ExpenseCategory {
  name: string;
  icon: React.ElementType; // Changed from React.ComponentType to React.ElementType
  color: string;
}

const BudgetPlanner = () => {
  const { toast } = useToast();
  const [budget, setBudget] = useState<number>(() => {
    const savedBudget = localStorage.getItem("travel_budget");
    return savedBudget ? parseInt(savedBudget) : 5000;
  });
  const [editingBudget, setEditingBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(budget.toString());
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("travel_expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // New expense form state
  const [newExpense, setNewExpense] = useState<Omit<Expense, "id">>({
    category: "transport",
    amount: 0,
    date: new Date().toISOString().split("T")[0],
    note: "",
  });
  const [addingExpense, setAddingExpense] = useState(false);

  // Calculate totals
  const spent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remaining = budget - spent;
  const percentSpent = (spent / budget) * 100;

  const categories: { [key: string]: ExpenseCategory } = {
    transport: { name: "Transport", icon: Train, color: "text-musafir-trekking" },
    accommodation: { name: "Accommodation", icon: Bed, color: "text-musafir-spiritual" },
    food: { name: "Food", icon: Utensils, color: "text-musafir-forest" },
    activities: { name: "Activities", icon: Coffee, color: "text-musafir-meditation" },
  };

  // Group expenses by category
  const expensesByCategory = Object.keys(categories).map((categoryKey) => {
    const categoryExpenses = expenses.filter((expense) => expense.category === categoryKey);
    const total = categoryExpenses.reduce((acc, expense) => acc + expense.amount, 0);
    return {
      category: categoryKey,
      total,
      ...categories[categoryKey],
    };
  });

  // Save to localStorage whenever expenses or budget changes
  useEffect(() => {
    localStorage.setItem("travel_expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("travel_budget", budget.toString());
  }, [budget]);

  const handleAddExpense = () => {
    if (newExpense.amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid expense amount.",
        variant: "destructive",
      });
      return;
    }

    const expenseToAdd: Expense = {
      ...newExpense,
      id: Date.now().toString(),
      amount: Number(newExpense.amount),
    };

    setExpenses([...expenses, expenseToAdd]);
    setNewExpense({
      category: "transport",
      amount: 0,
      date: new Date().toISOString().split("T")[0],
      note: "",
    });
    setAddingExpense(false);

    toast({
      title: "Expense added",
      description: `₹${expenseToAdd.amount} added to ${categories[expenseToAdd.category].name}.`,
    });
  };

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

  const getBudgetStatusColor = () => {
    if (remaining < 0) return "bg-red-500";
    if (remaining < budget * 0.2) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Card className="shadow-md">
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
      </CardHeader>
      <CardContent>
        {editingBudget ? (
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
        ) : (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-muted-foreground">Budget: ₹{budget}</span>
              <span className={`text-sm font-medium ${remaining < 0 ? "text-red-500" : ""}`}>
                ₹{remaining} remaining
              </span>
            </div>
            <Progress value={percentSpent} className={`h-2 ${getBudgetStatusColor()}`} />
          </div>
        )}

        <div className="space-y-3 mb-6">
          {expensesByCategory.map((category) => {
            // Render the icon component with proper props
            const IconComponent = category.icon;
            return (
              <div key={category.category} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`mr-3 ${category.color}`}>
                    <IconComponent size={18} />
                  </div>
                  <span>{category.name}</span>
                </div>
                <span className="font-medium">₹{category.total}</span>
              </div>
            );
          })}
        </div>

        {addingExpense ? (
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
                  {Object.entries(categories).map(([key, category]) => {
                    // Render the icon component with proper props
                    const IconComponent = category.icon;
                    return (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center">
                          <IconComponent className={`mr-2 h-4 w-4 ${category.color}`} />
                          {category.name}
                        </div>
                      </SelectItem>
                    );
                  })}
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
        ) : (
          <Button
            variant="outline"
            onClick={() => setAddingExpense(true)}
            className="w-full flex items-center justify-center"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetPlanner;
