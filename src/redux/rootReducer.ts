import { State, Desk, Task, Comment } from './../types';
import { Action } from './types';
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

const initialStateJSON = localStorage.getItem('state');
const initialState:State = {username:'', desks: [], tasks: [], comments: []};

export const rootReducer = (state = initialStateJSON ? JSON.parse(initialStateJSON) : initialState, action: Action): State => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.payload.username}
    case ADD_NEW_DESK:
      return {...state, desks: [...state.desks, action.payload]}
    case UPDATE_DESK_TITLE:
      return {...state, 
        desks: state.desks.map((desk: Desk) => {
          if (desk.id === action.payload.id) {
            return {...desk, title: action.payload.title};
          }
  
          return desk;
        })
      }
    case REMOVE_DESK: {
      return {...state, desks: state.desks.filter((desk: Desk) => desk.id !== action.payload.deskId)}
    }
    case REMOVE_ALL_DESKS: 
      return initialState;
    case ADD_NEW_TASK:
      return {...state, tasks: [...state.tasks, action.payload]}
    case REMOVE_TASK:
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
    case UPDATE_COMMENT:
      return {...state,
        comments: state.comments.map((comment: Comment) => {
          if (comment.id === action.payload.id) {
            return {...comment, text: action.payload.text};
          }
  
          return comment;
        })
      }
    case REMOVE_COMMENT:
      return {...state, comments: state.comments.filter((comment: Comment) => comment.id !== action.payload.id)}
    default: return state;
  }
};