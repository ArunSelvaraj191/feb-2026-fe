import { AppBar, Button, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/portfolio">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projects
        </Button>
        <Button color="inherit" component={Link} to="/skills">
          Skills
        </Button>
        <Button color="inherit" component={Link} to="/users">
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
