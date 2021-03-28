import React from 'react';
import { Link } from "react-router-dom";

import Alert from '@material-ui/lab/Alert';
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";



const inventoryList = (props) => {
  const { classes, inventory } = props;
  const checkForWeekOldDevice = (checkOutDate, status) => {
    const today = new Date();
    const prevweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
    return (status && prevweek - new Date(checkOutDate) > 0) ? 
    <Alert severity="warning">Device checked week old!</Alert>
    : null;
  };

  const validateCheckOutTime = (is_checked_out) => {
    const today = new Date();
    const currentHr = today.getHours();
    if(!is_checked_out && (currentHr < 9 || currentHr > 17)) return true;
    return false; 
  };

  return (
    <main className={classes.content}>
      <Typography variant="h5" component="h5">
        Inventory List
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="inventory table">
          <TableHead>
            <TableRow>
              <TableCell>Device</TableCell>
              <TableCell align="left">OS</TableCell>
              <TableCell align="left">Manufacturer&nbsp;</TableCell>
              <TableCell align="left">Is Checked Out&nbsp;</TableCell>
              <TableCell align="left">Last Checked By&nbsp;</TableCell>
              <TableCell align="left">Last Checked Date&nbsp;</TableCell>
              <TableCell align="left">&nbsp;</TableCell>
              <TableCell align="left">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item._id}>
                <TableCell align="left">{item.device}</TableCell>
                <TableCell align="left">{item.os}</TableCell>
                <TableCell align="left">{item.manufacturer}</TableCell>
                <TableCell align="left">{item.is_checked_out ? 'Yes' : 'No'}</TableCell>
                <TableCell align="left">{item.last_checked_out_by}</TableCell>
                <TableCell align="left">{item.last_checked_date}</TableCell>
                <TableCell align="left">
                  <Link
                      to={!validateCheckOutTime(item.is_checked_out) ? {
                        pathname: `/updateInventory/${item._id}`,
                        state: item,
                      } : '/'}
                      style={{ textDecoration: "inherit", color: "inherit" }}
                  >
                    <Button size="small" color="primary">
                      {item.is_checked_out ? 'Check In' : 'Check Out'}
                    </Button>
                  </Link>
                  {checkForWeekOldDevice(item.last_checked_date, item.is_checked_out)}
                </TableCell>
                <TableCell align="left">
                  <Button size="small" color="primary" onClick={() => props.handleDelete(item._id)} disabled={item.is_checked_out ? true : false}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </main>
  );
};

export default React.memo(inventoryList);
