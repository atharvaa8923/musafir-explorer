
import React from 'react';
import { Button } from '@/components/ui/button';

interface DestinationFormActionsProps {
  loading: boolean;
  isEditing: boolean;
  onCancel: () => void;
}

const DestinationFormActions = ({ loading, isEditing, onCancel }: DestinationFormActionsProps) => {
  return (
    <div className="flex justify-end space-x-2">
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" className="bg-musafir-spiritual" disabled={loading}>
        {loading ? "Saving..." : (isEditing ? "Update" : "Create")}
      </Button>
    </div>
  );
};

export default DestinationFormActions;
