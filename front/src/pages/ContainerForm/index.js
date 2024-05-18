import GlobalStyle from "../../styles/global.js";
import styled from "styled-components";
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Center = styled.div`
display: flex;
justify-content: center;
margin-bottom: 70px;
margin-top: 40px;
`

const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function ContainerForm() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const baseURL = "http://localhost:8800/"

  const getUsers = async () => {
    try {
      // ordenacao alfabetica res.data.sort((a, b) => (a.name > b.name ? 1 : -1))
      // 
      const res = await axios.get(baseURL);
      setUsers(res.data);
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
    <Navbar/>
    <Center>
      <Container>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3200} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </Center>
    <Rodape/>

    </>
  );
}

export default ContainerForm;
