import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const membersData = require('./persons.json');
console.log(membersData);

class Member extends Component {
  render() {
    var text = '';
    var memberId = this.props.match.params.id;
    // console.log(memberId);
    for (var i=0; i<membersData.length; i++) {
      if(membersData[i].id == memberId) {
        text = membersData[i].bio;
      }
    }
    return (
      <div>
        {text}
        
      </div>
    )
  }
}

export default Member;
