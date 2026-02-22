import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Portfiolio = () => {
  const navigate = useNavigate();
  const userdetails = JSON.parse(localStorage.getItem("user"));
  console.log("userdetails =>", userdetails);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("User Details =>", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details =>", error);
      });
  }, []);
  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/2.jpg"
        sx={{ width: 100, height: 100, margin: "0 auto" }}
      />
      <Typography variant="h4" mt={2}>
        {userdetails?.username}
      </Typography>
      <Typography variant="h6" mt={1}>
        Full stack Developer
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          // sx={{ marginTop: "1rem" }}
          target="_blank"
          href="https://www.linkedin.com/in/arun-kumar-168674183/"
        >
          Linked In
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Portfiolio;
