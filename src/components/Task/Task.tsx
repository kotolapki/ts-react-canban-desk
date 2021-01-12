import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteTask } from '../../redux/actions';
import { Task as TaskType, State} from '../../types';
import TaskPopup from '../TaskPopup';

interface TaskProps {
  task: TaskType,
  deskname: string
}

function Task({
  task, 
  deskname
}: TaskProps) {
  const comments = useSelector((state: State) => state.comments).filter(comment => comment.taskId === task.id);
  const dispatch = useDispatch();
  const [hasTaskClicked, setHasTaskClicked] = useState(false);

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    dispatch(deleteTask(task.id));
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
        deskname={deskname} 
        task={task}
        onClickChangeTaskPopupVisibility={onClickChangeTaskPopupVisibility}
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