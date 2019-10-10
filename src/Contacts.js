import React from 'react';

class Contacts extends React.Component {
  render() {
    return (
    <div>
      <h3>Join us</h3>

      <form method="POST" action="/send" id='client'>
        <p>
          <label>Name</label>
          <input type="text" name="name"></input>
        </p>
        <p>
          <label></label>
          <input type="text" name="company"></input>
        </p>
        <p>
          <label>Email Address</label>
          <input type="email" name="email"></input>
        </p>
        <p class="full">
          <label>Message</label>
          <textarea name="message" rows="5"></textarea>
        </p>
        <p class="full">
          <button type="submit" value="reset">Submit</button>
        </p>
      </form>
    </div>
    )
  }
}

export default Contacts;
