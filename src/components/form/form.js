import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './korm.css';

const firebase = require('firebase');
const uuid = require('uuid');

const config = {
      apiKey: "AIzaSyDjT8LM77JhjzVJEfMTZuG7yi-GMuEUJ-o",
      authDomain: "task-a51ea.firebaseapp.com",
      databaseURL: "https://task-a51ea.firebaseio.com",
      projectId: "task-a51ea",
      storageBucket: "task-a51ea.appspot.com",
      messagingSenderId: "730788463048",
      appId: "1:730788463048:web:e8d5cf0706b814e2"
};
firebase.initializeApp(config);



const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
     container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
          uid: uuid.v1(),
          firstName: '',
          lastName: '',
      };
      this.submitData = this.submitData.bind(this);
      this.inputData = this.inputData.bind(this);
  }
  

  componentDidMount() {
      firebase
          .database()
          .ref(`Newdata/${this.state.uid}`)
          .on('value', snap => console.log('from db', snap.val()));
  }

  submitData(event) {
      event.preventDefault();
      firebase
          .database()
          .ref(`Newdata/${this.state.uid}`)
          .set({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
          })
          .then({
               firstName: "",
               lastName: "",
          })
          .catch(error => console.log(error));
  } 
  yo(event) {
    this.Form.name1= "";
    this.Form.name2 = "";
  }

   inputData(event) {
       const firstName = this.refs.name1.value;
       const lastName = this.refs.name2.value;
       this.setState({
           firstName,
           lastName
       });
   }
   render() {
           return (
      <div>
         <form onSubmit={this.submitData}>
           <label for="fname">Name</label>
           <input type="text" onfocus="this.value=''" placeholder="Your name.." onChange={this.inputData} ref="name1" />
           <label for="fname">Email ID</label>
          <input type="text" onfocus="this.value=''" placeholder="Your email" onChange={this.inputData} ref="name2" />
          <input type="submit" onClick="yo()" value="Submit" />
        </form>
      </div>
    );
  }
}
Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);