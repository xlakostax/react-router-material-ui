import React from 'react';
import { Route, Link } from 'react-router-dom';
import Member from './Member'
import './index.css'

const Members = ({ match }) => { /*<p>{match.params.id}</p>*/
  const membersData = require('./persons.json');

  console.log(membersData)

  var memberList = membersData.map ( (member) => {
    return(
      <div key={member.id}>
        <h3>{member.firstname} {member.lastname}</h3>
        {/*<Link to={`/members/${member.id}`}>Learn more</Link>*/}
        <Link to={`/members/${member.firstname}`}>Learn more</Link>
      </div>
    );
  })

  return (
    <div>
      <div>
        <h3> Members </h3>
        <ul> {memberList} </ul>
      </div>
      {/*<Route path={ `${ match.url }/:memberId` }
        render={
          (props) => <Member data= { membersData } { ...props } />
        }
      />

      <Route exact path={match.url}
        render={
          () => (
            <div>Please select a member.</div>
          )
        }
      />*/}
      {/*<Route path={`${match.url}/:memberId`} render={props => <Member data={membersData} {...props} />}/>*/}
      <Route path={`${match.url}/:name`} render={props => <Member data={membersData} {...props} />}/>
    </div>
  )
}

export default Members;
