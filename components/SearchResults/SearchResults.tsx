import {connectInfiniteHits} from 'react-instantsearch-dom'
import {HorizontalCard} from '../index';
import {IHit} from '../../types';
import {Divider, Typography} from '@mui/material';
import {useRouter} from 'next/router';
import styles from './SearchResults.module.scss'
import {useEffect} from 'react';

type HitsProps = {
    hits: IHit[],
    hasMore: any,
    refineNext: any
};

const Hits = ({hits, hasMore, refineNext}: HitsProps) => {

    let sentinel: any = null;

    const onSentinelIntersection = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting && hasMore) {
                refineNext();
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(onSentinelIntersection)
        observer.observe(sentinel)
        return () => {
            observer.disconnect()
        };
    });

    return (
        <>
            <Typography className={styles['resources-found']}>
                {hits.length} total Resources Found
            </Typography>
            <Divider light/>
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
                            <Divider/>
                        </div>
                    );
                }

            )}
            <div style={{height: '100px'}}
                 className="ais-InfiniteHits-sentinel"
                 ref={c => (sentinel = c)}
            />
        </>
    );
};

export const SearchResults = connectInfiniteHits(Hits);