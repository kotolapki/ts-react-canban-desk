import { State } from './../types';

export function selectState(state: State) {
  return state;
}

export function selectUsername(state: State) {
  return state.username;
}

export function selectTasksByDeskId(deskId: string) {
  return (state: State) => state.tasks.filter(task => task.deskId === deskId);
}

export function selectCommentsByTaskId(taskId: string) {
  return (state: State) => state.comments.filter(comment => comment.taskId === taskId);
}