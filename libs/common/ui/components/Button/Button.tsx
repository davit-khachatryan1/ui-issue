import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import cl from 'classnames';

interface IButton {
    children: ReactNode;
    width?: 'wide' | 'narrow';
    type: 'regular' | 'invest';
    className?: string;
    funcClick?: Function;
}

export const Button: FC<IButton> = ({children, type, width, className, funcClick}) => {
    return (
        <button onClick={()=>funcClick ? funcClick() : null} className={cl(styles.button, styles[`button--${type}`], styles[`button--${width}`], className)}>
            {children}
        </button>
    );
};

export default Button;