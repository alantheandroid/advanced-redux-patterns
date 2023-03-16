import React, { useEffect } from "react";
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
import { FormValues } from "./components/Form/types";

function App() {
  /* const [userName, setUserName] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const allUsersSelected = useSelector(usersFilterSelectors.selectAllSelected);
  const allUsers = useSelector(selectAllUsers); */
  const areItemsLoading = useSelector(selectAreItemsLoading);
  const dispatch = useDispatch();

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  useEffect(() => {
    dispatch(itemsActions.fetchItems());
  }, [dispatch]);

  if (areItemsLoading) return <p>Loading...</p>;
  return (
    <div className="App">
      <Form
        title="Sign up"
        className="signup-form"
        initialFormConfig={formConfig}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
