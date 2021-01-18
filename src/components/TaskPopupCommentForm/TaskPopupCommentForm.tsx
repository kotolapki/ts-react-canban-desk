import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addNewComment } from '../../redux/actions';
import { selectUsername } from '../../redux/selectors';

interface TaskPopupCommentFormProps {
  taskId: string,
  onFocusShowCommentBtnsWrapper: () => void,
  hasCommentFormFocused: boolean,
  hideCommentBtnsWrapper: () => void
}

function TaskPopupCommentForm({ 
  taskId, 
  onFocusShowCommentBtnsWrapper, 
  hasCommentFormFocused, 
  hideCommentBtnsWrapper
}: TaskPopupCommentFormProps) {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addNewComment(username, inputValue, taskId));
    hideCommentBtnsWrapper();
    e.currentTarget.reset();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <TaskPopupForm onSubmit={onSubmit} onClick={e => e.stopPropagation()}>
      <TaskCommentLabel htmlFor='comment'>Enter new comment</TaskCommentLabel>
      <TaskCommentTextInput 
        name='comment' 
        placeholder='Add new comment' 
        autoComplete='off'
        type='text' 
        id='comment' 
        onFocus={() => onFocusShowCommentBtnsWrapper()} 
        onChange={onChange}
        required
      />
      {hasCommentFormFocused && 
        <FormBtnsWrapper>
          <FormSubmitBtn type='submit'>Confirm</FormSubmitBtn>
          <CloseInputFormBtn type='button' aria-label='hide comment controls' onClick={() => hideCommentBtnsWrapper()}/>
        </FormBtnsWrapper>
      }
    </TaskPopupForm>
  )
}

export default TaskPopupCommentForm;

const TaskPopupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TaskCommentLabel = styled.label`
  font-size: 0;
`

const TaskCommentTextInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  resize: none;
  box-sizing: border-box;
  background: Silver;
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
  border: none;
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