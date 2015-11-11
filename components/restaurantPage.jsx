'use strict';

const React = require('react');

const Cover = require('./common/cover');
const CoverFeature = require('./common/coverFeature');

const RestaurantPage = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        features: React.PropTypes.array.isRequired
    },
    render: function() {
        const featureNodes = this.props.features.map((item) => {
            return (
                <CoverFeature title={item.title} description={item.description} image={item.image}/>
            );
        });

        return (
            <Cover title={this.props.title} description={this.props.description}>
                {featureNodes}
            </Cover>
        );
    }
});

module.exports = RestaurantPage;
