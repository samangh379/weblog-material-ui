import { Card, CardActionArea,CardMedia,CardContent, makeStyles, Typography,CardActions,Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card:{
        marginBottom: theme.spacing(5),
    },
    media:{
        height: 250,
        [theme.breakpoints.down("sm")]:{
            height: 150
        }

    }
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/3076431/pexels-photo-3076431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="پست اول"
        />
        <CardContent>
            <Typography gutterBottom variant="h5">این پست اول است</Typography>
            <Typography variant="body">لورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ایلورم ایپسوم متن سادگی فلان است برای دوره متریال یو ای</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">بیشتر بخوانید</Button>
            <Button size="small" color="primary">اشتراک گذازی</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default Post;
