import React, { useState, useEffect } from 'react';
import './assets/css/normalize.css';
import './assets/css/reset.css';
import './assets/css/fonts.css';
import './assets/css/common.css';
import './styles.css';
import styled from 'styled-components';
import { v4 as uuidv4} from 'uuid';
import Autorization from './components/Autorization';
import Header from './components/Header';
import Desk from './components/Desk';
import { State } from './types';
const initialUsername = localStorage.getItem('lastUser') || '';
const initialStateJSON = localStorage.getItem('state');
const initialState = {desks: [], tasks: [], comments: []};

function App() {
  const [username, setUsername] = useState(initialUsername);
  const [state, setState] = useState<State>(initialStateJSON ? JSON.parse(initialStateJSON) : initialState);
  const isAuthorized = Boolean(username);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  function handleChangeUser(username: string) {
    localStorage.setItem('lastUser', username);
    setUsername(username);
  }

  function handleSignOut() {
    setUsername('');
  }

  function onSubmitAddNewDesk(title: string) {
    const newDesk = {title, id: uuidv4()};
    setState({
      ...state, 
      desks: [...state.desks, newDesk]
    });
  }

  function onClickRemoveAllDesks() {
    setState(initialState);
  }

  function onClickRemoveDesk(id: string) {
    setState({
      ...state, 
      desks: state.desks.filter(desk => desk.id !== id)
    });
  }

  function onSubmitChangeDeskHeader(title: string, id: string) {  //спросить!
    const changedDesks = [...state.desks];

    changedDesks.forEach(desk => {
      if (desk.id === id) {
        desk.title = title;
      }
    });

    setState({
      ...state, 
      desks: changedDesks
    });
  }

  function onSubmitAddNewTask(title: string, id: string, username: string) {
    const newTask = {title, id: uuidv4(), description: '', author: username, deskId: id};
    
    setState({
      ...state, 
      tasks: [...state.tasks, newTask]
    });
  }

  function onClickRemoveTask(id: string) {
    setState({
      ...state, 
      tasks: state.tasks.filter(task => task.id !== id)
    });
  }

  function onSubmitChangeTaskDescription(description: string, id: string) {  //спросить!
    const changedTasks = [...state.tasks];
    
    changedTasks.forEach(task => {
      if (task.id === id) {
        task.description = description;
      }
    });

    setState({
      ...state,
      tasks: changedTasks
    });
  }

  function onSubmitAddNewComment(author: string, text: string, id: string) {
    const newComment = {author: author, text, id: uuidv4(), taskId: id}
    
    setState({
      ...state,
      comments: [...state.comments, newComment]
    });
  }

  function onSubmitChangeComment(text: string, id: string) { //спросить!
    const changedComments = [...state.comments];

    changedComments.forEach(comment => {
      if (comment.id === id) {
        comment.text = text;
      }
    });
    
    setState({
      ...state,
      comments: changedComments
    });
  }

  function onClickDeleteComment(id: string) {
    setState({
      ...state,
      comments: state.comments.filter(comment => comment.id !== id)
    });
  }

  return (
    <Container>
      <HiddenHeader>Canban desk</HiddenHeader>
      {isAuthorized ? (
        <>
          <Header 
            username={username} 
            handleSignOut={handleSignOut} 
            onSubmitAddNewDesk={onSubmitAddNewDesk}
            onClickRemoveAllDesks={onClickRemoveAllDesks}
          />
          <DesksContainer>
            {state.desks.map((desk) => {
              return (
                <Desk 
                  key={desk.id}
                  title={desk.title} 
                  username={username}
                  tasks={state.tasks.filter(task => task.deskId === desk.id)}
                  comments={state.comments}
                  deskId={desk.id} 
                  onClickRemoveDesk={onClickRemoveDesk} 
                  onSubmitChangeDeskHeader={onSubmitChangeDeskHeader}
                  onSubmitAddNewTask={onSubmitAddNewTask}
                  onClickRemoveTask={onClickRemoveTask}
                  onSubmitChangeTaskDescription={onSubmitChangeTaskDescription}
                  onSubmitAddNewComment={onSubmitAddNewComment}
                  onSubmitChangeComment={onSubmitChangeComment}
                  onClickDeleteComment={onClickDeleteComment} 
                  // отфильтровать таски по id доски и комменты по id таски
                />
              )
            })}
          </DesksContainer>
        </> 
      ) : (
        <Autorization handleChangeUser={handleChangeUser}/> 
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