import { Chip, Container, Stack } from "@mui/material";
const Skills = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Stack direction="row" spacing={1} justifyContent="center">
        <Chip label="JavaScript" color="secondary" />
        <Chip label="React" color="error" />
        <Chip label="Node.js" color="primary" />
        <Chip label="Express" color="primary" />
        <Chip label="MongoDB" color="primary" />
        <Chip label="HTML" color="primary" />
        <Chip label="CSS" color="primary" />
      </Stack>
    </Container>
  );
};
export default Skills;
