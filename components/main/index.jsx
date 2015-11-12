'use strict';

const React = require('react');

const Feature = require('./feature');
const Mobile = require('./mobile');

const MainPage = React.createClass({
    propTypes: {
        mobile: React.PropTypes.object.isRequired,
        features: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                <Feature
                    title={this.props.features.title}
                    description={this.props.features.description}
                    features={this.props.features.features}/>
                <Mobile
                    title={this.props.mobile.title}
                    description={this.props.mobile.description}
                    features={this.props.mobile.features}/>
            </div>
        );
    }
});

module.exports = MainPage;
