import { 
  SET_USERNAME, 
  ADD_NEW_DESK, 
  UPDATE_DESK_TITLE, 
  REMOVE_DESK, 
  REMOVE_ALL_DESKS, 
  ADD_NEW_TASK, 
  REMOVE_TASK, 
  UPDATE_TASK_DESCRIPTION, 
  ADD_NEW_COMMENT, 
  UPDATE_COMMENT, 
  REMOVE_COMMENT 
} from './types';
import { v4 as uuidv4} from 'uuid';

export function setUsername(username: string) {
  return {
    type: SET_USERNAME,
    payload: {
      username
    }
  }
}

export function addNewDesk(title: string) {
  return {
    type: ADD_NEW_DESK,
    payload: {
      title,
      id: uuidv4()
    }
  }
}

export function updateDeskTitle(title: string, id: string) {
  return {
    type: UPDATE_DESK_TITLE,
    payload: {
      title,
      id
    }
  }
}

export function removeDesk(deskId: string) {
  return {
    type: REMOVE_DESK,
    payload: {
      deskId
    }
  }
}

export function removeAllDesks() {
  return {
    type: REMOVE_ALL_DESKS
  }
}

export function addNewTask(title: string, deskId: string, author: string) {
  return {
    type: ADD_NEW_TASK,
    payload: {
      title, 
      id: uuidv4(), 
      description: '', 
      author, 
      deskId
    }
  }
}

export function removeTask(id: string) {
  return {
    type: REMOVE_TASK,
    payload: {
      id
    }
  }
}

export function updateTaskDescription(description: string, id: string) {
  return {
    type: UPDATE_TASK_DESCRIPTION,
    payload: {
      description, 
      id
    }
  }
}

export function addNewComment(author: string, text: string, id: string) {
  return {
    type: ADD_NEW_COMMENT,
    payload: {
      author, 
      text, 
      id: uuidv4(), 
      taskId: id
    }
  }
}

export function updateComment(text: string, id: string) {
  return {
    type: UPDATE_COMMENT,
    payload: {
      text,
      id
    }
  }
}

export function removeComment(id: string) {
  return {
    type: REMOVE_COMMENT,
    payload: {
      id
    }
  }
}