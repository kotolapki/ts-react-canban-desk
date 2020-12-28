import React, { useState, useEffect } from 'react';
import './assets/css/normalize.css';
import './assets/css/reset.css';
import './assets/css/fonts.css';
import './assets/css/common.css';
import './styles.css';
import styled from 'styled-components';
import getRandomId from './utils/getRandomId';
import Autorization from './components/Autorization';
import Header from './components/Header';
import Desk from './components/Desk';

export interface Comment {
  author: string,
  text: string,
  id: number
}
export interface Task {
  title: string,
  id: number,
  author: string,
  description: string,
  comments: Comment[]
}

export interface TasksDesk {
  title: string,
  id: number,
  tasks: Task[]
}

function App() {
  const [autorizationStatus, setAutorizationStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [desks, setDesks] = useState<TasksDesk[]>([]);

  useEffect(() => {
    if (localStorage.getItem('lastUser')) {
      setUsername(localStorage.getItem('lastUser') || '');
      setAutorizationStatus(true);
    }

    if (localStorage.getItem('desks')) {
      const parsedDesks = JSON.parse(localStorage.getItem('desks') || '');
      setDesks(parsedDesks);
    }
  }, []);

  function handleChangeUser(username: string) {
    localStorage.setItem('lastUser', username);
    setAutorizationStatus(true);
    setUsername(username);
  }

  function handleChangeAutorizationStatus() {
    setAutorizationStatus(false);
  }

  function onSubmitAddNewDesk(deskname: string) {
    const newDesk = {title: deskname, id: getRandomId(), tasks:[]};

    if (localStorage.getItem('desks')) {
      const parsedDesks = JSON.parse(localStorage.getItem('desks') || '');
      parsedDesks.push(newDesk);
      localStorage.setItem('desks', JSON.stringify(parsedDesks)); 
    } else {
      const desks = [newDesk];
      localStorage.setItem('desks', JSON.stringify(desks));
    }

    setDesks(prev => [...prev, newDesk]);
  }

  function onClickRemoveAllDesks() {
    localStorage.removeItem('desks');
    setDesks([]);
  }

  function onClickRemoveDesk(index: number) {
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks.splice(index, 1);
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onSubmitChangeDeskHeader(value: string, index: number) {
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks[index]['title'] = value;
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onSubmitAddNewTask(value: string, index: number, username: string) {
    const newTask = {title: value, id: getRandomId(), description: '', author: username, comments: []};
    const changedDesks: TasksDesk[] = [...desks];

    if (changedDesks[index].tasks) {
      changedDesks[index].tasks.push(newTask);
    } else {
      changedDesks[index].tasks = [newTask];
    }
    
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onClickRemoveTask(deskIndex: number, taskIndex: number) {
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks[deskIndex].tasks.splice(taskIndex, 1);
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onSubmitChangeTaskDescription(value: string, deskIndex: number, taskIndex: number) {
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks[deskIndex].tasks[taskIndex].description = value;
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onSubmitAddNewComment(author: string, value: string, deskIndex: number, taskIndex: number) {
    const newComment = {author: author, text: value, id: getRandomId()}
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks[deskIndex].tasks[taskIndex].comments.push(newComment);
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onSubmitChangeComment(value: string, deskIndex: number, taskIndex: number, commentIndex: number) {
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks[deskIndex].tasks[taskIndex].comments[commentIndex].text = value;
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  function onClickDeleteComment(deskIndex: number, taskIndex: number, commentIndex: number) {
    const changedDesks: TasksDesk[] = [...desks];
    changedDesks[deskIndex].tasks[taskIndex].comments.splice(commentIndex, 1);
    localStorage.setItem('desks', JSON.stringify(changedDesks));
    setDesks(changedDesks);
  }

  return (
    <Container>
      <HiddenHeader>Canban desk</HiddenHeader>
      {autorizationStatus ? (
        <>
          <Header 
            username={username} 
            handleChangeAutorizationStatus={handleChangeAutorizationStatus} 
            onSubmit={onSubmitAddNewDesk}
            onClickRemoveAllDesks={onClickRemoveAllDesks}
          />
          <DesksContainer>
            {desks.map((desk, index) => {
              return (
                <Desk 
                  key={desk.id} 
                  username={username}
                  desk={desk}
                  deskIndex={index} 
                  onClickRemoveDesk={onClickRemoveDesk} 
                  onSubmitChangeDeskHeader={onSubmitChangeDeskHeader}
                  onSubmitAddNewTask={onSubmitAddNewTask}
                  onClickRemoveTask={onClickRemoveTask}
                  onSubmitChangeTaskDescription={onSubmitChangeTaskDescription}
                  onSubmitAddNewComment={onSubmitAddNewComment}
                  onSubmitChangeComment={onSubmitChangeComment}
                  onClickDeleteComment={onClickDeleteComment}
                />
              )
            })}
          </DesksContainer>
        </> 
      ) : (
        <Autorization onSubmitHandler={handleChangeUser}/> 
      )}
    </Container>
  )
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  width: 1424px;
`

const HiddenHeader = styled.h1`
  font-size: 0;
`

const DesksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`