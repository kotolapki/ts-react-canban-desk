export const SET_USERNAME = 'SET_USERNAME';
export const ADD_NEW_DESK = 'ADD_NEW_DESK';
export const UPDATE_DESK_TITLE = 'UPDATE_DESK_TITLE';
export const REMOVE_DESK = 'REMOVE_DESK';
export const REMOVE_ALL_DESKS = 'REMOVE_ALL_DESKS';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK_DESCRIPTION = 'UPDATE_TASK_DESCRIPTION';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

interface SetUsernameAction {
  type: typeof SET_USERNAME,
  payload: {
    username: string
  }
}

interface AddNewDeskAction {
  type: typeof ADD_NEW_DESK,
  payload: {
    title: string,
    id: string
  }
}

interface UpdateDeskTitleAction {
  type: typeof UPDATE_DESK_TITLE,
  payload: {
    title: string,
    id: string
  }
}

interface RemoveDeskAction {
  type: typeof REMOVE_DESK,
  payload: {
    deskId: string
  }
}

interface RemoveAllDesksAction {
  type: typeof REMOVE_ALL_DESKS
}

interface AddNewTaskAction {
  type: typeof ADD_NEW_TASK,
  payload: {
    title: string, 
    id: string, 
    description: string, 
    author: string, 
    deskId: string
  }
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK,
  payload: {
    id: string
  }
}

interface UpdateTaskDescriptionAction {
  type: typeof UPDATE_TASK_DESCRIPTION,
  payload: {
    description: string, 
    id: string
  }
}

interface AddNewCommentAction {
  type: typeof ADD_NEW_COMMENT,
  payload: {
    author: string, 
    text: string, 
    id: string, 
    taskId: string
  }
}

interface UpdateCommentAction {
  type: typeof UPDATE_COMMENT,
  payload: {
    text: string,
    id: string
  }
}

interface RemoveCommentAction {
  type: typeof REMOVE_COMMENT,
  payload: {
    id: string
  }
}

export type Action =
  | SetUsernameAction
  | AddNewDeskAction 
  | UpdateDeskTitleAction 
  | RemoveDeskAction 
  | RemoveAllDesksAction 
  | AddNewTaskAction 
  | RemoveTaskAction 
  | UpdateTaskDescriptionAction 
  | AddNewCommentAction 
  | UpdateCommentAction 
  | RemoveCommentAction;