
import React from "react";
import { Train, Bed, Utensils, Coffee } from "lucide-react";

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  note: string;
}

export interface ExpenseCategory {
  name: string;
  icon: React.ElementType;
  color: string;
}

export interface CategorySummary extends ExpenseCategory {
  category: string;
  total: number;
}

export const categories: { [key: string]: ExpenseCategory } = {
  transport: { name: "Transport", icon: Train, color: "text-musafir-trekking" },
  accommodation: { name: "Accommodation", icon: Bed, color: "text-musafir-spiritual" },
  food: { name: "Food", icon: Utensils, color: "text-musafir-forest" },
  activities: { name: "Activities", icon: Coffee, color: "text-musafir-meditation" },
};
