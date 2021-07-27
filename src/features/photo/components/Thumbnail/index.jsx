import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Thumbnail.propTypes = {
    imgLink:PropTypes.string,
    content:PropTypes.string,

};

function Thumbnail(props) {
    const{imgLink,content}=props
    return (
        <div className='thumbnail layout' 
    
        style={{
            backgroundImage: `url(${imgLink})`,
        }}
        >
            <div className="thumbnail-box layout-box">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Thumbnail;