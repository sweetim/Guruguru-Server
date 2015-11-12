'use strict';

const React = require('react');

const Common = require('./../common');

const Mobile = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        features: React.PropTypes.array.isRequired
    },
    render: function() {
        const featureNodes = this.props.features.map((item, i) => {
            return (
                <div key={i} className="uk-width-small-1-2">
                    <Common.CoverFeature title={item.title} description={item.description} image={item.image}/>
                </div>
            );
        });

        return (
            <Common.Cover
                isContrast={false}
                isMarginTop={false}
                title={this.props.title}
                description={this.props.description}>
                <div className="uk-width-1-2 uk-container-center">
                    <div className="uk-grid">
                        {featureNodes}
                    </div>
                </div>
            </Common.Cover>
        );
    }
});

module.exports = Mobile;
