import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateDeskTitle } from '../../redux/actions';

interface Props {
  title: string,
  deskId: string,
  changeFormVisibility: () => void,
  onBlurHideHeaderForm: () => void
}

function ChangeHeaderForm({title, deskId, changeFormVisibility, onBlurHideHeaderForm}: Props) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(title);
  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textInput.current !== null) {
      textInput.current.focus();
    }
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateDeskTitle(inputValue, deskId));
    changeFormVisibility();
  }

  return (
    <HeaderForm onSubmit={onSubmit} onBlur={onBlurHideHeaderForm}>
      <Label>Change desk name</Label>
      <Input type='text' ref={textInput} name='deskName' id='deskName' placeholder={inputValue} value={inputValue} autoComplete='off' onChange={onChange} required/>
    </HeaderForm>
  )
}

export default ChangeHeaderForm;

const HeaderForm = styled.form`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
`

const Label = styled.label`
  font-size: 0;
`

const Input = styled.input`
  margin: 0px auto 10px;
  width: min-content;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
`