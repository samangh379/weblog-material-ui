import { makeStyles, Container, Avatar, Typography, ImageList ,ImageListItem, Link, Divider} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: "0",
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
  },
  imageList: {
    left: 'auto',
    right: '0%',
    transform: 'translateX(0%)',
    top: '0%'
  },
  link: {
    fontSize: "16px",
    color: "#555",
    marginRight: "10px"
  }
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        دوستان آنلاین
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: '20px',overflow:'hidden' }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        گالری
      </Typography>
      <ImageList rowHeight={100} className={classes.imageList} style={{ marginBottom: "20px" }} cols={3}>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/breakfast.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/morning.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/honey.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/hats.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/plant.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/bike.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/burgers.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/morning.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
          <ImageListItem>
            <img src="https://mui.com/static/images/image-list/honey.jpg" alt="" className={classes.imageList} />
          </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        دسته بندی ها
      </Typography>
      <Link component="button" href="" className={classes.link} variant="body2">
        ورزشی
      </Link>
      <Link component="button" href="" className={classes.link} variant="body2">
        سیاسی
      </Link>
      <Divider flexItem style={{ marginBottom :10 }} />
      <Link component="button" href="" className={classes.link} variant="body2">
        علمی
      </Link>
      <Link component="button" href="" className={classes.link} variant="body2">
        هنری
      </Link>

    </Container>
  );
}

export default Leftbar;
