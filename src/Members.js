import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Members = () => {
  const membersData = require('./persons.json');
  var memberList = membersData.map ( (member) => {
    return(
      <div key={member.id}>
        <img src = {member.photo}></img>
        <h3>{member.firstname} {member.lastname}</h3>
        <Link to={`/members/${member.firstname}_${member.lastname}`}>Learn more</Link>
      </div>
    );
  })
  return (
    <div>
      <div>
        <h1> Members </h1>
        <ul> {memberList} </ul>
      </div>
    </div>
  )
}

export default Members;
