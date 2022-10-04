import React, {useEffect} from 'react';
import cls from './Header.module.css'
import {Button} from "../Button/Button";

export const Header = () => {
    const tg = window.Telegram.WebApp

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }
    return (
        <header className={cls.header}>
            <Button callback={onClose} text="Закрыть" />
            <span>{tg.initDataUnsafe?.user?.userName}</span>
        </header>
    )
}