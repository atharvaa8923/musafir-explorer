
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AdminLogin from '@/components/admin/AdminLogin';
import DestinationTable from './components/DestinationTable';
import AdminHeader from './components/AdminHeader';
import { useDestinationForm } from './hooks/useDestinationForm';
import databaseService from '@/services/databaseService';

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { 
    isDialogOpen, 
    selectedDestination,
    openAddForm, 
    openEditForm, 
    closeForm, 
    handleFormSave 
  } = useDestinationForm(fetchDestinations);

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

  async function fetchDestinations() {
    setLoading(true);
    try {
      const data = await databaseService.getDestinations();
      setDestinations(data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    fetchDestinations();
  };

  const handleLogout = async () => {
    await databaseService.logout();
    setIsAdmin(false);
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
          <AdminHeader onAddDestination={openAddForm} onLogout={handleLogout} />
          
          <DestinationTable 
            destinations={destinations}
            loading={loading}
            onEdit={openEditForm}
            onDelete={fetchDestinations}
          />
        </div>
      </main>
      
      {isDialogOpen && (
        <useDestinationForm.FormDialog 
          destination={selectedDestination} 
          onSave={handleFormSave} 
          onCancel={closeForm} 
          isOpen={isDialogOpen}
          setIsOpen={closeForm}
        />
      )}
    </div>
  );
};

export default AdminPage;
