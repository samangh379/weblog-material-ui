
import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home,Person,PhotoCamera,TabletMac, Bookmark, ExitToApp, Storefront, List, PlayCircleOutline, Settings } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    container:{
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      color: "white",
      position: "sticky",
      top: "0",
      [theme.breakpoints.up('sm')]:{
       backgroundColor: "white",
       color: "#555",
       border: "1px solid #f8f8f8"
      }
    },
    item :{
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('sm')]:{
        marginBottom: theme.spacing(3),
        cursor: "Pointer"
      }
    },
    text: {
      fontWeight: "500",
      [theme.breakpoints.down('sm')]:{
       display: "none"
      }
    },
    icon: {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]:{
        fontSize: "18px"
      }
    }
  }))

function Rightbar() {
  const classes = useStyles();
  return (
   <Container className={classes.container}>
     <div className={classes.item}>
       <Home className={classes.icon} />
       <Typography className={classes.text}>خانه</Typography>
     </div>
     <div className={classes.item}>
       <Person className={classes.icon} />
       <Typography className={classes.text}>دوستان</Typography>
     </div>
     <div className={classes.item}>
       <List className={classes.icon} />
       <Typography className={classes.text}>لیست ها</Typography>
     </div>
     <div className={classes.item}>
       <PhotoCamera className={classes.icon} />
       <Typography className={classes.text}>دوربین</Typography>
     </div>
     <div className={classes.item}>
       <PlayCircleOutline className={classes.icon} />
       <Typography className={classes.text}>ویدیو</Typography>
     </div>
     <div className={classes.item}>
       <TabletMac className={classes.icon} />
       <Typography className={classes.text}>اپ</Typography>
     </div>
     <div className={classes.item}>
       <Bookmark className={classes.icon} />
       <Typography className={classes.text}>مجموعه ها</Typography>
     </div>
     <div className={classes.item}>
       <Storefront className={classes.icon} />
       <Typography className={classes.text}>بازار</Typography>
     </div>
     <div className={classes.item}>
       <Settings className={classes.icon} />
       <Typography className={classes.text}>تنظیمات</Typography>
     </div>
     <div className={classes.item}>
       <ExitToApp className={classes.icon} />
       <Typography className={classes.text}>خروج</Typography>
     </div>
   </Container>
  );
}

export default Rightbar;