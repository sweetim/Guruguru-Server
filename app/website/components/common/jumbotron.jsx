'use strict';

const React = require('react');

const Jumbotron = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        height: React.PropTypes.number,
        description: React.PropTypes.string,
        image: React.PropTypes.string.isRequired,
        button: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired
        })
    },
    getDefaultProps: function() {
        return {
            height: 550
        };
    },
    render: function() {
        const jumbotronStyle = {
            background: 'url(' + this.props.image + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 0',
            height: this.props.height,
        };

        return (
            <div className="uk-grid">
                <div className="uk-width-medium-1-1">
                    <div className="uk-vertical-align uk-text-center" style={jumbotronStyle}>
                        <div className="uk-vertical-align-middle uk-width-medium-1-2 uk-width-small-1-1">
                            <h1 className="uk-heading-large">{this.props.title}</h1>
                            <p className="uk-text-large">{this.props.description}</p>
                            <p>
                                <a className="uk-button uk-button-primary uk-button-large" href={this.props.button.link}>{this.props.button.title}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
