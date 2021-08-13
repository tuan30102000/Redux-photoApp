import { react, useEffect } from 'react';
import {
    Route, Switch, useRouteMatch
} from "react-router-dom";
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import PhotoPage from './pages/Photopage';
import { useDispatch, useSelector } from 'react-redux'
import { setInit } from './photoSlice'
PhotoFeatures.propTypes = {

};

function PhotoFeatures(props) {
    const photos = useSelector(state => state.photos)
    const dispatch = useDispatch()
    useEffect(() => {
        const photosColection = JSON.parse(localStorage.getItem('photoAlbum'))
        const newAction = setInit(photosColection)
        dispatch(newAction)
    }, [])
    useEffect(() => {
        localStorage.setItem('photoAlbum', JSON.stringify(photos))
        console.log(1)
        return () => {
        }
    }, [photos])
    const Math = useRouteMatch()
    return (
        <div className='container'>
            <Switch>
                <Route path={Math.path} exact component={PhotoPage} />
                <Route path={`${Math.path}/add`} component={AddPage} />
                <Route path={`${Math.path}/:photoId`} component={EditPage} />
            </Switch>
        </div>
    );
}

export default PhotoFeatures;