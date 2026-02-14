import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Portfolio Website{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Build using React and Material UI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Todo App{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                CRUD operation using React and Material UI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Portfolio Website{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Build using React and Material UI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Todo App{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                CRUD operation using React and Material UI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Projects;
