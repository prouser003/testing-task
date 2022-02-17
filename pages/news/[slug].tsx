import {HorizontalCard} from '../../components';
import {GetServerSideProps} from 'next';
import {Box} from '@mui/material';

type ItemPageProps = {
    title: string,
    name: string,
    description: string,
    imageUrl: string,
    publicationDate: string,
    organizationName: string,
}

const ItemPage = ({data}: ItemPageProps) => {
    const {title, name, description, imageUrl, publicationDate, organizationName} = data
    return (
        <Box>
            <HorizontalCard
                mt={5}
                mb={1}
                title={title}
                name={name}
                description={description}
                imageUrl={imageUrl}
                publicationDate={publicationDate} organizationName={organizationName}/>

        </Box>
    );
};

export default ItemPage;

export async function getServerSideProps({params}: GetServerSideProps) {
    // i have here slug param from url and can retrieve actual data for card
    // const {slug} = params

    const data = {
        title: 'This is title',
        name: 'Some name',
        description: 'Lorem ipsum, or ipsum as it is sometimes known, is dummy text used in laying out print, graphic' +
            ' or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought' +
            ' to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.' +
            ' It usually begins with:',
        imageUrl: 'https://www.verywellmind.com/thmb/Cc3MW0HO4ULNOa1JYzX9wxrwegY=/2121x1414/filters:fill(ABEAC3,1)/GettyImages-161539539-5bfaadf9f2204449a18be6c2d90a566c.jpg',
        publicationDate: Date.now(),
        organizationName: 'Verywell'
    }
    return {
        props: {data},
    }
}