import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeComment, deleteComment } from '../../redux/actions';
import { Comment as CommentType, State } from '../../types';

interface CommentProps {
  comment: CommentType
}

function Comment({
  comment
}: CommentProps) {
  const username = useSelector((state: State) => state.username);
  const dispatch = useDispatch();
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
    dispatch(changeComment(inputValue, comment.id));
    setHasCommentClicked(false);
  }

  return (
    <Root onClick={(e) => e.stopPropagation()}>
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
              <Button type='button' onClick={() => dispatch(deleteComment(comment.id))}>delete</Button>
            </BtnsWrapper>
          }
        </>)
      }
    </Root>
  )
}

export default Comment;

const Root = styled.li`
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