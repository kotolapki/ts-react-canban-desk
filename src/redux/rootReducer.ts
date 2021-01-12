import { State, Desk, Task, Comment, Action } from './../types';
import { 
  SET_USERNAME, 
  ADD_NEW_DESK, 
  UPDATE_DESKNAME, 
  REMOVE_DESK, 
  REMOVE_ALL_DESKS, 
  ADD_NEW_TASK, 
  DELETE_TASK, 
  UPDATE_TASK_DESCRIPTION, 
  ADD_NEW_COMMENT, 
  CHANGE_COMMENT, 
  DELETE_COMMENT 
} from './types';

const initialStateJSON = localStorage.getItem('state');
const initialState:State = {username:'', desks: [], tasks: [], comments: []};

export const rootReducer = (state = initialStateJSON ? JSON.parse(initialStateJSON) : initialState, action: Action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.payload.username}
    case ADD_NEW_DESK:
      return {...state, desks: [...state.desks, action.payload]}
    case UPDATE_DESKNAME:
      return {...state, 
        desks: state.desks.map((desk: Desk) => {
          if (desk.id === action.payload.id) {
            return {...desk, title: action.payload.title};
          }
  
          return desk;
        })
      }
    case REMOVE_DESK: {
      return {...state, desks: state.desks.filter((desk: Desk) => desk.id !== action.payload.id)}
    }
    case REMOVE_ALL_DESKS: 
      return {initialState}
    case ADD_NEW_TASK:
      return {...state, tasks: [...state.tasks, action.payload]}
    case DELETE_TASK:
      return {...state, tasks: state.tasks.filter((task: Task) => task.id !== action.payload.id)}
    case UPDATE_TASK_DESCRIPTION:
      return {...state,
        tasks: state.tasks.map((task: Task) => {
          if (task.id === action.payload.id) {
            return {...task, description: action.payload.description};
          }
  
          return task;
        })
      }
    case ADD_NEW_COMMENT:
      return {...state, comments: [...state.comments, action.payload]}
    case CHANGE_COMMENT:
      return {...state,
        comments: state.comments.map((comment: Comment) => {
          if (comment.id === action.payload.id) {
            return {...comment, text: action.payload.text};
          }
  
          return comment;
        })
      }
    case DELETE_COMMENT:
      return {...state, comments: state.comments.filter((comment: Comment) => comment.id !== action.payload.id)}
    default: return state;
  }
};