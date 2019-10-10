import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const membersData = require('./persons.json');
console.log(membersData);

class Member extends Component {
  render() {
    var text = '';
    var fullname = this.props.match.params.fullname;
    console.log(fullname);
    for (var i=0; i<membersData.length; i++) {
      if(membersData[i].firstname + '_' + membersData[i].lastname === fullname) {
        text = membersData[i].bio;
      }
     }
    return (
      <div>
        {text}
        <Link to="/members">Back</Link>
      </div>
    )
  }

}

export default Member;
