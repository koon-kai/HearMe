
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <Link to="index"><h1>HearMe</h1></Link>
                    </div>
                    <nav>
                        <a href="#services" >Photo</a>
                        <span>|</span>
                        <a href="#services" >BookMark</a>
                        <span>|</span>
                        <a href="#services" >Note</a>
                        <span>|</span>
                        <a href="#services" >About</a>
                        <span>|</span>
                        <a href="#services" >Chat</a>
                        <span>|</span>
                        <Link to="addPost">Add Post</Link>
                    </nav>
                </header>
                <div className="page-divider"></div>
            </div>
        )
    }
})


module.exports = Header;

