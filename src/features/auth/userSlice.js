import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API call
import { graphpQLAPI } from "../../services/api";

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (userInput, thunkAPI) => {
    return await graphpQLAPI(userInput)
      .then((response) => {
        const data = response.data;

        if (data.errors?.length > 0) {
          console.log(data.errors);
          return thunkAPI.rejectWithValue(data.errors);
        }

        return {
          data: data.data.login,
        };
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    loading: false,
    data: null,
    error: null,
    dataStructure: null,
  },
  reducers: {},
  extraReducers: {
    [LoginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data.user;
      state.isLogin = true;
      state.error = null;
      window.sessionStorage.setItem("token", `Bearer ${action.payload.data.token}`);
    },
    [LoginUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [LoginUser.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default userSlice.reducer;
