import {ReactNode} from 'react';
import {Box} from '@mui/material';
import styles from './Navigation.module.scss';

type NavigationProps = {
    children: ReactNode
};

export const Navigation = ({children}: NavigationProps) => {
    return (
        <Box className={styles['navigation']}>
            {children}
        </Box>
    );
};
