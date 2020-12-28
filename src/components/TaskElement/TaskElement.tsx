import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from '../../App';
import TaskPopup from '../TaskPopup';

interface TaskElementProps {
  username: string,
  task: Task,
  deskname: string,
  taskText: string,
  deskIndex: number,
  taskIndex: number,
  onClickRemoveTask: (deskIndex: number, taskIndex: number) => void,
  onSubmitChangeTaskDescription: (value: string, deskIndex: number, taskIndex: number) => void,
  onSubmitAddNewComment: (author: string, value: string, deskIndex: number, taskIndex: number) => void,
  onSubmitChangeComment: (value: string, deskIndex: number, taskIndex: number, commentIndex: number) => void,
  onClickDeleteComment: (deskIndex: number, taskIndex: number, commentIndex: number) => void
}

function TaskElement({
  username,
  task, 
  deskname, 
  taskText, 
  deskIndex, 
  taskIndex, 
  onClickRemoveTask, 
  onSubmitChangeTaskDescription,
  onSubmitAddNewComment,
  onSubmitChangeComment,
  onClickDeleteComment
}: TaskElementProps) {
  const [taskPopupVisibility, setTaskPopupVisibility] = useState(false);

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onClickRemoveTask(deskIndex, taskIndex);
  }

  function onClickChangeTaskPopupVisibility() {
    setTaskPopupVisibility(prev => !prev);
  }

  return (
    <>
      <TaskItem onClick={onClickChangeTaskPopupVisibility}>
        <Container>
          <TaskText>{taskText}</TaskText>
          <DeleteTaskButton aria-label='delete task' onClick={onClickHandler}/>
        </Container>
        <CommentsCounter>comments: {task.comments.length}</CommentsCounter>
      </TaskItem>
      {taskPopupVisibility && <TaskPopup 
        username={username}
        deskIndex={deskIndex}
        taskIndex={taskIndex}
        deskname={deskname} 
        task={task} 
        onClickChangeTaskPopupVisibility={onClickChangeTaskPopupVisibility}
        onSubmitChangeTaskDescription={onSubmitChangeTaskDescription}
        onSubmitAddNewComment={onSubmitAddNewComment}
        onSubmitChangeComment={onSubmitChangeComment}
        onClickDeleteComment={onClickDeleteComment}
      />}
    </>
  )
}

export default TaskElement;

const TaskItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: 3px;
  border-bottom: 1px solid black;
`

const TaskText = styled.p`
  font-size: 18px;
`

const DeleteTaskButton = styled.button`
  width: 20px;
  height: 20px;
  position: relative;
  background-color: black;
  border: none;
  border-radius: 3px;

  &::before {
    content: "";
    width: 15px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: 9px;
    left: 3px;
    transform: rotate(-45deg);
  }

  &::after {
    content: "";
    width: 15px;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 9px;
    left: 3px;
    transform: rotate(45deg);
  }
`

const CommentsCounter = styled.p`
  text-align: right;
`