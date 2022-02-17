import {connectHits} from 'react-instantsearch-dom';
import {IHit} from '../../types';
import {VerticalCard} from '../index';
import {useRouter} from 'next/router';
import {Box} from '@mui/material';
import styles from './HeaderNews.module.scss';

type HitsProps = {
    hits: IHit[]
}

const Hits = ({hits}: HitsProps) => {
    const router = useRouter()
    return (
        <Box className={styles['header-news']}>
            {
                hits.map((hit: IHit) => {
                        const title = hit.topics[0].title
                        const organizationName = hit.organization[0].fields.name
                        const {slug, name, description, imageUrl, publicationDate} = hit
                        return (
                            <div key={slug} onClick={() => router.push(`/news/${hit.slug}`)}>
                                <VerticalCard
                                    mb={2}
                                    mt={2}
                                    title={title}
                                    name={name}
                                    description={description}
                                    imageUrl={imageUrl}
                                    publicationDate={publicationDate}
                                    organizationName={organizationName}/>
                            </div>
                        );
                    }
                )
            }
        </Box>
    )
}

export const HeaderNews = connectHits(Hits);