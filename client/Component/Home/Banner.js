import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ appName }) => {
    return (
        <Link to="/">
            {appName}

        </Link>
    )
};

export default Banner