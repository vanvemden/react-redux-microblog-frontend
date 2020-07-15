import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT, UPDATE_POST } from "./actionTypes";

const INITIAL_STATE = { posts: {}, comments: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: { ...state.posts, ...action.payload } };

    case REMOVE_POST:
      const tempPosts = { ...state.posts };
      delete tempPosts[action.payload];
      return { ...state, posts: tempPosts };

    case UPDATE_POST:
      return { ...state, posts: { ...state.posts, ...action.payload } };

    case ADD_COMMENT:
      let postId = action.payload.postId;
      let comment = action.payload.comment;
      let tempArr = { ...state.comments };
      tempArr[postId] ? tempArr[postId].push(comment) : tempArr[postId] = [comment];
      return { ...state, comments: tempArr };

    case REMOVE_COMMENT:
      const tempComments = { ...state.comments };
      delete tempComments[action.payload];
      return { ...state, comments: tempComments };

    default:
      return state;
  }
}

export default rootReducer;