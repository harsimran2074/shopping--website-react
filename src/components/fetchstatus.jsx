import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialItemAction } from "../store/storage";
import { fetchStatusAction } from "../store/storage";
const FetchStatus = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items")
      .then((response) => response.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(initialItemAction.initialItems(items));
      });
  }, []);
  return (
    <>
      
    </>
  );
};

export default FetchStatus;
