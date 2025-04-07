
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Expense, categories, CategorySummary } from "./types";
import BudgetHeader from "./BudgetHeader";
import BudgetProgress from "./BudgetProgress";
import ExpensesList from "./ExpensesList";
import ExpenseForm from "./ExpenseForm";

const BudgetPlanner = () => {
  const { toast } = useToast();
  
  // Budget state
  const [budget, setBudget] = useState<number>(() => {
    const savedBudget = localStorage.getItem("travel_budget");
    return savedBudget ? parseInt(savedBudget) : 5000;
  });
  
  // Expenses state
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

  // Group expenses by category
  const categoryExpenses: CategorySummary[] = Object.keys(categories).map((categoryKey) => {
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

  return (
    <Card className="shadow-md">
      <BudgetHeader budget={budget} setBudget={setBudget} />
      
      <CardContent>
        <BudgetProgress budget={budget} spent={spent} remaining={remaining} />
        <ExpensesList categoryExpenses={categoryExpenses} />
        
        <ExpenseForm
          addingExpense={addingExpense}
          setAddingExpense={setAddingExpense}
          newExpense={newExpense}
          setNewExpense={setNewExpense}
          handleAddExpense={handleAddExpense}
        />
      </CardContent>
    </Card>
  );
};

export default BudgetPlanner;
