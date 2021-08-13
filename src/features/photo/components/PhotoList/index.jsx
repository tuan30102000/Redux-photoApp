import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { removePhoto } from '../../photoSlice';
import PhotoItem from '../PhotoItem';
import './style.scss';
PhotoList.propTypes = {
};

function PhotoList(props) {
    console.log(props.test)
    const photos = useSelector(state => state.photos)
    const Math = useRouteMatch()
    const dispatch = useDispatch()
    const history = useHistory()
    const removeClick = function (item) {

        let index = photos.indexOf(item)
        // let al1=[...photos.slice(0, index),... photos.slice(index + 1)]

        const newAction = removePhoto(index)
        dispatch(newAction)
    }
    const goToEditPage = function (data) {
        const index = photos.indexOf(data)
        history.push(Math.path + '/' + index)
    }

    return (
        <>
            <div className='Photo-list'>
                {photos?.map((item, index) => <PhotoItem removeFc={() => { removeClick(item) }} onEditClick={() => { goToEditPage(item) }} srcImg={item.img} key={index} />
                )}
            </div>
            <div className="link-box">
                <NavLink to={`${Math.path}/add`}>add</NavLink>
            </div>
        </>
    );
}

export default PhotoList;