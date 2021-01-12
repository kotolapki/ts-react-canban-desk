import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addNewDesk, removeAllDesks, setUsername } from '../../redux/actions';
import { State } from '../../types';

function Header() {
  const dispatch = useDispatch();
  const username = useSelector((state: State) => state.username);
  const [inputValue, setInputValue] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addNewDesk(inputValue));
    e.currentTarget.reset();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <AppHeader>
      <WelcomeText>Hello, {username}!</WelcomeText>
      <Button type='button' onClick={() => dispatch(setUsername(''))}>Change user</Button>
      <NewDeskForm onSubmit={onSubmit}>
        <FormLabel htmlFor='deskname'>Enter new deskname</FormLabel>
        <FormInput type='text' name='deskname' id='deskname' placeholder='Deskname' autoComplete='off' onChange={onChange} required/>
        <Button type='submit'>Confirm</Button>
      </NewDeskForm>
      <RemoveDesksButton onClick={() => dispatch(removeAllDesks)}>Remove all desks</RemoveDesksButton>
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