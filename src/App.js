import "./App.css";
import Carlist from "./components/Carlist";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
function App() {
  return (
    <div className="App">
      <AppBar position="static">
      <Toolbar>

      <Typography variant="h6">
            My Carshop
          </Typography>
      </Toolbar>
      
      
      <Carlist/> 
      </AppBar>
  
    </div>
  );
}

export default App;
