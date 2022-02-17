import {Box, Typography} from '@mui/material';
import styles from './User.module.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const User = () => {
    return (
        <Box className={styles['user']}>
            <AccountCircleIcon className={styles['user__icon']}/>
            <Typography className={styles['user__name']}>John Doe</Typography>
        </Box>
    );
};
