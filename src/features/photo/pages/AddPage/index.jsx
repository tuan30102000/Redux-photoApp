import React from 'react';
import PropTypes from 'prop-types';
import img from '../../../../assets/image/thumbnail2.jpg'
import Thumbnail from '../../components/Thumbnail';
AddPage.propTypes = {
    
};

function AddPage(props) {
    return (
        <>
        <Thumbnail  imgLink={img} content='Your Photo awesome'/>
        </>
    );
}

export default AddPage;