import Image from 'next/image';
import {Box} from '@mui/material';

type LogoProps = {
    url: string,
    height: number,
    width: number,
    mt: number,
    mb: number
};

export const Logo = ({url, height, width, mt, mb}: LogoProps) => {

    return (
        <Box mt={mt} mb={mb}>
            <Image src={`https:${url}`} width={width} height={height} alt='logo'/>
        </Box>
    );
};