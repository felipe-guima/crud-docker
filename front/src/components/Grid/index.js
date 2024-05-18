import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

import { format, addDays } from 'date-fns'; // Importe a função addDays

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const TdIcons = styled.td`
  padding-top: 15px;
  cursor: pointer;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

function Grid({ users, setUsers, setOnEdit }) {

  const baseURL = "http://localhost:8800/"

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(baseURL + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th onlyWeb>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="20%">
              {item.name}
            </Td>
            <Td width="25%">
              {item.email}
            </Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td width="15%" onlyWeb>
              {format(addDays(new Date(item.data_nascimento), 1), 'dd/MM/yyyy')} {/* Adiciona 1 dia antes de formatar */}
            </Td>
            <TdIcons alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </TdIcons>
            <TdIcons alignCenter width="5%" >
              <FaTrash onClick={() => handleDelete(item.id)} />
            </TdIcons>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
