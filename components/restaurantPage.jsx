'use strict';

const React = require('react');

const RestaurantPage = React.createClass({
    render: function() {
        return (
            <div>
                Restuarant is nice!
            </div>
        );
    }
});

module.exports = React.createFactory(RestaurantPage);
