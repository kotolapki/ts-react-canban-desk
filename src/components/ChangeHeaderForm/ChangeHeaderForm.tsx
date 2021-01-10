import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  deskname: string,
  deskId: string,
  updateDeskTitle: (title: string, id: string) => void,
  changeFormVisibility: () => void,
  onBlurHideHeaderForm: () => void
}

function ChangeHeaderForm({deskname, deskId, updateDeskTitle, changeFormVisibility, onBlurHideHeaderForm}: Props) {
  const [inputValue, setInputValue] = useState(deskname);
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
    updateDeskTitle(inputValue, deskId);
    changeFormVisibility();
  }

  return (
    <HeaderForm onSubmit={onSubmit} onBlur={onBlurHideHeaderForm}>
      <Label>Change deskname</Label>
      <Input type='text' ref={textInput} name='deskname' id='deskname' placeholder={inputValue} value={inputValue} autoComplete='off' onChange={onChange} required/>
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