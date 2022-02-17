import {Box, Container, Typography} from '@mui/material';
import {InstantSearch, SearchBox} from 'react-instantsearch-dom';
import algoliaSearch from '../../lib/algoliaService';
import {SearchResults} from '../index';
import styles from './MainSearch.module.scss';
import SearchIcon from '@mui/icons-material/Search';

type MainSearchProps = {
    searchLabel: string,
    mt: number,
    mb: number
}
export const MainSearch = ({searchLabel, mt, mb}: MainSearchProps) => {
    return (
        <Container maxWidth='lg' mt={mt} mb={mb}>
            <Box mt={mt} mb={mb}>
                <InstantSearch searchClient={algoliaSearch} indexName='news'>
                    <Box className={styles['main-search']}>
                        <Box className={styles['main-search__search-section']}>
                            <Box className={styles['main-search__search']}>
                                <Typography className={styles['main-search__searchLabel']}>{searchLabel}</Typography>
                                <SearchBox
                                    translations={{placeholder: 'Search'}}
                                    searchAsYouType={false}
                                    submit={<SearchIcon sx={{color: 'white'}}/>}/>
                            </Box>
                        </Box>
                        <Box className={styles['main-search__results']}>
                            <SearchResults />
                        </Box>
                    </Box>
                </InstantSearch>
            </Box>
        </Container>
    );
};