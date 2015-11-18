'use strict';

const React = require('react');

const CoverFeature = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <div className="uk-panel" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
                <img
                    className="uk-border-circle uk-margin-top"
                    src={this.props.image}
                    width="100"
                    height="100"
                    alt={this.props.title}></img>
                <h2 className="uk-h3">{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
});

module.exports = CoverFeature;
