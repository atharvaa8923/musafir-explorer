
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import DestinationForm from '@/components/admin/destination-form';
import { useNavigate } from 'react-router-dom';
import databaseService from '@/services/databaseService';
import { toast } from '@/components/ui/use-toast';

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

  // Component for the form dialog
  const FormDialog = ({ destination, onSave, onCancel, isOpen, setIsOpen }) => (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {destination ? "Edit Destination" : "Add New Destination"}
          </DialogTitle>
        </DialogHeader>
        <DestinationForm 
          destination={destination} 
          onSave={onSave} 
          onCancel={onCancel} 
        />
      </DialogContent>
    </Dialog>
  );

  // Attach the dialog component to the hook
  useDestinationForm.FormDialog = FormDialog;

  return {
    isDialogOpen,
    selectedDestination,
    openAddForm,
    openEditForm,
    closeForm,
    handleFormSave,
    handleDeleteDestination,
    handleViewDestination
  };
}
