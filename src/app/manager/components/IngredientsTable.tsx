// components/IngredientsTable.tsx
import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface IngredientRow {
  id: number;
  ingredient: string;
  par: number;
  inHouse: number;
  orderUnit: string;
  need: number;
  order: number;
}

interface IngredientsTableProps {
  rows: GridRowsProp;
  handleEdit: (row: IngredientRow) => void;
}

export const IngredientsTable = ({
  rows,
  handleEdit,
}: IngredientsTableProps) => {
  const columns: GridColDef[] = [
    { field: "ingredient", headerName: "Ingredient", width: 150 },
    { field: "par", headerName: "Par", type: "number", width: 100 },
    { field: "inHouse", headerName: "In-House", type: "number", width: 110 },
    { field: "orderUnit", headerName: "Order Unit", width: 130 },
    { field: "need", headerName: "Need", type: "number", width: 100 },
    { field: "order", headerName: "Order", type: "number", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        // Add action buttons here
      ],
    },
  ];

  return (
    <Box height="400px" width="100%">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};
