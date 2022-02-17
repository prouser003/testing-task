import {ReactNode} from 'react';
import {Container} from '@mui/material';

type MainHeaderProps = {
    children: ReactNode
}
export const MainHeader = ({children}) => {
    return (
        <Container maxWidth='lg'>
            {children}
        </Container>
    )
}