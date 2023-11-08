import React from "react";

interface Props {
    className?:string,
    onClick?: () => void;
}

const CloseIcon = ({className, onClick}:Props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M6 6L18.7742 18.7742" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 18.7744L18.7742 6.00022" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default CloseIcon;