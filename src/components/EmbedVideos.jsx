import React from 'react'
import PropTypes from "prop-types";


const EmbedVideo = ({ embedId }) => (

    <div className="video-responsive">
        <div className="VideoIntroText">
            <h1>Let's Vibe Out And Breathe Together</h1>
            <h3>Scroll Down To Add  Your Favorite Vibe Raising videos</h3>
        </div>
        <div className="VideoItself">
            <iframe
                width="735"
                height="380"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="50"
                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture "
                allowFullScreen
                title="Embedded youtube"  />
            
        </div>
    </div>
);

EmbedVideo.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default EmbedVideo;
