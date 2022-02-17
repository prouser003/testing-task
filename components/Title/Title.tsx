import styles from './Title.module.scss'
import {Box, Typography} from '@mui/material';

type TitleProps = {
    text: string;
    mt: number;
    mb: number;
}

export const Title = ({text, mt, mb}: TitleProps) => {
    return (
        <Box mt={mt} mb={mb}>
            <Typography className={styles.title}>
                {text}
            </Typography>
        </Box>
    )
}