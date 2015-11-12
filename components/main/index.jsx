'use strict';

const React = require('react');

const Common = require('./../common');
const Feature = require('./feature');
const Mobile = require('./mobile');

const MainPage = React.createClass({
    propTypes: {
        header: React.PropTypes.object.isRequired,
        mobile: React.PropTypes.object.isRequired,
        features: React.PropTypes.object.isRequired,
        application: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            <div>
                <Common.Jumbotron
                    title={this.props.header.title}
                    description={this.props.header.description}
                    image={this.props.header.image}
                    button={this.props.header.button}/>
                <Feature
                    title={this.props.features.title}
                    description={this.props.features.description}
                    features={this.props.features.features}/>
                <Common.Jumbotron
                    title={this.props.application.title}
                    description={this.props.application.description}
                    image={this.props.application.image}
                    button={this.props.application.button}/>
                <Mobile
                    title={this.props.mobile.title}
                    description={this.props.mobile.description}
                    features={this.props.mobile.features}/>
                <Common.Footer
                    description="timX 2015 "/>
            </div>
        );
    }
});

module.exports = MainPage;
