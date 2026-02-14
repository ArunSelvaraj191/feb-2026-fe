import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Login = () => {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme =>", theme);

  const [loginData, setLoginData] = useState(null);
  const handleSubmit = () => {
    console.log("loginData =>", loginData);
  };
  const handleChange = (event) => {
    setLoginData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleNavigate = () => {
    navigate("/register");
  };

  useEffect(() => {
    console.log("Login Component Updated =>", loginData);
    return () => {
      console.log("Login Component Unmounted");
    };
  }, [loginData]);

  useEffect(() => {
    console.log("Login Component Mounted");
  }, []);

  return (
    <>
      <Card
        sx={{
          minWidth: 500,
          marginBottom: 2,
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <CardContent>
          <Typography variant="h4">Login</Typography>
          <Button onClick={toggleTheme} variant="contained" color="primary">
            theme: {theme === "light" ? "dark" : "light"}
          </Button>
          <Box>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              // fullWidth
              margin="normal"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              // fullWidth
              margin="normal"
              placeholder="Enter your Password"
              onChange={handleChange}
            />
          </Box>
          <Button
            sx={{ mr: 3 }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button variant="contained" color="primary" onClick={handleNavigate}>
            Register
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
