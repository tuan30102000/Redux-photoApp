import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from '../PhotoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removePhoto } from '../../photoSlice';
import './style.scss'
PhotoList.propTypes = {
};

function PhotoList(props) {
    const photos = useSelector(state => state.photos)
    
    const dispatch = useDispatch()

    const removeClick = function (item) {
       
        let index=photos.indexOf(item)
        // let al1=[...photos.slice(0, index),... photos.slice(index + 1)]
        
        const newAction = removePhoto(index)
        dispatch(newAction)
    }
    return (
        <div className='Photo-list'>
            {photos.map((item, index) => <PhotoItem removeFc={() => { removeClick(item) }} srcImg={item.img} key={index} />
            )}
        </div>
    );
}

export default PhotoList;