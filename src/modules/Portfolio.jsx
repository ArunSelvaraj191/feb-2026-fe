import { Avatar, Button, Container, Typography } from "@mui/material";

const Portfiolio = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/2.jpg"
        sx={{ width: 100, height: 100, margin: "0 auto" }}
      />
      <Typography variant="h4" mt={2}>
        Rahul
      </Typography>
      <Typography variant="h6" mt={1}>
        Full stack Developer
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem" }}
        target="_blank"
        href="https://www.linkedin.com/in/arun-kumar-168674183/"
      >
        Linked In
      </Button>
    </Container>
  );
};

export default Portfiolio;
