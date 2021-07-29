import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import img from '../../../../assets/image/thumbnail2.jpg';
import NotFound from '../../../../components/NotFound';
import FormAddPhoto from '../../components/FormAddPhoto';
import Thumbnail from '../../components/Thumbnail';
import { useDispatch, useSelector } from 'react-redux'
import { editPhoto } from '../../photoSlice'
EditPage.propTypes = {

};

function EditPage(props) {
    const { photoId } = useParams()
    const photos = useSelector(state => state.photos)
    const hasErros = (Number(photoId) || Number(photoId) === 0) && Number(photoId) >= 0 && Number(photoId) < photos.length;
    const currentPhoto = photos[Number(photoId)]
    const history =useHistory()
    const dispatch = useDispatch()
    const handleEdit = function (data) {
        const newData = {
            data,
            index: Number(photoId)
        }
        const newAction = editPhoto(newData)
        dispatch(newAction)
        history.push('/photos')

    }
    return (
        <>
            {!!hasErros && <Thumbnail imgLink={img} content="Edit your Photo" />}
            {!!hasErros && <FormAddPhoto onSubmitFc={handleEdit} valueTitle={currentPhoto?.title} valueCategory={currentPhoto?.category} srcImg={currentPhoto?.img} />}
            {!hasErros && <NotFound />}
        </>
    );
}

export default EditPage;