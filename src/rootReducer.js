import { LOAD_POSTS, LOAD_POST, ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT, UPDATE_POST } from "./actionTypes";

const INITIAL_STATE = { posts: {}, titles: [] };

function rootReducer(state = INITIAL_STATE, action) {
  let postId;
  let tempArr;

  switch (action.type) {

    case LOAD_POSTS:
      return { ...state, titles: [...action.payload] }

    case LOAD_POST:
      return { ...state, posts: { ...state.posts, [action.payload.id]: { ...action.payload } } }

    case ADD_POST:
      return {
        ...state, posts: {
          ...state.posts, [action.payload.id]: { ...action.payload }
        }
      };

    case REMOVE_POST:
      const tempPosts = { ...state.posts };
      delete tempPosts[action.payload];
      return { ...state, posts: tempPosts };

    case UPDATE_POST:
      return {
        ...state, posts: {
          ...state.posts, [action.payload.id]: { ...action.payload }
        }
      };

    case ADD_COMMENT:
      postId = action.payload.postId;
      let postObj = state.posts[postId];
      let commentsArr = state.posts[postId].comments;
      let newComment = action.payload.comment;
      return {
        ...state, posts: {
          ...state.posts, [postId]: {
            ...postObj, comments: [...commentsArr, newComment]
          }
        }
      }

    case REMOVE_COMMENT:
      let commentId = action.payload.commentId;
      postId = action.payload.postId;
      // How can we only get the comments by postId and then overwrite
      const tempComments = state.posts[postId].comments.filter(c => c.id !== commentId)
      return {
        ...state, posts: {
          ...state.posts, [postId]: {
            ...state.posts[postId], comments: [...tempComments]
          }
        }
      }

    default:
      return state;
  }
}

export default rootReducer;



