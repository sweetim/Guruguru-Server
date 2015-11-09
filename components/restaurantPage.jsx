'use strict';

let React = require('react');
let ReactDOMServer = require('react-dom/server');

let RestaurantPage = React.createClass({
    render: function() {
        return (
            <div>
                Restuarant is nice!
            </div>
        );
    }
});

module.exports = React.createFactory(RestaurantPage);
