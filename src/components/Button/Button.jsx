import React from 'react';

import cls from './Button.module.css';

export const Button = ({collback, text}) => {
    return (
        <button className={cls.button} onClick={collback}>{text}</button>
    )
}