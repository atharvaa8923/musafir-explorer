
import { useState } from "react";
import { Check, Plus, Backpack } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PackingList = () => {
  // Placeholder data
  const [items, setItems] = useState([
    { id: 1, name: "Hiking Boots", checked: true, category: "essential" },
    { id: 2, name: "Water Bottle", checked: true, category: "essential" },
    { id: 3, name: "First Aid Kit", checked: false, category: "essential" },
    { id: 4, name: "Backpack", checked: true, category: "essential" },
    { id: 5, name: "Rain Jacket", checked: false, category: "clothing" },
    { id: 6, name: "Sunscreen", checked: false, category: "personal" },
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "essential": return "bg-musafir-spiritual text-white";
      case "clothing": return "bg-musafir-trekking text-white";
      case "personal": return "bg-musafir-meditation text-white";
      default: return "bg-musafir-earth text-foreground";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center justify-between">
          <div className="flex items-center">
            <Backpack className="mr-2" size={20} />
            Packing List
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Plus size={16} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-1 border-b border-border last:border-0">
              <div className="flex items-center">
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="mr-3"
                />
                <span className={item.checked ? "line-through text-muted-foreground" : ""}>
                  {item.name}
                </span>
              </div>
              <Badge variant="outline" className={getCategoryColor(item.category)}>
                {item.category}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-2 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {items.filter(item => item.checked).length} of {items.length} packed
          </span>
          {items.every(item => item.checked) && (
            <div className="flex items-center text-musafir-trekking">
              <Check size={16} className="mr-1" />
              <span>All packed!</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PackingList;
