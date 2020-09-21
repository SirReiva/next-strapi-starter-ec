import React, { FC } from 'react';

type ButtonProps = {
    color?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
    size?: 'e-large' | 'large';
    disable?: boolean;
    border?: boolean;
    radius?: boolean;
    circle?: boolean;
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
    submit?: boolean;
    className?: string;
};

export const Button: FC<ButtonProps> = ({
    children,
    size = '',
    color = 'default',
    className = '',
    disable = false,
    border = false,
    radius = false,
    circle = false,
    onClick,
    submit,
}) => {
    if (onClick)
        return (
            <button
                onClick={onClick}
                className={`genric-btn ${color}${border ? '-border' : ''} ${
                    radius ? 'radisu' : ''
                } ${circle ? 'circle' : ''} ${
                    disable ? 'disable' : ''
                } ${size} ${className}`}
            >
                {children}
            </button>
        );
    if (submit)
        return (
            <button
                type="submit"
                className={`genric-btn ${color}${border ? '-border' : ''} ${
                    radius ? 'radisu' : ''
                } ${circle ? 'circle' : ''} ${
                    disable ? 'disable' : ''
                } ${size} ${className}`}
            >
                {children}
            </button>
        );
    return (
        <button
            className={`genric-btn ${color}${border ? '-border' : ''} ${
                radius ? 'radisu' : ''
            } ${circle ? 'circle' : ''} ${
                disable ? 'disable' : ''
            } ${size} ${className}`}
        >
            {children}
        </button>
    );
};
