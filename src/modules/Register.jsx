import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState(null);
  const handleSubmit = () => {
    console.log("registerData =>", registerData);
  };
  const handleChange = (event) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("Register Component Mounted");
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Fetched Data =>", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data =>", error);
    //   });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Fetched Data =>", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data =>", error);
      });
  }, []);

  return (
    <Card sx={{ minWidth: 500, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h4">Register</Typography>
        <Box>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            // fullWidth
            margin="normal"
            placeholder="Enter your Username"
            onChange={handleChange}
          />
        </Box>
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
          Login
        </Button>
      </CardContent>
    </Card>
  );
};

export default Register;
