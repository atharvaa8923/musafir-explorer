
import React from "react";
import { CategorySummary } from "./types";
import CategoryIcon from "./CategoryIcon";

interface ExpensesListProps {
  categoryExpenses: CategorySummary[];
}

const ExpensesList: React.FC<ExpensesListProps> = ({ categoryExpenses }) => {
  return (
    <div className="space-y-3 mb-6">
      {categoryExpenses.map((category) => (
        <div key={category.category} className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`mr-3 ${category.color}`}>
              <CategoryIcon category={category.category} size={18} />
            </div>
            <span>{category.name}</span>
          </div>
          <span className="font-medium">₹{category.total}</span>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
