// components/EditableDialog.tsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

export interface IngredientForm {
  id?: number;
  ingredient: string;
  par: number;
  inHouse: number;
  orderUnit: string;
  need: number;
  order: number;
}

interface EditableDialogProps {
  open: boolean;
  handleClose: () => void;
  initialData?: IngredientForm;
  handleSave: (data: IngredientForm) => void;
}

export const EditableDialog = ({
  open,
  handleClose,
  initialData,
  handleSave,
}: EditableDialogProps) => {
  const [formData, setFormData] = useState<IngredientForm>({
    ingredient: "",
    par: 0,
    inHouse: 0,
    orderUnit: "",
    need: 0,
    order: 0,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSave = () => {
    handleSave(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {initialData ? "Edit Ingredient" : "Add New Ingredient"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="ingredient"
          label="Ingredient"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.ingredient}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="par"
          label="Par"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.par}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="inHouse"
          label="In-House"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.inHouse}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="orderUnit"
          label="Order Unit"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.orderUnit}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="need"
          label="Need"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.need}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="order"
          label="Order"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.order}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
