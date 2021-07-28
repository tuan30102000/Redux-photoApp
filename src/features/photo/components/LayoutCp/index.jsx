import React from 'react';
import PropTypes from 'prop-types';

LayoutCp.propTypes = {
    classNameCp: PropTypes.string.isRequired,
    Cpn: PropTypes.array.isRequired,
    listProp: PropTypes.object,
};

function LayoutCp(props) {
    const { classNameCp, Cpn, listProp } = props
    
    return (
        <div className={`layout ${classNameCp}`}>
            <div className={`layout-box ${classNameCp}-box`}>

{
    Cpn.map(function(Item,index){
        return <Item key={index}/>
    })
}
               
            </div>
        </div>
    );
}

export default LayoutCp;