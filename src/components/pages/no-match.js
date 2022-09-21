import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
            <h2>Whoa there! That doesn't exist!</h2>
            <Link to="/">Return home</Link>
        </div>
    );
}