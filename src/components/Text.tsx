import React from 'react'

export interface TextProps {
    text: string
}
export function Text({ text }: TextProps) {
    return <p>Hello {text}</p>
}