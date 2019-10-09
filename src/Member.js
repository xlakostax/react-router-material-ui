import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Member = ( {match, data} ) => {
  // const membersData = require('./persons.json');
  var member = data.find(p => p.firstname + '_' + p.lastname == match.params.name);
  console.log(member);
  var memberData;
  if (member)
    memberData = (
      <div>
        <p> {member.bio} </p>
      </div>
    );
  else memberData = <h2> Sorry. Not in the club </h2>;
  return (
    <div>
      {memberData}
    </div>
  )
}

export default Member;
