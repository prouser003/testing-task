import {connectHits} from 'react-instantsearch-dom'
import {HorizontalCard} from '../index';
import {IHit} from '../../types';
import {Divider, Typography} from '@mui/material';
import {useRouter} from 'next/router';
import styles from './SearchResults.module.scss'
type HitsProps = {
    hits: IHit[]
};

const Hits = ({hits}: HitsProps) => {
    const router = useRouter()
    return (
        <>
            <Typography className={styles['resources-found']}>
                {hits.length} total Resources Found
            </Typography>
            <Divider light />
            {hits.map((hit: IHit) => {
                const title = hit.topics[0].title
                const organizationName = hit.organization[0].fields.name
                const {slug, name, description, imageUrl, publicationDate} = hit
                return (
                    <div key={slug} onClick={() => console.log(hit)}>
                        <HorizontalCard
                            mb={3}
                            mt={3}
                            title={title}
                            name={name}
                            description={description}
                            imageUrl={imageUrl}
                            publicationDate={publicationDate}
                             organizationName={organizationName}/>
                        <Divider />
                    </div>
                );
                }
            )}
        </>
    );
};

export const SearchResults = connectHits(Hits);