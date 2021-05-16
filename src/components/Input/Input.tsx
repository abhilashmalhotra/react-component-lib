import React from 'react';
import './Input.css'

export type InputProps = {
    size: string;
    placeholder: string;
    value: string;
    rest?: Object;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({ size, placeholder, value, onChange, rest, }: InputProps) {
    return <input className={`input ${size}`} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
}