import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  FormWrap,
  Heading,
  InputGroup,
  InputWrap,
  DarkButton,
  Button,
  ButtonWrap,
} from "../styles/DefaultStyles";
import Modal from "./Modal";
import { SocketContext } from "../context/socket";

const CreateBudget = ({ visible, close }) => {
  const socket = useContext(SocketContext);

  const [name, setName] = useState("");
  const [total, setTotal] = useState("");
  const [summary, setSummary] = useState("");

  const handleCreateBudget = (e) => {
    e.preventDefault();
    const payload = {
      name,
      total: parseFloat(total),
      summary,
    };

    console.log(payload);
    socket.emit("createBudget", payload);
    setName("");
    setTotal("");
    setSummary("");
  };

  return (
    <Modal visible={visible} close={close}>
      <Heading>
        <h1>Create a Budget</h1>
        <p>Provide info for your budget below.</p>
      </Heading>
      <FormWrap>
        <form onSubmit={handleCreateBudget}>
          <InputGroup>
            <InputWrap>
              <label>Budget name</label>
              <input
                name="budget"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrap>
            <InputWrap>
              <label>Total</label>
              <input
                name="total"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </InputWrap>
            <InputWrap>
              <label>Summary</label>
              <textarea
                name="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </InputWrap>
          </InputGroup>
          <ButtonWrap>
            <Button type="button" onClick={close}>
              Cancel
            </Button>
            <DarkButton type="submit">Create budget</DarkButton>
          </ButtonWrap>
        </form>
      </FormWrap>
    </Modal>
  );
};

export default CreateBudget;
