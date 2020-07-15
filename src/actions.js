import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

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

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id,
  };
}