import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import components
import Navbar from "../components/Navbar";
import About from "../components/about";
import Shop from "../components/shop";
import ItemDetail from "../components/ItemDetail"
//import css
import "./styles.css";
//material-ui styles
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import { photoCamera } from '@material-ui/icons'
import useStyles from './styles.js'


const cards = [1,2,3,4,5,6,7,8,9,10];
export default function App() {
const classes = useStyles();
  const Home = () => {
    return (
      <>
      <CssBaseline />
      <AppBar position = "relative">
        <Toolbar>
          <photoCamera className={classes.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main  className={classes.container}>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello fork!! The photo album contains pictures of the tutors who will take you through the whole course in web development. You are all welcome:)
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item >
                  <Button variant="contained" color="primary">
                    see the photos
                  </Button>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
         <container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                className={classes.cardMedia} 
                image="https://source/unsplash.com/random"
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is amedia card. You can use this section to describe the content.
                    </Typography>
                    <CardActions>
                      <Button color="primary" size="sm">
                        view
                      </Button>
                      <Button color="primary" size="sm">
                        edit
                      </Button>
                    </CardActions>
                </CardContent>
              </Card>
            </Grid>
            ))}
          </Grid>
      </container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
               Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
            social media icons
        </Typography>
      </footer>
      </>
    );
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>

    </Router>
  );
}
