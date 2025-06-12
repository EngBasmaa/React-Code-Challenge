import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkips } from "../features/skips/skipSlice";

export const useSkips = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.skips);

  useEffect(
    () => {
      dispatch(getSkips());
    },
    [dispatch]
  );

  return { data, loading, error };
};
