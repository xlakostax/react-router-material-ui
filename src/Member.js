import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Member = ( {match, data} ) => {
  var member = data.find(p => p.firstname + '_' + p.lastname === match.params.name);
  console.log(member);
  var memberData;
  if (member)
    memberData = (
      <div>
        <p> {member.bio} </p>
        <Link to = '/members'>Back</Link>
      </div>
    );
  else memberData = <h3> Sorry. Not in the club </h3>;
  return (
    <div>
      {memberData}
    </div>
  )
}

export default Member;
