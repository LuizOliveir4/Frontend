import React from 'react'

const ModalButton = ({type, target, text, onClick}) => {

    return (
        <button onClick={onClick} type="button" data-modal="true" data-target={target} className={`btn btn-${type}`}>
            <span>{text}</span>
        </button>
    )
}

export default ModalButton