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
        <Grid item xs={12} sm={6}>
        <div>
        <Typography>
               <h3> Recieve Monthly Reports </h3> 
               <p>
                 Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10 .32 and 1.10 .33 of "de Finibus Bonorum et Malorum"(The Extremes of Good and Evil) by Cicero, written in 45 BC.This book is a treatise on the theory of ethics, very popular during the Renaissance.The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10 .32.
               </p>
        </Typography>
            
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