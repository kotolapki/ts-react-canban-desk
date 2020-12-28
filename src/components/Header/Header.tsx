import React, { useState } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  username: string,
  handleChangeAutorizationStatus: () => void,
  onSubmit: (deskname: string) => void,
  onClickRemoveAllDesks: () => void,
}

function Header({username, handleChangeAutorizationStatus, onSubmit, onClickRemoveAllDesks}: HeaderProps) {
  const [inputValue, setInputValue] = useState('');

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(inputValue);
    e.currentTarget.reset();
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <AppHeader>
      <WelcomeText>Hello, {username}!</WelcomeText>
      <Button type='button' onClick={handleChangeAutorizationStatus}>Change user</Button>
      <NewDeskForm action='#' method='POST' onSubmit={onSubmitHandler}>
        <FormLabel htmlFor='deskname'>Enter new deskname</FormLabel>
        <FormInput type='text' name='deskname' id='deskname' placeholder='Deskname' autoComplete='off' onChange={onChangeHandler} required/>
        <Button type='submit'>Confirm</Button>
      </NewDeskForm>
      <RemoveDesksButton onClick={onClickRemoveAllDesks}>Remove all desks</RemoveDesksButton>
    </AppHeader>
  )
}

export default Header;

const AppHeader = styled.header`
  margin-bottom: 30px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`

const WelcomeText = styled.p`
  margin-right: 20px;
  font-size: 36px;
  font-weight: 700;
`

const Button = styled.button`
  margin-right: 20px;
  padding: 3px 10px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
`

const RemoveDesksButton = styled(Button)`
  margin-right: 0;
`

const NewDeskForm = styled.form`
  display: flex;
  align-content: stretch;
`

const FormLabel = styled.label`
  margin-right: 15px;
  font-size: 20px;
  align-self: center;
`

const FormInput = styled.input`
  margin-right: 15px;
  font-size: 20px;
  border: none;
  border-image: initial;
  border-bottom: 1px solid black;
`