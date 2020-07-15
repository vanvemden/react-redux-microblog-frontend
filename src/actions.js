import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT, UPDATE_POST } from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id,
  };
}

export function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    payload: { postId, comment }
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id,
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    payload: post,
  };
}