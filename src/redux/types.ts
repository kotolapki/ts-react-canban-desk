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

export interface SetUsernameAction {
  type: typeof SET_USERNAME,
  payload: {
    username: string
  }
}

export interface AddNewDeskAction {
  type: typeof ADD_NEW_DESK,
  payload: {
    title: string,
    id: string
  }
}

export interface UpdateDeskTitleAction {
  type: typeof UPDATE_DESK_TITLE,
  payload: {
    title: string,
    id: string
  }
}

export interface RemoveDeskAction {
  type: typeof REMOVE_DESK,
  payload: {
    deskId: string
  }
}

export interface RemoveAllDesksAction {
  type: typeof REMOVE_ALL_DESKS
}

export interface AddNewTaskAction {
  type: typeof ADD_NEW_TASK,
  payload: {
    title: string, 
    id: string, 
    description: string, 
    author: string, 
    deskId: string
  }
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK,
  payload: {
    id: string
  }
}

export interface UpdateTaskDescriptionAction {
  type: typeof UPDATE_TASK_DESCRIPTION,
  payload: {
    description: string, 
    id: string
  }
}

export interface AddNewCommentAction {
  type: typeof ADD_NEW_COMMENT,
  payload: {
    author: string, 
    text: string, 
    id: string, 
    taskId: string
  }
}

export interface UpdateCommentAction {
  type: typeof UPDATE_COMMENT,
  payload: {
    text: string,
    id: string
  }
}

export interface RemoveCommentAction {
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