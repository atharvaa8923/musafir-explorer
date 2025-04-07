
import React, { useState, useEffect } from "react";
import { ListChecks, Check, PlusCircle, X, FilePenLine, Trash2, Save, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const defaultCategories: Category[] = [
  { id: "essentials", name: "Essentials" },
  { id: "clothing", name: "Clothing" },
  { id: "toiletries", name: "Toiletries" },
  { id: "electronics", name: "Electronics" },
  { id: "documents", name: "Documents" },
  { id: "misc", name: "Miscellaneous" },
];

const defaultItems: ChecklistItem[] = [
  { id: "1", text: "Passport/ID", completed: false, category: "documents" },
  { id: "2", text: "Travel Insurance", completed: false, category: "documents" },
  { id: "3", text: "Phone Charger", completed: false, category: "electronics" },
  { id: "4", text: "Power Bank", completed: false, category: "electronics" },
  { id: "5", text: "Cash & Cards", completed: false, category: "essentials" },
  { id: "6", text: "Water Bottle", completed: false, category: "essentials" },
  { id: "7", text: "Toothbrush", completed: false, category: "toiletries" },
  { id: "8", text: "Medications", completed: false, category: "essentials" },
];

const TravelChecklist = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem("travel_checklist");
    return saved ? JSON.parse(saved) : defaultItems;
  });
  
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem("travel_checklist_categories");
    return saved ? JSON.parse(saved) : defaultCategories;
  });
  
  const [newItem, setNewItem] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("essentials");
  const [filter, setFilter] = useState<string>("all");
  const [addingItem, setAddingItem] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [editCategory, setEditCategory] = useState("");
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("travel_checklist", JSON.stringify(items));
  }, [items]);
  
  useEffect(() => {
    localStorage.setItem("travel_checklist_categories", JSON.stringify(categories));
  }, [categories]);

  const filteredItems = items.filter(item => {
    if (filter === "all") return true;
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return item.category === filter;
  });

  const handleAddItem = () => {
    if (!newItem.trim()) {
      toast({
        title: "Item required",
        description: "Please enter an item for your checklist.",
        variant: "destructive",
      });
      return;
    }
    
    const newItemObj: ChecklistItem = {
      id: Date.now().toString(),
      text: newItem.trim(),
      completed: false,
      category: newItemCategory,
    };
    
    setItems([...items, newItemObj]);
    setNewItem("");
    setAddingItem(false);
    
    toast({
      title: "Item added",
      description: `"${newItem}" has been added to your checklist.`,
    });
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeItem = (id: string) => {
    const itemToRemove = items.find(item => item.id === id);
    setItems(items.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: `"${itemToRemove?.text}" has been removed from your checklist.`,
    });
  };

  const startEditItem = (item: ChecklistItem) => {
    setEditingItem(item.id);
    setEditText(item.text);
    setEditCategory(item.category);
  };

  const saveEditItem = () => {
    if (!editText.trim()) {
      toast({
        title: "Item required",
        description: "Please enter an item for your checklist.",
        variant: "destructive",
      });
      return;
    }
    
    setItems(
      items.map(item =>
        item.id === editingItem
          ? { ...item, text: editText.trim(), category: editCategory }
          : item
      )
    );
    
    setEditingItem(null);
    
    toast({
      title: "Item updated",
      description: "Your checklist item has been updated.",
    });
  };

  const getCompletionStatus = () => {
    if (items.length === 0) return { percent: 0, text: "No items" };
    const completed = items.filter(item => item.completed).length;
    const percent = Math.round((completed / items.length) * 100);
    return { 
      percent, 
      text: `${completed}/${items.length} (${percent}%)` 
    };
  };

  const resetChecklist = () => {
    setItems(items.map(item => ({ ...item, completed: false })));
    
    toast({
      title: "Checklist reset",
      description: "All items have been marked as incomplete.",
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center justify-between">
          <div className="flex items-center">
            <ListChecks className="mr-2" size={20} />
            Travel Checklist
          </div>
          <div className="text-sm font-normal flex items-center">
            <span className="text-muted-foreground mr-2">
              {getCompletionStatus().text}
            </span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={resetChecklist}
              disabled={items.every(item => !item.completed)}
              title="Reset checklist"
              className="h-7 px-2"
            >
              <CheckSquare className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="filter" className="text-sm">Filter by</Label>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger id="filter" className="mt-1">
              <SelectValue placeholder="Filter items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="divider" disabled>─────────────</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 max-h-[300px] overflow-y-auto mb-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              No items found.
            </div>
          ) : (
            filteredItems.map(item => (
              <div 
                key={item.id} 
                className={`flex items-center justify-between p-2 rounded border ${
                  item.completed ? "bg-muted/30 border-muted" : "border-border"
                }`}
              >
                {editingItem === item.id ? (
                  <div className="flex-1 space-y-2">
                    <Input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="mb-1"
                    />
                    <Select value={editCategory} onValueChange={setEditCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" onClick={saveEditItem} className="flex-1">
                        <Save className="h-4 w-4 mr-1" /> Save
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => setEditingItem(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={item.completed}
                        onCheckedChange={() => toggleItem(item.id)}
                        id={`item-${item.id}`}
                      />
                      <Label
                        htmlFor={`item-${item.id}`}
                        className={`cursor-pointer ${
                          item.completed ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {item.text}
                      </Label>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {categories.find(c => c.id === item.category)?.name || "Other"}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => startEditItem(item)}
                        className="h-7 w-7"
                      >
                        <FilePenLine className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="h-7 w-7 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>

        {addingItem ? (
          <div className="border border-border rounded-md p-3 space-y-3">
            <h3 className="font-medium">Add New Item</h3>
            
            <div className="space-y-2">
              <Label htmlFor="newItem">Item Description</Label>
              <Input
                id="newItem"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="E.g., Power adapter"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex space-x-2 pt-2">
              <Button onClick={handleAddItem} className="flex-1">
                <Check className="mr-2 h-4 w-4" />
                Add Item
              </Button>
              <Button variant="outline" onClick={() => setAddingItem(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={() => setAddingItem(true)}
            className="w-full flex items-center justify-center"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TravelChecklist;
