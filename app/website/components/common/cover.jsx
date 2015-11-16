'use strict';

const React = require('react');
const classNames = require('classnames');

const Cover = React.createClass({
    propTypes: {
        isMarginTop: React.PropTypes.bool,
        isContrast: React.PropTypes.bool,
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        children: React.PropTypes.node
    },
    getDefaultProps: () => {
        return {
            isMarginTop: true,
            isContrast: true
        };
    },
    render: function() {
        const blockClass = classNames({
            'uk-block': true,
            'uk-block-primary': this.props.isContrast,
            'uk-contrast': this.props.isContrast,
            'uk-block-muted': !this.props.isContrast
        });

        const containerClass = classNames({
            'uk-grid': true,
            'uk-margin-large-top': this.props.isMarginTop
        });

        return (
            <div className={blockClass}>
                <div className="uk-container uk-container-center uk-text-center" data-uk-grid-margin>
                    <div className="uk-grid">
                        <div className="uk-width-medium-1-1">
                            <h2>{this.props.title}</h2>
                            <h4>{this.props.description}</h4>
                            <div className={containerClass}>
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
