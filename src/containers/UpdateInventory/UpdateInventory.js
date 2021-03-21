import React, { Component } from 'react';

import PersistentDrawer from "../../UI/Drawer/Drawer";
import PopulateItem from "../../components/PopulateItem/PopulateItem"
import ActionToolbarFormPage from "../../UI/ActionToolbarFormPage/ActionToolbarFormPage";

import axiosInstance from "../../Utility/getAxiosInstance";

class UpdateInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedOutBy: ''
        };
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const checkedItem = this.props.location.state.isCheckedOut ? 
            {...this.props.location.state, isCheckedOut: false} :
            {...this.props.location.state, lastCheckedOutBy: this.state.checkedOutBy, isCheckedOut: true};
        axiosInstance
        .put(`/inventory/${this.props.match.params.id}`, checkedItem)
        .then((response) => {
            this.props.history.push('/');
        })
        .catch((err) => {
            console.log(err);
        });
    };

    handleCancel = () => {
        this.props.history.goBack();
    };

    render(){
        const item = { ...this.props.location.state };
        const action = item.isCheckedOut ? "checkIn" : "checkOut";
        return (
        <React.Fragment>
            <PersistentDrawer headerLabel="Update" />
            <ActionToolbarFormPage handleCancel={this.handleCancel} handleSubmit={this.handleSubmit}/>
            <PopulateItem item={item} action={action} handleChange={this.handleChange} />    
        </React.Fragment>
    );
    }

};

export default UpdateInventory;