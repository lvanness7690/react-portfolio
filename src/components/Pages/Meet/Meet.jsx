import React from 'react';
import './meet.css';
import "@whereby.com/browser-sdk/embed";

// Define a new component that renders the Whereby embed
const WherebyEmbed = ({ roomUrl }) => {
    return <whereby-embed room={roomUrl} background="off" style={{ width: '100%' }} />;
}

function Meet() {
    // Define your room URL
    const roomUrl = "https://zinc.whereby.com/contact-me2bd65a93-d4dd-41a3-892c-57800d2e0e5d";

    return (
        <div className="meeting">
            <div className="title">
                <h2>MEET WITH ME</h2>
                <p>If you have any questions or just want to say hello, feel free to join me for a quick video meeting:</p>
            </div>
            
            {/* Render the Whereby embed below the title and description */}
            <div className="whereby-container">
                <WherebyEmbed roomUrl={roomUrl} />
            </div>
        </div>
    );
}

export default Meet;
