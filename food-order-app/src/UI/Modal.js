import { Fragment } from "react";
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = (props) => {
    return (
        <div className="" onClick={props.onClose} />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className="backdrop">
            {/* actual content passed between modal opening and closing tags by the component where the modal is being used  */}
            <div className="modal">{props.children}</div>
        </div>
    );
};


const portalElement = document.getElementById('overlays');

// modal using react portal: A typical use case for portals is when a parent component has an overflow: 
// hidden or z-index style, but you need the child to visually “break out” of its container. 
// For example, dialogs, hovercards, and tooltips. (ref: https://legacy.reactjs.org/docs/portals.html)
// basically locks interaction with rest of page
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;