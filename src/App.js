import { Grid, makeStyles } from "@material-ui/core";
import Navabr from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Add from "./components/Add";


const useStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down("xs")]:{
      display: "none"
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navabr />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>

      <Add />
    </div>
  );
}

export default App;
