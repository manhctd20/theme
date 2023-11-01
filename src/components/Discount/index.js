import React from 'react';
import './style.scss';
import { Button } from 'antd';

export default function Discount(props) {
    const {title, subTitle, onClick} = props;
    return (
        <div classame='discount__options'>
            <div className="discount__item">
                <div className="d-flex">
                <span className="discount__item--title">{title}</span>
                <span className="discount__item--subtitle">{subTitle}</span>
                </div>
                <Button onClick={onClick} className='btn-add'>
                    Add
                </Button>

            </div>
        </div>
     )
}