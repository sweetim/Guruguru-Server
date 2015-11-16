'use strict';

const React = require('react');

const Footer = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <div className="uk-block uk-block-secondary">
                <div className="uk-container uk-container-center">
                    <div className="uk-text-center uk-contrast">
                        <div className="uk-grid">
                            <div className="uk-width-medium-1-1">
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
