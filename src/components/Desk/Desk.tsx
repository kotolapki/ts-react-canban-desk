import React, { useState } from 'react';
import styled from 'styled-components';
import { Task as TaskType, Comment} from '../../types';
import ChangeHeaderForm from '../ChangeHeaderForm';
import Task from '../Task';

interface DeskProps {
  title: string,
  username: string,
  tasks: TaskType[],
  comments: Comment[],
  deskId: string,
  onClickRemoveDesk: (id: string) => void,
  onSubmitChangeDeskHeader: (title: string, id: string) => void,
  onSubmitAddNewTask: (title: string, id: string, username: string) => void,
  onClickRemoveTask: (id: string) => void,
  onSubmitChangeTaskDescription: (description: string, id: string) => void,
  onSubmitAddNewComment: (author: string, text: string, id: string) => void,
  onSubmitChangeComment: (text: string, id: string) => void,
  onClickDeleteComment: (id: string) => void
}

function Desk({
  title,
  username, 
  tasks, 
  comments,
  deskId, 
  onClickRemoveDesk, 
  onSubmitChangeDeskHeader, 
  onSubmitAddNewTask, 
  onClickRemoveTask,
  onSubmitChangeTaskDescription,
  onSubmitAddNewComment,
  onSubmitChangeComment,
  onClickDeleteComment
}: DeskProps) {
  const [hasDeskHeaderClicked, setHasDeskHeaderClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function changeFormVisibility() {
    setHasDeskHeaderClicked(prev => !prev);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitAddNewTask(inputValue, deskId, username);
    setInputValue('');
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onBlurHideHeaderForm() {
    setHasDeskHeaderClicked(false)
  }

  return (
    <DeskContainer>
      <DeskHeaderWrapper>
        {hasDeskHeaderClicked? (
          <ChangeHeaderForm 
            deskname={title} 
            deskId={deskId} 
            onSubmitChangeDeskHeader={onSubmitChangeDeskHeader} 
            changeFormVisibility={changeFormVisibility}
            onBlurHideHeaderForm={onBlurHideHeaderForm}
          />
          ) : (
          <>
            <DeskHeader onClick={() => setHasDeskHeaderClicked(true)}>{title}</DeskHeader>
            <RemoveDeskButton type='button' onClick={() => {onClickRemoveDesk(deskId)}}>Remove desk</RemoveDeskButton>
          </>
        )}
      </DeskHeaderWrapper>
      <NewTaskForm onSubmit={onSubmit}>
        <NewTaskLabel htmlFor='newTask'>New task</NewTaskLabel>
        <NewTaskInput type='text' name='newTask' id='newTask' placeholder='New task' autoComplete='off' value={inputValue} onChange={onChange} required/>
        <AddNewTaskButton type='submit'>Confirm</AddNewTaskButton>
      </NewTaskForm>
      <ul>
        {tasks.map((task) => {
          return (
            <Task 
              key={task.id}
              username={username} 
              task={task} 
              deskname={title} 
              comments={comments.filter(comment => comment.taskId === task.id)}
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