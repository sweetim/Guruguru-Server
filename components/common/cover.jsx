'use strict';

const React = require('react');

const Cover = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        children: React.PropTypes.node
    },
    render: function() {
        return (
            <div className="uk-block uk-block-primary uk-contrast">
                <div className="uk-container uk-container-center uk-text-center" data-uk-grid-margin>
                    <div className="uk-grid">
                        <div className="uk-width-medium-1-1">
                            <h2>{this.props.title}</h2>
                            <h4>{this.props.description}</h4>
                            <div className="uk-grid uk-margin-large-top">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Cover;
