import React from 'react';


var SignIn = React.createClass({
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
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="password" className="form-control" placeholder="Password" />
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