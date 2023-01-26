import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  User,
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export interface AuthState {
  user: User;
  isUserVerifyLoading: boolean;
}

const initialState: AuthState = {
  user: {} as User,
  isUserVerifyLoading: true,
};

export const firebaseUserLogin = createAsyncThunk<
  User,
  { email: string; password: string }
>("Firebase/Login", async (data, { rejectWithValue }) => {
  try {
    const response = await setPersistence(auth, browserLocalPersistence).then(
      async () => {
        try {
          const response = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );

          return response.user;
        } catch (error) {
          return rejectWithValue({});
        }
      }
    );
    return response;
  } catch (error) {
    return rejectWithValue({});
  }
});

export const firebaseUpdateUserToken = createAsyncThunk<User, User>(
  "Firebase/UpdateUser",
  async (data, { rejectWithValue }) => {
    try {
      return data;
    } catch (error) {
      return rejectWithValue({});
    }
  }
);

export const firebaseUserLogout = createAsyncThunk<void, void>(
  "Firebase/Logout",
  (data, { rejectWithValue }) => {
    try {
      return signOut(auth);
    } catch (error) {
      return rejectWithValue({});
    }
  }
);

const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsUserVerifyLoading: (state, action) => {
      state.isUserVerifyLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(firebaseUserLogin.pending, (state, action) => {
        state.isUserVerifyLoading = true;
      })
      .addCase(firebaseUserLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isUserVerifyLoading = false;
      })
      .addCase(firebaseUserLogin.rejected, (state, action) => {
        state.isUserVerifyLoading = false;
      })
      .addCase(firebaseUpdateUserToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isUserVerifyLoading = false;
      });
  },
});

export const { setIsUserVerifyLoading } = actions;

export default reducer;
