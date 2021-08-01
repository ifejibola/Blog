import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ appName }) => {
    return (
        <Link to="/" className="navbar-brand">
            {appName}

        </Link>
    )
};

export default Banner