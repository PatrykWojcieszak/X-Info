import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '../../../shared/button/button';

import styles from './lauch.module.scss';
import patch from '../../../../resources/images/patch.png';

const launch = () => {
    return (
        <div className={styles.Launch}>
            <img src={patch} alt="patch"/>
            <div className={styles.Title}>
                <h3>Crew 1</h3>
                <FontAwesomeIcon icon="check-circle" />
            </div>
            <h4>10.21.2021</h4>
            <Button name="SHOW DETAILS"/>
        </div>
    );
};



export default launch;