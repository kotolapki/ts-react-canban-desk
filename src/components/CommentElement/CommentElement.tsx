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
  onClickDeleteComment: (deskIndex: number, taskIndex: number, commentIndex: number) => void,
  
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
  const [commentFormVisibility, setCommentFormVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(comment.text);

  function onClickShowCommentFormVisibility() {
    setCommentFormVisibility(true);
    setInputValue(comment.text);
  }

  function onClickHideCommentFormVisibility() {
    setCommentFormVisibility(false);
    setInputValue(comment.text);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitChangeComment(inputValue, deskIndex, taskIndex, commentIndex);
    setCommentFormVisibility(false);
  }

  function onClickDeleteCommentHandler() {
    onClickDeleteComment(deskIndex, taskIndex, commentIndex);
  }

  return (
    <CommentsItem onClick={(e) => e.stopPropagation()}>
      <CommentAuthor>{comment.author}</CommentAuthor>
      {commentFormVisibility ?
        (
          <ChangeCommentForm action='#' method='POST' onSubmit={onSubmitHandler}>
            <ChangeCommentLabel>Change comment</ChangeCommentLabel>
            <ChangeCommentInput
              name='changeComment' 
              placeholder='comment text' 
              autoComplete='off'
              type='text' 
              id='changeComment'
              value={inputValue}
              onChange={onChangeHandler}
            />
            <ChangeCommentBtnsWrapper>
              <CommentBtn type='submit'>Confirm</CommentBtn>
              <CommentBtn type='button' onClick={onClickHideCommentFormVisibility}>Cancel</CommentBtn>
            </ChangeCommentBtnsWrapper>
          </ChangeCommentForm>
          )
        :
        (<>
          <CommentText>{comment.text}</CommentText>
          {username === comment.author && 
            <CommentBtnsWrapper>
              <CommentBtn type='button' onClick={onClickShowCommentFormVisibility}>change</CommentBtn>
              <CommentBtn type='button' onClick={onClickDeleteCommentHandler}>delete</CommentBtn>
            </CommentBtnsWrapper>
          }
        </>)
      }
    </CommentsItem>
  )
}

export default CommentElement;

const CommentsItem = styled.li`
  margin-bottom: 10px;
`

const CommentAuthor = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 800;
`

const CommentText = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`

const CommentBtnsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const CommentBtn = styled.button`
  margin-right: 10px;
  padding: 3px 5px;
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
`

const ChangeCommentForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ChangeCommentLabel = styled.label`
  font-size: 0;
`

const ChangeCommentInput = styled.input`
  margin-bottom: 5px;
  padding: 3px;
  width: 100%;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  resize: none;
  box-sizing: border-box;
`

const ChangeCommentBtnsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`