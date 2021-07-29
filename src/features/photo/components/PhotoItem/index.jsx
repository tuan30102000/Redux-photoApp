import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import EditPage from '../../pages/EditPage';

PhotoItem.propTypes = {
    srcImg: PropTypes.string.isRequired,
    removeFc:PropTypes.func.isRequired,
    onEditClick:PropTypes.func.isRequired,
};

function PhotoItem(props) {
    const { srcImg,removeFc,onEditClick } = props
    return (
        <div className='photo-item'>
            <div className="photo-item__img-box">
                <img src={srcImg} alt="" />
            </div>
            <div className='item__btn-box'>
                <div onClick={removeFc} className='button remove'>
                    Remove
                </div>
                <div onClick={onEditClick} className='button edit'>
                    Edit
                </div>
                

            </div>
        </div>
    );
}

export default PhotoItem;