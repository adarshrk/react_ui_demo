import React, { useState, useEffect, useCallback } from "react";

import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import withStyles from "@material-ui/core/styles/withStyles";

import Loader from "../../UI/Loader/Loader";
import PersistentDrawer from "../../UI/Drawer/Drawer";
import InventoryList from "../../components/InventoryList/InventoryList";

import styles from "./styles";
import axiosInstance from "../../Utility/getAxiosInstance";

const Home = (props) => {
  const [inventory, setInventory] = useState([]);
  const [uiLoading, setUiLoading] = useState(true);

  const handleNewItem = () => {
    props.history.push("/addItemInInventory");
  };

  const handleDelete = useCallback((id) => {
    axiosInstance
      .delete(`/inventory/${id}`)
      .then((response) => {
        props.history.go("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.history]);

  useEffect(() => {
    axiosInstance
      .get("/inventory")
      .then((response) => {
        setInventory((prevInventory) => [...prevInventory, ...response.data]);
        setUiLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { classes } = props;
  return uiLoading ? (
    <Loader classes={classes} uiLoading={uiLoading} />
  ) : (
    <React.Fragment>
      <PersistentDrawer headerLabel="Inventory" />
      <IconButton
        className={classes.floatingButton}
        color="primary"
        aria-label="Add Item"
        disabled={inventory.length > 10 ? true : false}
        onClick={handleNewItem}
      >
        <AddCircleIcon style={{ fontSize: 60 }} />
      </IconButton>
      <InventoryList
        classes={classes}
        inventory={inventory}
        handleDelete={handleDelete}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(Home);
