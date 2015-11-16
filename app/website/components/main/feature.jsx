'use strict';

const React = require('react');

const Common = require('../common');

const Feature = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        features: React.PropTypes.array.isRequired
    },
    render: function() {
        const featureNodes = this.props.features.map((item, i) => {
            return (
                <div key={i} className="uk-width-medium-1-3">
                    <Common.CoverFeature
                        title={item.title}
                        description={item.description}
                        image={item.image}/>
                </div>
            );
        });

        return (
            <Common.Cover
                title={this.props.title}
                description={this.props.description}>
                {featureNodes}
            </Common.Cover>
        );
    }
});

module.exports = Feature;
