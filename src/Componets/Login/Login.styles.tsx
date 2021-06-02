import { makeStyles, Theme } from "@material-ui/core";

const chickenPhotos = ["https://i.pinimg.com/originals/01/93/f5/0193f589c7c3bc84d00fd0899b004706.jpg",
"https://betterchickencommitment.com/static/c4c65646cd882eb3b25feba0144c9113/a54c6/white-chicken-cutout-2.png",
"https://cdn.sanity.io/images/92ui5egz/~production/1f0e40ffac1592c3c9978cff9e5ec0d0b4901f23-1920x1080.jpg?w=1920&h=1080&auto=format",
"https://a4nh.cgiar.org/files/2017/10/Chicken-in-Timor-Leste-Johanna-Wong.jpg",
"https://assets.farmsanctuary.org/content/uploads/2020/05/27060521/2018_08-07_FSNY_Georgia_Hardstark_hen_DSC_1000_CREDIT_Farm_Sanctuary-scaled.jpg",
"https://a-z-animals.com/media/2019/11/Chicken-rooster-in-grass.jpg",
"https://www.backwoodshome.com/bhm/wp-content/uploads/2015/12/chicken-3727097_1920.jpg",
"https://www.adcogov.org/sites/default/files/chicken%201%20-%20getty.jpg"]

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url('+chickenPhotos[Math.floor(Math.random()*chickenPhotos.length)]+')',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));