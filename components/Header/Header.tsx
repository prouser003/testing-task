import {Container} from '@mui/material';
import {ReactNode} from 'react';

type HeaderProps = {
    children: ReactNode
}

export const Header = ({children}: HeaderProps) => {
    return (
        <Container maxWidth='lg'>
            {children}
        </Container>
    );
};