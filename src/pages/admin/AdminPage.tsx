
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import databaseService from '@/services/databaseService';
import DestinationTable from './components/DestinationTable';
import AdminHeader from './components/AdminHeader';
import { useDestinationForm } from './hooks/useDestinationForm';
import { toast } from '@/components/ui/use-toast';
import AdminLogin from '@/components/admin/AdminLogin';

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const data = await databaseService.getDestinations();
      setDestinations(data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load destinations. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const { 
    isDialogOpen, 
    selectedDestination, 
    openAddForm, 
    openEditForm, 
    closeForm, 
    handleFormSave, 
    handleDeleteDestination, 
    handleViewDestination,
    FormDialog
  } = useDestinationForm(fetchDestinations);

  useEffect(() => {
    const checkAdmin = async () => {
      const adminStatus = await databaseService.isAdmin();
      setIsAdmin(adminStatus);
      if (adminStatus) {
        fetchDestinations();
      }
    };

    checkAdmin();
  }, []);

  const handleLogout = async () => {
    await databaseService.logout();
    setIsAdmin(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleLogin = async (username: string, password: string) => {
    const success = await databaseService.login(username, password);
    if (success) {
      setIsAdmin(true);
      fetchDestinations();
      toast({
        title: "Welcome",
        description: "You have successfully logged in as admin.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid username or password.",
      });
    }
    return success;
  };

  if (isAdmin === null) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin h-8 w-8 border-4 border-musafir-spiritual rounded-full border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto p-6">
        <AdminLogin onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <AdminHeader onAddDestination={openAddForm} onLogout={handleLogout} />
      
      <DestinationTable 
        destinations={destinations} 
        loading={loading} 
        onEdit={openEditForm}
        onDelete={handleDeleteDestination}
        onView={handleViewDestination}
      />
      
      <FormDialog
        destination={selectedDestination}
        onSave={handleFormSave}
        onCancel={closeForm}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default AdminPage;
