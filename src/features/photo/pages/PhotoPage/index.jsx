import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../../components/Thumbnail';
import { NavLink, useRouteMatch } from 'react-router-dom';
import img from '../../../../assets/image/thumbnail1.jpg'
import FormAddPhoto from '../../components/FormAddPhoto';
import { useSelector } from 'react-redux';
PhotoPage.propTypes = {

};

function PhotoPage(props) {
    const Math = useRouteMatch()
    const photoList=useSelector((state)=>state)
    console.log(photoList)
    return (
        <>  
                <Thumbnail imgLink={img} content={'Pick your Photo'} />
                <NavLink to={`${Math.path}/add`}>add</NavLink>
                <FormAddPhoto/>
        </>
    );
}

export default PhotoPage;