import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import TextField from "@mui/material/TextField";

function AddCar(props) {
  const { addCar } = props;
  
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    addCar(car);
    handleClose();
    setCar({
      brand: "",
      model: "",
      color: "",
      fuel: "",
      year: "",
      price: "",
    });
  };

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new car</DialogTitle>
        <div style={{ margin: 10 }}>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            label="Brand"
            fullWidth
            value={car.brand}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="model"
            label="Model"
            fullWidth
            value={car.model}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="color"
            label="Color"
            fullWidth
            value={car.color}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="fuel"
            label="Fuel"
            fullWidth
            value={car.fuel}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="year"
            label="Year"
            fullWidth
            value={car.year}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            fullWidth
            value={car.price}
            onChange={handleChange}
          />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </Dialog>
    </div>
  );
}

export default AddCar;