import React, { useState } from 'react';
import PersistentDrawer from "../../UI/Drawer/Drawer";
import PopulateItem from "../../components/PopulateItem/PopulateItem";
import ActionToolbarFormPage from "../../UI/ActionToolbarFormPage/ActionToolbarFormPage";

import axiosInstance from "../../Utility/getAxiosInstance";

const AddItemInInventory = (props) => {
    const [item, setItem] = useState({ device: '', os: '', manufacturer: ''});

    const handleChange = (event) => {
        setItem(prevState => {
            return { ...prevState, [event.target.name]: event.target.value};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(item.device && item.os && item.manufacturer) {
            axiosInstance
            .post('/inventory', {...item})
            .then((response) => {
                props.history.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            console.log("Insufficient Data");
        }
    };

    const handleCancel = () => {
        props.history.goBack();
    };

    return (
    <React.Fragment>
        <PersistentDrawer headerLabel="Create" />
        <ActionToolbarFormPage handleCancel={handleCancel} handleSubmit={handleSubmit}/>
        <PopulateItem item={{...item}} handleChange={handleChange} />    
    </React.Fragment>
    );

};

export default AddItemInInventory;