import styles from './HorizontalCard.module.scss';
import {Box, Divider, Typography} from '@mui/material';
import {getDateString} from '../../utils';

type HorizontalCardProps = {
    title: string,
    name: string,
    description: string,
    imageUrl: string,
    publicationDate: string,
    organizationName: string,
    mb: number,
    mt: number
}
export const HorizontalCard = ({
       title,
       name,
       description,
       imageUrl,
       publicationDate,
       organizationName,
       mt,
       mb
    }: HorizontalCardProps) => {
    return (
        <Box mt={mt} mb={mb} className={styles['horizontal-card']}>
            <Box className={styles['horizontal-card__image-wrap']}>
                <img className={styles['horizontal-card__image']} src={imageUrl} alt={`Image for ${name}`}/>
            </Box>
            <Box className={styles['horizontal-card__content']}>
                <Typography className={styles['horizontal-card__title']}>{title}</Typography>
                <Typography className={styles['horizontal-card__name']}>{name}</Typography>
                <Typography className={styles['horizontal-card__description']}>{description}</Typography>
                <Box className={styles['horizontal-card__footer']}>
                    <Typography className={styles['horizontal-card__publication-date']}>{getDateString(publicationDate)}</Typography>
                    <Divider light className={styles['horizontal-card__divider']} orientation='vertical'/>
                    <Typography className={styles['horizontal-card__organization-name']}>{organizationName}</Typography>
                </Box>
            </Box>
        </Box>
    )
}