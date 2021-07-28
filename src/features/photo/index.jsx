import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './components/Thumbnail';
import imgThumbnail from '../../assets/image/thumbnail1.jpg'
import {
    useLocation,
    useRouteMatch,
    useHistory,
    Switch,
    Route
} from "react-router-dom";
import PhotoPage from './pages/PhotoPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
PhotoFeatures.propTypes = {

};

function PhotoFeatures(props) {
    const location=useLocation()
    const Math=useRouteMatch()
   
    return (
        <div className='container'>
            <Switch>
                <Route path={Math.path} exact component={PhotoPage}/>
                <Route path={`${Math.path}/add`}  component={AddPage}/>
                <Route path={`${Math.path}/:photoId`} component={EditPage}/>
            </Switch>
        </div>
    );
}

export default PhotoFeatures;