import { CREATE, FETCH_ALL, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
}

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, postData);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.response.data);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
}
