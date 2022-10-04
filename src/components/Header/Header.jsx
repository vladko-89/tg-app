import React, {useEffect} from 'react';
import cls from './Header.module.css'
import {Button} from "../Button/Button";

const tg = window?.Telegram?.WebApp

export const Header = () => {


    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }
    return (
        <header className={cls.header}>
            <Button callback={onClose} text="Закрыть" />
            <span>{tg.initDataUnsafe?.user?.username}</span>
        </header>
    )
}