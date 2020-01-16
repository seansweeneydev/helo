import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function Nav(props) {
    console.log(props)
    return (
        <div>
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>
            <Link to='/new'>
                <button>New Post</button>
            </Link>
            <Link to='/'>
                <button>Logout</button>
            </Link>
            <h2>{props.username}</h2>
        </div>
    )
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Nav)