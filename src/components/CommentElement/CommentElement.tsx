import React, { useState } from 'react';
import styled from 'styled-components';
import {Comment} from '../../App';

interface CommentProps {
  comment: Comment,
  username: string,
  commentIndex: number,
  deskIndex: number,
  taskIndex: number,
  onSubmitChangeComment: (value: string, deskIndex: number, taskIndex: number, commentIndex: number) => void,
  onClickDeleteComment: (deskIndex: number, taskIndex: number, commentIndex: number) => void
}

function CommentElement({
  comment, 
  username, 
  commentIndex, 
  deskIndex, 
  taskIndex, 
  onSubmitChangeComment, 
  onClickDeleteComment,
}: CommentProps) {
  const [hasCommentClicked, setHasCommentClicked] = useState(false);
  const [inputValue, setInputValue] = useState(comment.text);

  function onClickShowCommentForm() {
    setHasCommentClicked(true);
    setInputValue(comment.text);
  }

  function onClickHideCommentForm() {
    setHasCommentClicked(false);
    setInputValue(comment.text);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitChangeComment(inputValue, deskIndex, taskIndex, commentIndex);
    setHasCommentClicked(false);
  }

  return (
    <Item onClick={(e) => e.stopPropagation()}>
      <Author>{comment.author}</Author>
      {hasCommentClicked ?
        (
          <Form onSubmit={onSubmit}>
            <Label>Change comment</Label>
            <Input
              name='changeComment' 
              placeholder='comment text' 
              autoComplete='off'
              type='text' 
              id='changeComment'
              value={inputValue}
              onChange={onChange}
            />
            <BtnsWrapper>
              <Button type='submit'>Confirm</Button>
              <Button type='button' onClick={onClickHideCommentForm}>Cancel</Button>
            </BtnsWrapper>
          </Form>
          )
        :
        (<>
          <Text>{comment.text}</Text>
          {username === comment.author && 
            <BtnsWrapper>
              <Button type='button' onClick={onClickShowCommentForm}>change</Button>
              <Button type='button' onClick={() => onClickDeleteComment(deskIndex, taskIndex, commentIndex)}>delete</Button>
            </BtnsWrapper>
          }
        </>)
      }
    </Item>
  )
}

export default CommentElement;

const Item = styled.li`
  margin-bottom: 10px;
`

const Author = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 800;
`

const Text = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`

const BtnsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const Button = styled.button`
  margin-right: 10px;
  padding: 3px 5px;
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0;
`

const Input = styled.input`
  margin-bottom: 5px;
  padding: 3px;
  width: 100%;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  resize: none;
  box-sizing: border-box;
`