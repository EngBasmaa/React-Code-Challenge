import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSkips } from "./skipAPI";

export const getSkips = createAsyncThunk("skips/getSkips", async () => {
  const response = await fetchSkips();
  return response.data;
});

const skipSlice = createSlice({
  name: "skips",
  initialState: {
    skips: [],
    status: "idle"
  },
  extraReducers: builder => {
    builder
      .addCase(getSkips.pending, state => {
        state.status = "loading";
      })
      .addCase(getSkips.fulfilled, (state, action) => {
        state.skips = action.payload;
        state.status = "succeeded";
      })
      .addCase(getSkips.rejected, state => {
        state.status = "failed";
      });
  }
});

export default skipSlice.reducer;
