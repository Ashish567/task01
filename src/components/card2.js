import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 40,
  },
  card: {
      minWidth: 280,
  },
  img: {
     textAlign: 'center',
     backgroundColor: '#f1f1f1'
  },
 
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
       
       
        <Grid item xs={12} sm={6}>
        <div>
        <Typography>
               <h3> Recieve Monthly Reports </h3> 
               <p>
                 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don 't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn'
                 t anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non - characteristic words etc.
               </p>
        </Typography>
            
        </div>
        </Grid>
         <Grid item xs={12} sm={6}>
          <div className={classes.img}>
          <Card className={classes.card}>
          <CardContent>
            <Typography >
                  <img src={require("./../assets/caro/bradford-west-1599906-unsplash.jpg")} alt="fg" / >
            </Typography>
          </CardContent>
          </Card>
         
         </div>
        </Grid>
        
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);