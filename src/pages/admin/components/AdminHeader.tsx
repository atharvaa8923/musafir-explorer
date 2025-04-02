
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, LogOut } from 'lucide-react';

interface AdminHeaderProps {
  onAddDestination: () => void;
  onLogout: () => void;
}

const AdminHeader = ({ onAddDestination, onLogout }: AdminHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="flex space-x-2">
        <Button 
          onClick={onAddDestination}
          className="bg-musafir-spiritual flex items-center gap-1"
        >
          <PlusCircle className="h-4 w-4" />
          Add Destination
        </Button>
        <Button 
          variant="outline" 
          onClick={onLogout}
          className="flex items-center gap-1"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
