import { Link } from "react-router-dom";

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
              <TableRow key={item.id}>
                <TableCell align="left">{item.device}</TableCell>
                <TableCell align="left">{item.os}</TableCell>
                <TableCell align="left">{item.manufacturer}</TableCell>
                <TableCell align="left">{item.isCheckedOut ? 'Yes' : 'No'}</TableCell>
                <TableCell align="left">{item.lastCheckedOutBy}</TableCell>
                <TableCell align="left">{item.lastCheckedDate}</TableCell>
                <TableCell align="left">
                  <Link
                      to={{
                        pathname: `/updateInventory/${item.id}`,
                        state: item,
                      }}
                      style={{ textDecoration: "inherit", color: "inherit" }}
                  >
                    <Button size="small" color="primary">
                      {item.isCheckedOut ? 'Check In' : 'Check Out'}
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Button size="small" color="primary" onClick={() => props.handleDelete(item.id)} disabled={item.isCheckedOut ? true : false}>
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

export default inventoryList;
