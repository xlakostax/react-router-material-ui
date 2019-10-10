import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const membersData = require('./persons.json');

class Member extends Component {
  render() {
    var bio = '';
    var photo = '';
    var fullname = this.props.match.params.fullname;
    console.log(fullname);
    for (var i = 0; i < membersData.length; i++) {
      console.log(membersData[i].firstname + '_' + membersData[i].lastname);
      if (membersData[i].firstname + '_' + membersData[i].lastname === fullname) {
        bio = membersData[i].biography;
        photo = membersData[i].photo;
        console.log(photo);
        break;
      } else {
        bio = <h1>Member not found</h1>;
      }
    }
    return (
      <div>
        <img src = {photo}></img>
        {bio}<br/>
        <Link to="/members">Back</Link>
      </div>
    )
  }
}

export default Member;
