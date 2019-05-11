import {
      ADD_COMMENT,
     REMOVE_COMMENT
   } from '../actions/types';
   
   const initialState = {
     posts: [],
     post: null,
     loading: true,
     error: {}
   };
   
   export default function(state = initialState, action) {
     const { type, payload } = action;
   
     switch (type) {
      
       case ADD_COMMENT:
         return {
           ...state,
           post: { ...state.post, comments: payload },
           loading: false
         };
       case REMOVE_COMMENT:
         return {
           ...state,
           post: {
             ...state.post,
             comments: state.post.comments.filter(
               comment => comment._id !== payload
             )
           },
           loading: false
         };
       default:
         return state;
     }
   }
   