import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Task, Comment as CommentType } from '../../types';
import TaskPopupDescriptionForm from '../TaskPopupDescriptionForm';
import TaskPopupCommentForm from '../TaskPopupCommentForm';
import Comment from '../Comment';

interface TaskPopupProps {
  username: string,
  deskname: string,
  task: Task,
  comments: CommentType[],
  onClickChangeTaskPopupVisibility: () => void,
  onSubmitChangeTaskDescription: (description: string, id: string) => void,
  onSubmitAddNewComment: (author: string, text: string, id: string) => void,
  onSubmitChangeComment: (text: string, id: string) => void,
  onClickDeleteComment: (id: string) => void
}

function TaskPopup({
  username, 
  deskname, 
  task, 
  comments,
  onClickChangeTaskPopupVisibility, 
  onSubmitChangeTaskDescription,
  onSubmitAddNewComment,
  onSubmitChangeComment,
  onClickDeleteComment
}: TaskPopupProps) {
  const [hasTaskDescriptionClicked, setHasTaskDescriptionClicked] = useState(false);
  const [hasCommentFormFocused, setHasCommentFormFocused] = useState(false);

  useEffect(() => {
    function handleWindowKeyPress(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClickChangeTaskPopupVisibility();
      }
    }

    window.addEventListener('keydown', handleWindowKeyPress);
    return () => window.removeEventListener('keydown', handleWindowKeyPress);
  }, [onClickChangeTaskPopupVisibility])

  useEffect(() => {
    function handleWindowClick(e: MouseEvent) {
      setHasTaskDescriptionClicked(false);
    }

    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  }, [hasTaskDescriptionClicked]);

  function onClickChangeTaskDescriptionFormVisibility() {
    setHasTaskDescriptionClicked(prev => !prev);
  }

  function onFocusShowCommentBtnsWrapper() {
    setHasCommentFormFocused(true);
  }

  function hideCommentBtnsWrapper() {
    setHasCommentFormFocused(false);
  }

  function onClick(e: React.MouseEvent) {
    const target = e.target as Element;

    if (target.id === 'overlay' || target.id === 'hidePopupBtn') {
      onClickChangeTaskPopupVisibility();
    }

    setHasCommentFormFocused(false);
  }

  function handleDescriptionClick(e) {
    e.stopPropagation();
    onClickChangeTaskDescriptionFormVisibility();
  }

  return (
    <TaskPopupOverlay id='overlay' onClick={onClick}>
      <TaskPopupContainer>
        <TaskPopupHeader>
          <TaskName>{task.title}</TaskName>
          <CloseTaskPopupBtn type='button' aria-label='hide task window' id='hidePopupBtn'/>
        </TaskPopupHeader>
        <DeskName>В доске: {deskname}</DeskName>
        <TaskAuthor>Автор: {task.author}</TaskAuthor>
        <TaskDescriptionHeader>Task description</TaskDescriptionHeader>
        {hasTaskDescriptionClicked ?
          (<TaskPopupDescriptionForm
            onSubmitChangeTaskDescription={onSubmitChangeTaskDescription}
            onClickChangeTaskDescriptionFormVisibility={onClickChangeTaskDescriptionFormVisibility}
            initialValue={task.description}
            taskId={task.id}
          />)
          :
          (<TaskDescription onClick={handleDescriptionClick}>{task.description? task.description : 'Add task description'}</TaskDescription>)
        }
        <TaskPopupCommentForm
          username={username}
          taskId={task.id}
          onSubmitAddNewComment={onSubmitAddNewComment}
          onFocusShowCommentBtnsWrapper={onFocusShowCommentBtnsWrapper}
          hasCommentFormFocused={hasCommentFormFocused}
          hideCommentBtnsWrapper={hideCommentBtnsWrapper}
        />
        <ul>
          {comments.length >= 1 && comments.map((comment) => 
            <Comment 
              key={comment.id}
              comment={comment}
              username={username}
              onSubmitChangeComment={onSubmitChangeComment}
              onClickDeleteComment={onClickDeleteComment}
            />)
          }
        </ul>
      </TaskPopupContainer>
    </TaskPopupOverlay>
  )
}

export default TaskPopup;

const TaskPopupOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
`

const TaskPopupContainer = styled.div`
  padding: 20px;
  width: 500px;
  position: absolute;
  z-index: 2;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`

const TaskPopupHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

const TaskName = styled.h3`
  font-size: 26px;
  font-weight: 800;
`

const CloseTaskPopupBtn = styled.button`
  margin-top: 5px;
  width: 20px;
  height: 20px;
  position: relative;
  background-color: black;
  border: none;
  border-radius: 3px;

  &::before {
    content: '';
    width: 15px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: 9px;
    left: 3px;
    transform: rotate(-45deg);
  }

  &::after {
    content: '';
    width: 15px;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 9px;
    left: 3px;
    transform: rotate(45deg);
  }
`

const DeskName = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`

const TaskAuthor = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`

const TaskDescriptionHeader = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`

const TaskDescription = styled.p`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 18px;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }
`