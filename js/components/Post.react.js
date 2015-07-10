
var React = require('react');


var Post = React.createClass({
    componentDidMount: function() {
        var id = this.props.params.id;
        console.log(id);
    },

    render: function() {
        return (
            <div className="post">
                <div className="post-title">
                    <h1>Test</h1>
                </div>
                <div className="post-content">
                </div>
            </div>
        )
    }
});

module.exports = Post;

