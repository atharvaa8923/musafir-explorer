
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { IndianRupee, Calendar, Pencil, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import databaseService from '@/services/databaseService';

interface DestinationTableProps {
  destinations: any[];
  loading: boolean;
  onEdit: (destination: any) => void;
  onDelete: () => void;
  onView: (id: string) => void;
}

const DestinationTable = ({ destinations, loading, onEdit, onDelete, onView }: DestinationTableProps) => {
  const handleDeleteDestination = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      try {
        const success = await databaseService.deleteDestination(id);
        if (success) {
          toast({
            title: "Success",
            description: "Destination deleted successfully",
          });
          onDelete(); // Call the refresh callback without arguments
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin h-10 w-10 border-4 border-musafir-spiritual rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
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
                    onClick={() => onView(destination.id)}
                  >
                    View
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onEdit(destination)}
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
  );
};

export default DestinationTable;
