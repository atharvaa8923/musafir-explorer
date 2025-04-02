
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import databaseService from '@/services/databaseService';
import { toast } from '@/components/ui/use-toast';
import FormDialog from '../components/FormDialog';

export function useDestinationForm(refreshData: () => void) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  const openAddForm = () => {
    setSelectedDestination(null);
    setIsDialogOpen(true);
  };

  const openEditForm = (destination: any) => {
    setSelectedDestination(destination);
    setIsDialogOpen(true);
  };

  const closeForm = () => {
    setIsDialogOpen(false);
  };

  const handleFormSave = () => {
    setIsDialogOpen(false);
    refreshData();
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
          refreshData();
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

  const handleViewDestination = (id: string) => {
    navigate(`/destination/${id}`);
  };

  return {
    isDialogOpen,
    selectedDestination,
    openAddForm,
    openEditForm,
    closeForm,
    handleFormSave,
    handleDeleteDestination,
    handleViewDestination,
    FormDialog
  };
}
