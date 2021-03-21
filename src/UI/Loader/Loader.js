import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = (props) => {
    const {classes} = props;
    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </main>
    )
};

export default Loader;