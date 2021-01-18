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