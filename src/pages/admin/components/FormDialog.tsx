
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DestinationForm from "@/components/admin/destination-form";

interface FormDialogProps {
  destination: any;
  onSave: () => void;
  onCancel: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FormDialog: React.FC<FormDialogProps> = ({ 
  destination, 
  onSave, 
  onCancel, 
  isOpen, 
  setIsOpen 
}) => (
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

export default FormDialog;
