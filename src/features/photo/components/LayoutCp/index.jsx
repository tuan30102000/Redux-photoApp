import React from 'react';
import PropTypes from 'prop-types';

LayoutCp.propTypes = {
    classNameCp: PropTypes.string.isRequired,
    Cpn: PropTypes.array.isRequired,
    listProp: PropTypes.object,
};

function LayoutCp(props) {
    const { classNameCp, children } = props

    return (
        <div className={`layout ${classNameCp}`}>
            <div className={`layout-box ${classNameCp}-box`}>

                {children}

            </div>
        </div>
    );
}

export default LayoutCp;