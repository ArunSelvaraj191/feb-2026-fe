import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUsername, setEditedUsername] = useState("");
  const [editedId, setEditedId] = useState("");
  console.log("users =>", users);
  const handleChange = (event) => {
    console.log("Input value changed:", event.target.value);
    setEditedUsername(event.target.value);
  };
  const handleEdit = (index, id) => {
    console.log("Edit button clicked for user at index:", index, "ID:", id);
    setEditIndex(index);
    setEditedId(id);
  };
  const handleDelete = async (id) => {
    console.log("Delete button clicked for user with ID:", id);
    const response = await axios.delete(
      `${import.meta.env.VITE_BE_URL}/users/${id}`,
    );
    if (response.status === 200) {
      fetchUser();
    }
  };
  const handleSave = async () => {
    console.log("Save button clicked ", editedUsername);
    const response = await axios.put(
      `${import.meta.env.VITE_BE_URL}/users/${editedId}`,
      {
        username: editedUsername,
      },
    );
    if (response.status === 200) {
      fetchUser();
      setEditIndex(null);
    }
  };
  const fetchUser = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BE_URL}/users`);
    console.log("Users =>", response);
    if (response.status === 200) {
      setUsers(response.data);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" mt={2}>
        Users Page
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>User Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {editIndex === index ? (
                    <TextField
                      defaultValue={user.username}
                      variant="standard"
                      onChange={handleChange}
                    />
                  ) : (
                    <>{user.username}</>
                  )}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {editIndex === index ? (
                    <IconButton onClick={handleSave}>
                      <SaveIcon />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton onClick={() => handleEdit(index, user._id)}>
                        <EditIcon
                          sx={{
                            color: "blue",
                          }}
                        />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(user._id)}>
                        <DeleteIcon
                          sx={{
                            color: "red",
                          }}
                        />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;
