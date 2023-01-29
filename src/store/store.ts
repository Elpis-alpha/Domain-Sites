import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slice/userSlice";

import messagesSlice from "./slice/messagesSlice";

import displaySlice from "./slice/displaySlice";

import querySlice from "./slice/querySlice";


const store = configureStore({

  reducer: {

    user: userSlice,

    messages: messagesSlice,

    display: displaySlice,

    query: querySlice,

  }

});


export default store;