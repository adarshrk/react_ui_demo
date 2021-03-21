import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import withStyles from "@material-ui/core/styles/withStyles";

import Loader from "../../UI/Loader/Loader";
import PersistentDrawer from "../../UI/Drawer/Drawer";
import InventoryList from "../../components/InventoryList/InventoryList";

import styles from "./styles";
import axiosInstance from "../../Utility/getAxiosInstance";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inventory: [],
        uiLoading: true,
    };
  }

  handleNewItem = () => {
    this.props.history.push("/addItemInInventory");
  }

  handleDelete = (id) => {
    axiosInstance
    .delete(`/inventory/${id}`)
    .then((response) => {
        this.props.history.go('/');
    })
    .catch((err) => {
        console.log(err);
    });
  }

  componentDidMount = () => {
    axiosInstance
    .get('/inventory')
    .then((response) => {
        this.setState({
            inventory: response.data,
            uiLoading: false,
        });
    })
    .catch((err) => {
        console.log(err);
    });
  }

  render() {
    const { classes } = this.props;
    return this.state.uiLoading ? (
      <Loader classes={classes} uiLoading={this.state.uiLoading} />
    ) : (
      <React.Fragment>
        <PersistentDrawer headerLabel="Inventory" />
        <IconButton
            className={classes.floatingButton}
            color="primary"
            aria-label="Add Item"
            disabled={this.state.inventory.length > 10 ? true : false}
            onClick={this.handleNewItem}
        >
            <AddCircleIcon style={{ fontSize: 60 }} />
        </IconButton>
        <InventoryList classes={classes} inventory={this.state.inventory} handleDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
