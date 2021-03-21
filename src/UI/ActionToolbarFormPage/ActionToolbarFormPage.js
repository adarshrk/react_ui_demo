import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

import styles from "./styles";

const ActionToolbarFormPage = (props) => {
  const { classes } = props;
  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        onClick={props.handleCancel}
        aria-label="close"
      >
        <CancelIcon />
      </IconButton>
      <Button
          autoFocus
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={props.handleSubmit}
      >
        Submit
      </Button>
    </Toolbar>
  );
};

export default withStyles(styles)(ActionToolbarFormPage);
