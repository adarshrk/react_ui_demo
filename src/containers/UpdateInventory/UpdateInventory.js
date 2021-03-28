import React, { useState } from "react";

import PersistentDrawer from "../../UI/Drawer/Drawer";
import PopulateItem from "../../components/PopulateItem/PopulateItem";
import ActionToolbarFormPage from "../../UI/ActionToolbarFormPage/ActionToolbarFormPage";

import axiosInstance from "../../Utility/getAxiosInstance";

const UpdateInventory = (props) => {
  const [checkedOutBy, setCheckedOutBy] = useState('');

  const handleChange = (event) => {
    setCheckedOutBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkedItem = props.location.state.is_checked_out
      ? { ...props.location.state, is_checked_out: false }
      : {
          ...props.location.state,
          last_checked_out_by: checkedOutBy,
          is_checked_out: true,
        };
    axiosInstance
      .put(`/inventory/${props.match.params.id}`, checkedItem)
      .then((response) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    props.history.replace("/");
  };

  const item = { ...props.location.state };
  const action = item.is_checked_out ? "checkIn" : "checkOut";
  return (
    <React.Fragment>
      <PersistentDrawer headerLabel="Update" />
      <ActionToolbarFormPage
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
      <PopulateItem
        item={item}
        action={action}
        handleChange={handleChange}
      />
    </React.Fragment>
  );
};

export default UpdateInventory;
