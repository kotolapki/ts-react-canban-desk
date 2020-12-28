import React, { useState } from 'react';
import styled from 'styled-components';
import { TasksDesk } from '../../App';
import ChangeHeaderForm from '../ChangeHeaderForm';
import TaskElement from '../TaskElement';

interface DeskProps {
  username: string,
  desk: TasksDesk,
  deskIndex: number,
  onClickRemoveDesk: (index: number) => void,
  onSubmitChangeDeskHeader: (value: string, index: number) => void,
  onSubmitAddNewTask: (value: string, index: number, username: string) => void,
  onClickRemoveTask: (deskIndex: number, taskIndex: number) => void,
  onSubmitChangeTaskDescription: (value: string, deskIndex: number, taskIndex: number) => void,
  onSubmitAddNewComment: (author: string, value: string, deskIndex: number, taskIndex: number) => void,
  onSubmitChangeComment: (value: string, deskIndex: number, taskIndex: number, commentIndex: number) => void,
  onClickDeleteComment: (deskIndex: number, taskIndex: number, commentIndex: number) => void
}

function Desk({
  username, 
  desk:{title, tasks}, 
  deskIndex, 
  onClickRemoveDesk, 
  onSubmitChangeDeskHeader, 
  onSubmitAddNewTask, 
  onClickRemoveTask,
  onSubmitChangeTaskDescription,
  onSubmitAddNewComment,
  onSubmitChangeComment,
  onClickDeleteComment
}: DeskProps) {
  const [changeHeaderFormVisibility, setChangeHeaderFormVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function changeFormVisibility() {
    setChangeHeaderFormVisibility(prev => !prev);
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitAddNewTask(inputValue, deskIndex, username);
    setInputValue('');
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onBlurHideHeaderForm() {
    setChangeHeaderFormVisibility(false)
  }

  return (
    <DeskContainer>
      <DeskHeaderWrapper>
        {changeHeaderFormVisibility? (
          <ChangeHeaderForm 
            deskname={title} 
            index={deskIndex} 
            onSubmitChangeDeskHeader={onSubmitChangeDeskHeader} 
            changeFormVisibility={changeFormVisibility}
            onBlurHideHeaderForm={onBlurHideHeaderForm}
          />
          ) : (
          <>
            <DeskHeader onClick={() => setChangeHeaderFormVisibility(true)}>{title}</DeskHeader>
            <RemoveDeskButton type='button' onClick={() => {onClickRemoveDesk(deskIndex)}}>Remove desk</RemoveDeskButton>
          </>
        )}
      </DeskHeaderWrapper>
      <NewTaskForm action='#' method='POST' onSubmit={onSubmitHandler}>
        <NewTaskLabel htmlFor='newTask'>New task</NewTaskLabel>
        <NewTaskInput type='text' name='newTask' id='newTask' placeholder='New task' autoComplete='off' value={inputValue} onChange={onChangeHandler} required/>
        <AddNewTaskButton type='submit'>Confirm</AddNewTaskButton>
      </NewTaskForm>
      <ul>
        {tasks.map((task, index) => {
          return (
            <TaskElement 
              key={task.id}
              username={username} 
              task={task} 
              deskname={title} 
              taskText={task.title} 
              deskIndex={deskIndex} 
              taskIndex={index} 
              onClickRemoveTask={onClickRemoveTask}
              onSubmitChangeTaskDescription={onSubmitChangeTaskDescription}
              onSubmitAddNewComment={onSubmitAddNewComment}
              onSubmitChangeComment={onSubmitChangeComment}
              onClickDeleteComment={onClickDeleteComment}
            />
          )})
        }
      </ul>
    </DeskContainer>
  )
}

export default Desk;

const DeskContainer = styled.div`
  margin-right: 7px;
  margin-bottom: 20px;
  padding: 10px;
  min-width: 300px;
  height: fit-content;
  background-color: snow;
  border: 2px solid black;
  border-radius: 10px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`

const DeskHeaderWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`

const DeskHeader = styled.h2`
  margin-right: 25px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }
`

const RemoveDeskButton = styled.button`
  padding: 3px 5px;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
`

const NewTaskForm = styled.form`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

const NewTaskLabel = styled.label`
  font-size: 0;
`

const NewTaskInput = styled.input`
  margin-right: 10px;
  font-size: 18px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid black;
  background-color: transparent;
`

const AddNewTaskButton = styled.button`
  padding: 5px 20px;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
`