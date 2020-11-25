import React from 'react';

import styles from './button.module.scss';

const button = ({name}: buttonProps) => {
    return (
        <button className={styles.Button}>{name}</button>
    );
};

type buttonProps = {
    name: string,
}

export default button;