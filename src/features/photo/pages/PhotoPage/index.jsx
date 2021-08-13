import React from 'react';
import img from '../../../../assets/image/thumbnail2.jpg';
import LayoutCp from '../../components/LayoutCp';
import PhotoList from '../../components/PhotoList';
import Thumbnail from '../../components/Thumbnail';
PhotoPage.propTypes = {

};

function PhotoPage(props) {
    return (
        <>
            <Thumbnail imgLink={img} content='Your Photo awesome' />
            <LayoutCp classNameCp='photo-list'>
                <PhotoList test='1' />
            </LayoutCp>
        </>
    );
}


export default PhotoPage;