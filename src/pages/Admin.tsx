import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AdminLogin from '@/components/admin/AdminLogin';
import DestinationForm from '@/components/admin/destination-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IndianRupee, Calendar, Pencil, Trash2, PlusCircle, LogOut } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import databaseService from '@/services/databaseService';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const adminStatus = await databaseService.isAdmin();
      setIsAdmin(adminStatus);
      if (adminStatus) {
        fetchDestinations();
      } else {
        setLoading(false);
      }
    };
    
    checkAdmin();
  }, []);

  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const data = await databaseService.getDestinations();
      setDestinations(data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load destinations",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    fetchDestinations();
  };

  const handleLogout = async () => {
    await databaseService.logout();
    setIsAdmin(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const handleAddDestination = () => {
    setSelectedDestination(null);
    setIsDialogOpen(true);
  };

  const handleEditDestination = (destination: any) => {
    setSelectedDestination(destination);
    setIsDialogOpen(true);
  };

  const handleDeleteDestination = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      try {
        const success = await databaseService.deleteDestination(id);
        if (success) {
          toast({
            title: "Success",
            description: "Destination deleted successfully",
          });
          fetchDestinations();
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to delete destination",
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An error occurred while deleting",
        });
      }
    }
  };

  const handleFormSave = () => {
    setIsDialogOpen(false);
    fetchDestinations();
  };

  const handleViewDestination = (id: string) => {
    navigate(`/destination/${id}`);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <AdminLogin onLoginSuccess={handleLoginSuccess} />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex space-x-2">
              <Button 
                onClick={handleAddDestination}
                className="bg-musafir-spiritual flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Add Destination
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center gap-1"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin h-10 w-10 border-4 border-musafir-spiritual rounded-full border-t-transparent"></div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {destinations.map((destination: any) => (
                    <TableRow key={destination.id}>
                      <TableCell className="font-medium">{destination.title}</TableCell>
                      <TableCell>{destination.location}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${destination.categoryColor} bg-opacity-20`}>
                          {destination.categoryLabel}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          {destination.price}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {destination.days}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleViewDestination(destination.id)}
                          >
                            View
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleEditDestination(destination)}
                            className="text-musafir-spiritual"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteDestination(destination.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {selectedDestination ? "Edit Destination" : "Add New Destination"}
            </DialogTitle>
          </DialogHeader>
          <DestinationForm 
            destination={selectedDestination} 
            onSave={handleFormSave} 
            onCancel={() => setIsDialogOpen(false)} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
