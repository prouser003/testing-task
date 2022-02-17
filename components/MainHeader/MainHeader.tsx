import {ReactNode} from 'react';
import {Container} from '@mui/material';
import algoliaSearch from '../../lib/algoliaService';
import {InstantSearch, Configure} from 'react-instantsearch-dom';
import {HeaderNews} from '../index';

type MainHeaderProps = {
    children: ReactNode
}

export const MainHeader = ({children}: MainHeaderProps) => {
    return (
        <Container maxWidth='lg'>
            {children}
            <InstantSearch searchClient={algoliaSearch} indexName='news'>
                <Configure hitsPerPage={3}/>
                <HeaderNews />
            </InstantSearch>
        </Container>
    );
};