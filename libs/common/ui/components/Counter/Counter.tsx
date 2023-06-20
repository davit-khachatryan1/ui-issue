import React, { FC } from 'react';
import styles from './Counter.module.scss';

interface ICounter {
    count: number;
    counterHandler: (arg0: 'decr' | 'incr') => void;
}

export const Counter: FC<ICounter> = ({ count, counterHandler }) => {
    
    return (
        <div className={styles.counter}>
            <button onClick={() => counterHandler('decr')}>-</button>
            <p>{count}</p>
            <button onClick={() => counterHandler('incr')}>+</button>
        </div>
    );
};

export default Counter;