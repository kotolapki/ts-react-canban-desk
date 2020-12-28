import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ChangeHeaderFormProps {
  deskname: string,
  index: number,
  onSubmitChangeDeskHeader: (value: string, index: number) => void,
  changeFormVisibility: () => void,
  onBlurHideHeaderForm: () => void
}

function ChangeHeaderForm({deskname, index, onSubmitChangeDeskHeader, changeFormVisibility, onBlurHideHeaderForm}: ChangeHeaderFormProps) {
  const [inputValue, setInputValue] = useState(deskname);
  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textInput.current !== null) {
      textInput.current.focus();
    }
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitChangeDeskHeader(inputValue, index);
    changeFormVisibility();
  }

  return (
    <HeaderForm action='#' method='POST' onSubmit={onSubmitHandler} onBlur={onBlurHideHeaderForm}>
      <Label>Change deskname</Label>
      <Input type='text' ref={textInput} name='deskname' id='deskname' placeholder={inputValue} value={inputValue} autoComplete='off' onChange={onChangeHandler} required/>
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