import React from 'react';
import '../Button/Button.css'

export type ButtonProps = {
    children: React.ReactNode;
    variant: string;
    onClick: () => void;
}

export function Button({ children, variant, onClick }: ButtonProps): JSX.Element {
    return <button className={`btn ${variant}`} onClick={onClick}>{children}</button>
}