export interface Comment {
  author: string,
  text: string,
  id: string,
  taskId: string
}

export interface Task {
  title: string,
  id: string,
  author: string,
  description: string,
  deskId: string
}

export interface Desk {
  title: string,
  id: string
}

export interface State {
  username: string,
  desks: Desk[],
  tasks: Task[],
  comments: Comment[]
}

export interface Action {
  type: string,
  payload: {
    username?: string,
    title?: string,
    id?: string,
    deskId?: string,
    description?: string,
    author?: string,
    text?: string,
    taskId?: string
  }
}