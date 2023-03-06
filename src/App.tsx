import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { itemsActions } from "./features/items/reducer";
import { useSelector } from "react-redux";

import { selectAreItemsLoading } from "./features/loading/selectors";
import {
  selectAllUsers,
  usersFilterSelectors,
} from "./features/users/selectors";
import { usersActions } from "./features/users/reducer";
import SignupForm from "./components/SignupForm";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const allUsersSelected = useSelector(usersFilterSelectors.selectAllSelected);
  const allUsers = useSelector(selectAllUsers);
  const areItemsLoading = useSelector(selectAreItemsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsActions.fetchItems());
  }, [dispatch]);

  if (areItemsLoading) return <p>Loading...</p>;
  return (
    <div className="App">
      <SignupForm />
    </div>
  );
}

export default App;
