import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <button>Home</button>
                <button>New Post</button>
                <button>Logout</button>
            </div>
        )
    }
}
