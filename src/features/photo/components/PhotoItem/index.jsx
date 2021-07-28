import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

PhotoItem.propTypes = {
    srcImg: PropTypes.string.isRequired,
    removeFc:PropTypes.func.isRequired,
};

function PhotoItem(props) {
    const { srcImg,removeFc } = props
    return (
        <div className='photo-item'>
            <div className="photo-item__img-box">
                <img src={srcImg} alt="" />
            </div>
            <div className='item__btn-box'>
                <button onClick={removeFc} className='remove'>
                    Remove
                </button>

            </div>
        </div>
    );
}

export default PhotoItem;