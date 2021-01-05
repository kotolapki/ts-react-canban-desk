import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

interface AutorizationProps {
  handleChangeUser: (username: string) => (void);
}

function Autorization({handleChangeUser}: AutorizationProps) {
  const [inputValue, setInputValue] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleChangeUser(inputValue);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Label htmlFor='login'>Enter your name</Label>
        <Input type='text' name='login' id='login' autoComplete='off' placeholder='Your name' value={inputValue} onChange={onChange} required/>
        <SubmitBtn type='submit'>Confirm</SubmitBtn>
      </Form>
    </Container>
  )
}

export default Autorization;

const Container = styled.div`
  padding: 30px 80px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.label`
  margin-bottom: 15px;
  font-size: 36px;
  font-weight: 300;
`

const Input = styled.input`
  margin-bottom: 15px;
  padding: 5px;
  font-size: 20px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
`

const SubmitBtn = styled.button`
  padding: 8px 15px;
  font-size: 22px;
  color: white;
  text-transform: uppercase;
  background-color: black;
  border: none;
  border-radius: 5px;
`