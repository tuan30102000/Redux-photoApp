import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NotFound from '../../../../components/NotFound'
EditPage.propTypes = {
    
};

function EditPage(props) {
    const {photoId}=useParams()
    const hasErros=Number(photoId)
    return (
        <div>
            {hasErros ? <p>{photoId}</p>:<NotFound/>}
        </div>
    );
}

export default EditPage;