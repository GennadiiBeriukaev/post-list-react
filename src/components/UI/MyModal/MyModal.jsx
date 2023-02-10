import React from 'react';
import cl from './MyModale.module.css'

const MyModal = ({props}) => {
    return(
        <div className={cl.MyModal}>
            <div className={cl.myModalContent}>

            </div>
        </div>
    );
};

export default MyModal;