import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

const INITIAL_STATE = { posts: [], comments: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case REMOVE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };

    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };

    case REMOVE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.id !== action.payload) };

    default:
      return state;
  }
}

export default rootReducer;