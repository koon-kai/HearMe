import React from 'react';
// import history from '../../utils/history';
import { History } from 'react-router';

var SignIn = React.createClass({

  mixins: [History],

  handleSubmit: function(e) {
    e.preventDefault();
    let email = this.refs.email;
    let password = this.refs.password;
    if (!email.value.trim()) {
      email.focus();
      return;
    }
    if (!password.value.trim()) {
      password.focus();
      return;
    }
    console.log(email.value);
    console.log(password.value);
    $.ajax({
      url: '/admin/signin',
      type: 'POST',
      data: {email: email.value, password: password.value},
      dataType: 'json',
      success: (res) => {
        console.log(res);
        // this.history.pushState(null, '/admin/workbench');
        window.location.href = '/admin/workbench';
      },
      error: (err) => {
        alert(err);
      }

    })
    // $('form').submit();
  },
  render: function() {
    return (
      <div className="signin-box">
        <div className="box">
          <section className="name">
            <span>HearMe</span>
          </section>
          <section className="division">
            <div className="line l"></div>
            <span>Sign In</span>
            <div className="line r"></div>
          </section>
          <section className="form">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" placeholder="Email" ref="email"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="password" className="form-control" placeholder="Password" ref="password"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-12">
                  <button type="submit" className="btn btn-primary w120">Submit</button>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-12">
                  <a href="/" className="btn btn-link w120">Go Home</a>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>           
    );
  }
})

module.exports = SignIn;