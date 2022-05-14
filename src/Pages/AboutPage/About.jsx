import React from 'react';
import {Link} from "react-router-dom";

function About() {
    return (
        <>
            <div>
                <h1>
                    <Link to={'about/create-vote'}>Create a vote</Link>
                </h1>
                <h1>
                    <Link to={'/about/votes'}>Get All Votes</Link>
                </h1>
            </div>
        </>
    );
}

export default About;
