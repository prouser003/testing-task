import {Box, Divider, Typography} from '@mui/material';
import styles from './VerticalCard.module.scss';
import {getDateString} from '../../utils';

type VerticalCardProps = {
    title: string,
    name: string,
    imageUrl: string,
    publicationDate: string,
    organizationName: string,
    mb: number,
    mt: number
}

export const VerticalCard = ({title, name, imageUrl, publicationDate, organizationName, mb, mt}: VerticalCardProps) => {
    return (
        <Box mt={mt} mb={mb} className={styles['vertical-card']}>
            <Box className={styles['vertical-card__image-wrap']}>
                <img className={styles['vertical-card__image']} src={imageUrl} alt={`Image for ${name}`}/>
            </Box>
            <Box className={styles['vertical-card__content']}>
                <Typography className={styles['vertical-card__title']}>{title}</Typography>
                <Typography className={styles['vertical-card__name']}>{name}</Typography>
                <Box className={styles['vertical-card__footer']}>
                    <Typography
                        className={styles['vertical-card__publication-date']}>{getDateString(publicationDate)}</Typography>
                    <Divider light className={styles['vertical-card__divider']} orientation='vertical'/>
                    <Typography className={styles['vertical-card__organization-name']}>{organizationName}</Typography>
                </Box>
            </Box>
        </Box>
    )
}