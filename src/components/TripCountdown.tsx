
import React, { useState, useEffect } from "react";
import { Calendar, Clock, TimerReset, TimerOff, PlusCircle, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface CountdownData {
  title: string;
  date: string;
  active: boolean;
}

const TripCountdown = () => {
  const { toast } = useToast();
  const [countdowns, setCountdowns] = useState<CountdownData[]>(() => {
    const saved = localStorage.getItem("trip_countdowns");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: { days: number, hours: number, minutes: number, seconds: number } }>({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCountdown, setNewCountdown] = useState<CountdownData>({
    title: "",
    date: "",
    active: true,
  });

  // Save countdowns to localStorage
  useEffect(() => {
    localStorage.setItem("trip_countdowns", JSON.stringify(countdowns));
  }, [countdowns]);

  // Update countdown timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      const newTimeLeft = countdowns.reduce((acc, countdown) => {
        if (!countdown.active) {
          acc[countdown.title] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          return acc;
        }
        
        const targetDate = new Date(countdown.date);
        const difference = targetDate.getTime() - now.getTime();
        
        if (difference <= 0) {
          acc[countdown.title] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          return acc;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        acc[countdown.title] = { days, hours, minutes, seconds };
        return acc;
      }, {} as { [key: string]: { days: number, hours: number, minutes: number, seconds: number } });
      
      setTimeLeft(newTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [countdowns]);

  const handleAddCountdown = () => {
    if (!newCountdown.title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your trip countdown.",
        variant: "destructive",
      });
      return;
    }
    
    if (!newCountdown.date) {
      toast({
        title: "Date required",
        description: "Please select a date for your trip countdown.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate the date is in the future
    const targetDate = new Date(newCountdown.date);
    const now = new Date();
    if (targetDate <= now) {
      toast({
        title: "Invalid date",
        description: "Please select a future date for your trip countdown.",
        variant: "destructive",
      });
      return;
    }
    
    setCountdowns([...countdowns, newCountdown]);
    setNewCountdown({
      title: "",
      date: "",
      active: true,
    });
    setShowAddForm(false);
    
    toast({
      title: "Countdown added",
      description: `Countdown for "${newCountdown.title}" has been added.`,
    });
  };

  const toggleCountdown = (index: number) => {
    const updatedCountdowns = [...countdowns];
    updatedCountdowns[index].active = !updatedCountdowns[index].active;
    setCountdowns(updatedCountdowns);
    
    toast({
      title: updatedCountdowns[index].active ? "Countdown resumed" : "Countdown paused",
      description: `Countdown for "${updatedCountdowns[index].title}" has been ${updatedCountdowns[index].active ? "resumed" : "paused"}.`,
    });
  };

  const removeCountdown = (index: number) => {
    const countdownTitle = countdowns[index].title;
    setCountdowns(countdowns.filter((_, i) => i !== index));
    
    toast({
      title: "Countdown removed",
      description: `Countdown for "${countdownTitle}" has been removed.`,
    });
  };

  const formatTimeUnit = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Clock className="mr-2" size={20} />
          Trip Countdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        {countdowns.length === 0 && !showAddForm ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-3">No trip countdowns yet.</p>
            <Button 
              variant="outline" 
              onClick={() => setShowAddForm(true)}
              className="flex items-center"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Your First Trip
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {countdowns.map((countdown, index) => (
              <div 
                key={index} 
                className={`border rounded-md p-3 transition-all ${
                  !countdown.active ? "opacity-70 bg-muted/30" : ""
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{countdown.title}</h3>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => toggleCountdown(index)}
                      title={countdown.active ? "Pause countdown" : "Resume countdown"}
                    >
                      {countdown.active ? <TimerOff className="h-4 w-4" /> : <TimerReset className="h-4 w-4" />}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeCountdown(index)}
                      title="Remove countdown"
                      className="text-destructive hover:text-destructive"
                    >
                      <TimerOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(countdown.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                
                {timeLeft[countdown.title] && (
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">
                        {formatTimeUnit(timeLeft[countdown.title].days)}
                      </span>
                      <span className="text-xs text-muted-foreground">Days</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">
                        {formatTimeUnit(timeLeft[countdown.title].hours)}
                      </span>
                      <span className="text-xs text-muted-foreground">Hours</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">
                        {formatTimeUnit(timeLeft[countdown.title].minutes)}
                      </span>
                      <span className="text-xs text-muted-foreground">Minutes</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">
                        {formatTimeUnit(timeLeft[countdown.title].seconds)}
                      </span>
                      <span className="text-xs text-muted-foreground">Seconds</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {showAddForm ? (
              <div className="border border-border rounded-md p-3 space-y-3 mt-4">
                <h3 className="font-medium">Add New Trip Countdown</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Trip Title</Label>
                  <Input
                    id="title"
                    value={newCountdown.title}
                    onChange={(e) => setNewCountdown({ ...newCountdown, title: e.target.value })}
                    placeholder="E.g., Ladakh Adventure"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Trip Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newCountdown.date}
                    onChange={(e) => setNewCountdown({ ...newCountdown, date: e.target.value })}
                  />
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button onClick={handleAddCountdown} className="flex-1">
                    <Check className="mr-2 h-4 w-4" />
                    Add Countdown
                  </Button>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={() => setShowAddForm(true)}
                className="w-full flex items-center justify-center mt-4"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Another Trip
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TripCountdown;
