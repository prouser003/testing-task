import {Header, Logo, Navigation, NavList, User} from '../components';
import {Divider} from '@mui/material';

const items = [
    {title: 'News', to: '/news', id: '1'}
]

function News() {
    return (
        <>
            <Header>
                <Logo />
                <Divider light/>
                <Navigation>
                    <NavList items={items}/>
                    <User/>
                </Navigation>
            </Header>
            <Divider light/>
        </>
    );
};

export default News;

export const getServerSideProps = async (context) => {
    return {
        props: {}
    };
};
