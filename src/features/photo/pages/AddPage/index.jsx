import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import img from '../../../../assets/image/thumbnail1.jpg';
import FormAddPhoto from '../../components/FormAddPhoto';
import Thumbnail from '../../components/Thumbnail';
import { addPhoto } from '../../photoSlice';
AddPage.propTypes = {

};

function AddPage(props) {
    const Math = useRouteMatch()
    const dispatch = useDispatch()
    const history=useHistory()
    const handleSubmit = function (data) {
        const newAction = addPhoto(data)
       
        dispatch(newAction)
        history.push('/photos')

    }
    return (
        <>
            <Thumbnail imgLink={img} content={'Pick your Photo'} />
            <FormAddPhoto Cpn={Thumbnail} onSubmit={handleSubmit} />
        </>
    );
}

export default AddPage;