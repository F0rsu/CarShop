import { Button } from "@mui/material";
import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function EditCar({ updateCar, car }) {
  const [open, setOpen] = React.useState(false);
  const [editedCar, setEditedCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    price: "",
    year: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
    setEditedCar(car);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateCar(editedCar);
    setOpen(false);
  };

  const inputChanged = (event) => {
    setEditedCar({ ...editedCar, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        EDIT
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent>
          <TextField
            name="brand"
            value={editedCar.brand}
            autoFocus
            margin="dense"
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="model"
            value={editedCar.model}
            margin="dense"
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="color"
            value={editedCar.color}
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="fuel"
            value={editedCar.fuel}
            margin="dense"
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="year"
            value={editedCar.year}
            margin="dense"
            label="Year"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
          <TextField
            name="price"
            value={editedCar.price}
            margin="dense"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
            onChange={inputChanged}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}