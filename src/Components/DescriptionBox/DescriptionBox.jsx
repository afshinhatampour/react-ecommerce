import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>
                    Description
                </div>
                <div className='descriptionbox-nav-box fade'>
                    Reviews (122)
                </div>
            </div>
            <div className='descriptionbox-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis enim itaque magnam nobis odit quod
                    soluta vitae. Ad autem commodi cum cupiditate debitis dolorem doloribus excepturi hic ipsa iste
                    itaque laborum libero magnam maxime modi molestiae nemo, neque odio officia officiis praesentium
                    quam quibusdam quidem sunt tempora ullam vero voluptatum!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, error et harum itaque laboriosam
                    molestiae mollitia quia quibusdam totam voluptatum!</p>
            </div>
        </div>
    );
}

export default DescriptionBox;