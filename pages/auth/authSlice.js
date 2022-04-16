import {createSlice} from '@reduxjs/toolkit';
import Cookies from 'js-cookie'

const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoggedIn:null, userId: null, name: null, email: null, picture: null},
  reducers: {
    setUser: (
      state,
      {
        payload: {isLoggedIn=null, userId = '',name = '', email='', picture = ''},
      },
    ) => {
      if(isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
      }
      if (userId) {
        state.userId = userId;
      }
      if (name) {
        state.name = name;
      }
      if (email) {
        state.email = email;
      }
      if (picture) {
        state.userImage = userImage;
      }
    },
    removeUser: state => {
      state.isLoggedIn= false
      state.userId = '';
      state.name = '';
      state.email = '';
      state.picture = '';
    },
  },
});

export const {setUser, removeUser} = authSlice.actions;

export const logout = () => async dispatch => {
  Cookies.remove('accessToken', { path: '/' })
  Cookies.remove('refreshToken', {path: '/'})
  dispatch(removeUser());
};

export default authSlice.reducer;
