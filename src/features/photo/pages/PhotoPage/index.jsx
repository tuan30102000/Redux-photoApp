import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import img from '../../../../assets/image/thumbnail2.jpg';
import LayoutCp from '../../components/LayoutCp';
import PhotoList from '../../components/PhotoList';
import Thumbnail from '../../components/Thumbnail';
PhotoPage.propTypes = {

};

function PhotoPage(props) {
    const Math = useRouteMatch().path
    return (
        <>
            <Thumbnail imgLink={img} content='Your Photo awesome' />
            <NavLink  to={`${Math}/add`}>add</NavLink>
            <LayoutCp classNameCp='photo-list' Cpn={[PhotoList]}/>
        </>
    );
}


export default PhotoPage;