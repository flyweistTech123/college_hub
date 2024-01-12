import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './ShortList.css'
import location from '../../../Images/loaction.png'
import common2 from '../../../Images/common1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';





const StarRating = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const isFilled = i < rating;
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    color={isFilled ? '#ffd700' : '#ccc'}
                />
            );
        }
        return stars;
    };

    return <div>{renderStars()}</div>;
};


const ShortList = (props) => {

    const navigate = useNavigate()


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Body>
                <div className='shortli6'>
                    <p>College Selected (1)</p>
                    <hr />
                    <div className="shortli5">
                        <button  onClick={() => navigate("/cart")} >Next</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ShortList;
