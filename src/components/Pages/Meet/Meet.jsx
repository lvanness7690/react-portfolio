import React from 'react';
import './meet.css';

function Meet() {
    const roomUrl = "https://zinc.whereby.com/contact-me2bd65a93-d4dd-41a3-892c-57800d2e0e5d";

    return (
        <div className="meeting">
            <div className="title">
                <h2>MEET WITH ME</h2>
                <p>If you have any questions or just want to say hello, feel free to join me for a quick video meeting:</p>
            </div>

            <div className="whereby-container">
                <iframe
                    src={roomUrl}
                    title="Whereby meeting room"
                    allow="camera; microphone; fullscreen; display-capture; autoplay"
                    style={{ width: '100%', border: 0 }}
                />
            </div>
        </div>
    );
}

export default Meet;
