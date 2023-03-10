import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "./features/items/reducer";
import { useSelector } from "react-redux";

import { selectAreItemsLoading } from "./features/loading/selectors";
/* import {
  selectAllUsers,
  usersFilterSelectors,
} from "./features/users/selectors"; */
import { Form } from "./components/Form";
import { formConfig } from "./components/Form/config";

function App() {
  /* const [userName, setUserName] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const allUsersSelected = useSelector(usersFilterSelectors.selectAllSelected);
  const allUsers = useSelector(selectAllUsers); */
  const areItemsLoading = useSelector(selectAreItemsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsActions.fetchItems());
  }, [dispatch]);

  if (areItemsLoading) return <p>Loading...</p>;
  return (
    <div className="App">
      <Form className="signup-form" formConfig={formConfig} />
    </div>
  );
}

export default App;
