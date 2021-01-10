import React, { useState } from 'react';
import styled from 'styled-components';
import { Task as TaskType, Comment} from '../../types';
import TaskPopup from '../TaskPopup';

interface TaskProps {
  username: string,
  task: TaskType,
  deskname: string,
  comments: Comment[],
  onClickRemoveTask: (id: string) => void,
  onSubmitChangeTaskDescription: (description: string, id: string) => void,
  onSubmitAddNewComment: (author: string, text: string, id: string) => void,
  onSubmitChangeComment: (text: string, id: string) => void,
  onClickDeleteComment: (id: string) => void
}

function Task({
  username,
  task, 
  deskname, 
  comments, 
  onClickRemoveTask, 
  onSubmitChangeTaskDescription,
  onSubmitAddNewComment,
  onSubmitChangeComment,
  onClickDeleteComment
}: TaskProps) {
  const [hasTaskClicked, setHasTaskClicked] = useState(false);

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onClickRemoveTask(task.id);
  }

  function onClickChangeTaskPopupVisibility() {
    setHasTaskClicked(prev => !prev);
  }

  return (
    <>
      <Root onClick={onClickChangeTaskPopupVisibility}>
        <Container>
          <Text>{task.title}</Text>
          <DeleteTaskButton aria-label='delete task' onClick={onClick}/>
        </Container>
        <CommentsCounter>comments: {comments.length}</CommentsCounter>
      </Root>
      {hasTaskClicked && <TaskPopup 
        username={username}
        deskname={deskname} 
        task={task}
        comments={comments}
        onClickChangeTaskPopupVisibility={onClickChangeTaskPopupVisibility}
        onSubmitChangeTaskDescription={onSubmitChangeTaskDescription}
        onSubmitAddNewComment={onSubmitAddNewComment}
        onSubmitChangeComment={onSubmitChangeComment}
        onClickDeleteComment={onClickDeleteComment}
      />}
    </>
  )
}

export default Task;

const Root= styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-right-radius: 3px;
  border-bottom: 1px solid black;
`

const Text = styled.p`
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