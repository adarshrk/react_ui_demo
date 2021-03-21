
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from './styles';
import React from "react";

const PopulateItems = (props) => {
    const {classes, item} = props;
    const disabled = (props.action === "checkOut" || props.action === "checkIn") ? true : false;
    return (
        <form className={classes.form} noValidate>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    disabled={disabled}
                    margin="dense"
                    label="Device"
                    name="device"
                    autoComplete="device"
                    value={item.device}
                    onChange={props.handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    disabled={disabled}
                    margin="dense"
                    label="OS"
                    name="os"
                    autoComplete="device"
                    value={item.os}
                    onChange={props.handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    disabled={disabled}
                    margin="dense"
                    label="Manufacturer"
                    name="manufacturer"
                    autoComplete="manufacturer"
                    value={item.manufacturer}
                    onChange={props.handleChange}
                  />
                </Grid>
                {
                    props.action === "checkOut" ? 
                    <React.Fragment>
                        <Grid item md={6} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                disabled={disabled}
                                margin="dense"
                                label="Last Checked Out By"
                                name="lastCheckedOutBy"
                                autoComplete="lastCheckedOutBy"
                                value={item.lastCheckedOutBy}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                disabled={disabled}
                                margin="dense"
                                label="Last Checked Out Date"
                                name="lastCheckedDate"
                                autoComplete="lastCheckedDate"
                                value={item.lastCheckedDate}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                label="Checking Out For"
                                name="checkedOutBy"
                                autoComplete="checkedOutBy"
                                value={item.checkedOutBy}
                                onChange={props.handleChange}
                            />
                        </Grid>
                    </React.Fragment>
                    : null
                }
                {
                    props.action === "checkIn" ?
                    <React.Fragment>
                        <Grid item md={6} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                disabled={disabled}
                                margin="dense"
                                label="Last Checked Out By"
                                name="lastCheckedOutBy"
                                autoComplete="lastCheckedOutBy"
                                value={item.lastCheckedOutBy}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                disabled={disabled}
                                margin="dense"
                                label="Last Checked Out Date"
                                name="lastCheckedDate"
                                autoComplete="lastCheckedDate"
                                value={item.lastCheckedDate}
                                onChange={props.handleChange}
                            />
                        </Grid>
                    </React.Fragment>
                    : null
                }
              </Grid>
            </form>
    )
};
export default withStyles(styles)(PopulateItems);
