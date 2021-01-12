import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateTaskDescription } from '../../redux/actions';

interface TaskPopupDescriptionFormProps {
  onClickChangeTaskDescriptionFormVisibility: () => void,
  initialValue: string,
  taskId: string
}

function TaskPopupDescriptionForm({
  onClickChangeTaskDescriptionFormVisibility,
  initialValue,
  taskId}: TaskPopupDescriptionFormProps) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(initialValue);
  
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateTaskDescription(inputValue, taskId));
    onClickChangeTaskDescriptionFormVisibility();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onClick() {
    onClickChangeTaskDescriptionFormVisibility();
  }

  return (
    <TaskPopupForm onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
      <TaskInputLabel htmlFor='taskDescription'>Change description</TaskInputLabel>
      <TaskDescriptionInput
        name='taskDescription'
        placeholder='Add task description' 
        autoComplete='off'
        type='text' 
        id='taskDescription' 
        value={inputValue}
        onChange={onChange}
      />
      <FormBtnsWrapper>
        <FormSubmitBtn type='submit'>Confirm</FormSubmitBtn>
        <CloseInputFormBtn type='button' onClick={onClick}/>
      </FormBtnsWrapper>
    </TaskPopupForm>
  )
}

export default TaskPopupDescriptionForm;

const TaskPopupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TaskInputLabel = styled.label`
  font-size: 0;
`

const TaskDescriptionInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  resize: none;
  outline: none;
  box-sizing: border-box;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }
`

const FormBtnsWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
`

const FormSubmitBtn = styled.button`
  margin-right: 10px;
  padding: 4px 10px;
  font-size: 16px;
  color: white;
  background-color: black;
  text-transform: uppercase;
  border-radius: 5px;
`

const CloseInputFormBtn = styled.button`
  width: 28px;
  height: 28px;
  position: relative;
  background-color: black;
  border: none;
  border-radius: 5px;

  &::before {
    content: '';
    width: 25px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: 13px;
    left: 2px;
    transform: rotate(-45deg);
  }

  &::after {
    content: '';
    width: 25px;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 13px;
    left: 2px;
    transform: rotate(45deg);
  }
`