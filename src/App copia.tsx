import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { usersActions } from "./features/users/reducer";
import { itemsActions } from "./features/items/reducer";
import { useSelector } from "react-redux";
import {
  usersFilterSelectors,
  selectAllUsers,
} from "./features/users/selectors";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const allUsersSelected = useSelector(usersFilterSelectors.selectAllSelected);
  const allUsers = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(usersActions.addUser(userName));
        }}
      >
        <label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Add user</button>
        </label>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(itemsActions.addItem(itemName));
        }}
      >
        <label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button type="submit">Add item</button>
        </label>
      </form>
      <button onClick={() => dispatch(usersActions.selectAll(true))}>
        Select all users
      </button>
      <button onClick={() => dispatch(itemsActions.selectAll(true))}>
        Select all items
      </button>
      {allUsersSelected && <p>All users selected!</p>}
      {allUsers.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
}

export default App;
