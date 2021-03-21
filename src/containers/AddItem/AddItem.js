import React, { Component } from 'react';
import PersistentDrawer from "../../UI/Drawer/Drawer";
import PopulateItem from "../../components/PopulateItem/PopulateItem";
import ActionToolbarFormPage from "../../UI/ActionToolbarFormPage/ActionToolbarFormPage";

import axiosInstance from "../../Utility/getAxiosInstance";

class AddItemInInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            os: '',
            manufacturer: ''
        };
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.device && this.state.os && this.state.manufacturer) {
            axiosInstance
            .post('/inventory', {...this.state})
            .then((response) => {
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            console.log("Insufficient Data");
        }
    };

    handleCancel = () => {
        this.props.history.goBack();
    };

    render(){
        return (
        <React.Fragment>
            <PersistentDrawer headerLabel="Create" />
            <ActionToolbarFormPage handleCancel={this.handleCancel} handleSubmit={this.handleSubmit}/>
            <PopulateItem item={{...this.state}} handleChange={this.handleChange} />    
        </React.Fragment>
    );
    }

};

export default AddItemInInventory;