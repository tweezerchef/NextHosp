"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { EditableDialog, IngredientForm } from "./components/EditableDialog";
import { IngredientsTable } from "./components/IngredientsTable";

const initialRows = [
  {
    id: 1,
    ingredient: "Tomatoes",
    par: 20,
    inHouse: 15,
    orderUnit: "Kg",
    need: 5,
    order: 0,
  },
  // More rows as needed
];

export default function ManagerPage() {
  const [rows, setRows] = useState(initialRows);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRow, setEditingRow] = useState<IngredientForm | null>(null);

  const handleAddNew = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingRow(null);
  };

  const handleSaveIngredient = (ingredient: IngredientForm) => {
    if (editingRow) {
      // Logic to update the row
    } else {
      // Logic to add new row
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button onClick={handleAddNew} variant="contained" color="primary">
        Add Ingredient
      </Button>
      <IngredientsTable rows={rows} handleEdit={setEditingRow} />
      <EditableDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        initialData={editingRow}
        handleSave={handleSaveIngredient}
      />
    </Box>
  );
}
