import axios from 'axios';
import {
   ADD_COMMENT,
  REMOVE_COMMENT
} from './types';


// Add comment
export const addComment = (postId, formData) => async dispatch => {
     const config = {
       headers: {
         'Content-Type': 'application/json'
       }
     };
   
     try {
       const res = await axios.post(
         `/api/posts/comment/${postId}`,
         formData,
         config
       );
   
       dispatch({
         type: ADD_COMMENT,
         payload: res.data
       });
   
       dispatch(setAlert('Comment Added', 'success'));
     } catch (err) {
       dispatch({
         type: POST_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status }
       });
     }
   };
   
   // Delete comment
   export const deleteComment = (postId, commentId) => async dispatch => {
     try {
       const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
   
       dispatch({
         type: REMOVE_COMMENT,
         payload: commentId
       });
   
       dispatch(setAlert('Comment Removed', 'success'));
     } catch (err) {
       dispatch({
         type: POST_ERROR,
         payload: { msg: err.response.statusText, status: err.response.status }
       });
     }
   };
   