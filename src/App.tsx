import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { usersActions } from "./features/users/reducer";
import { itemsActions } from "./features/items/reducer";
import { useSelector } from "react-redux";
import {
  usersFilterSelectors,
  selectAllUsers,
} from "./features/users/selectors";
import { selectAreItemsLoading } from "./features/loading/selectors";

function App() {
  const dispatch = useDispatch();
  const areItemsLoading = useSelector(selectAreItemsLoading);

  useEffect(() => {
    dispatch(itemsActions.fetchItems());
  }, [dispatch]);

  if (areItemsLoading) return <p>Loading...</p>;
  return <div className="App"></div>;
}

export default App;
