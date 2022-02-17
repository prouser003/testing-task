import {Header, Logo, Navigation, NavList, User, Title, MainHeader, MainSearch, HeaderNews} from '../components';
import {Divider} from '@mui/material';
import contentClient from '../lib/contentfulService';
import {INewsConfig} from '../types';

type NewsProps = () => {
    newsConfig: INewsConfig
}

function News({newsConfig}: NewsProps) {
    const {title, logo, searchLabel, menuLabel} = newsConfig
    const imageUrl = logo?.fields?.file?.url
    const {height: imageHeight, width: imageWidth} = logo?.fields?.file?.details?.image

    // just in case of more items in nav
    const items = [
        {title: menuLabel, to: `/${menuLabel.toLowerCase()}`, id: '1'}
    ]

    return (
        <>
            <Header>
                <Logo mt={4} mb={4} url={imageUrl} height={imageHeight} width={imageWidth}/>
                <Divider light/>
                <Navigation>
                    <NavList items={items}/>
                    <User/>
                </Navigation>
            </Header>
            <Divider light/>
            <MainHeader>
                <Title text={title} mt={8} mb={8}/>
            </MainHeader>
            <Divider light />
            <MainSearch searchLabel={searchLabel} mt={2} mb={2} />
        </>
    );
};

export default News;

export const getServerSideProps = async (context) => {
    const newsConfig = await contentClient.getEntries({
        'content_type': 'newsConfig'
    })

    const {ttile, logo, searchLabel, menuLabel} = newsConfig?.items[0]?.fields;

    return {
        props: {
            newsConfig: {
                title: ttile,
                logo,
                searchLabel,
                menuLabel
            }
        }
    };
};
