import Image from 'next/image';
import styled from 'styled-components';

const StyledImg = styled(Image)`
    opacity: 0.8;

    :hover {
        opacity: 1;
    }
`;

const Link = styled.a`
    height: 34px;
`;

interface SocIconType {
    link: string;
    svgIcon: any;
}

export default function SocIconLink({ link, svgIcon }: SocIconType) {
    return (
        <Link href={link} target='_blank' rel='noreferrer'>
            <StyledImg src={svgIcon} alt='icon' width={34} height={34} />
        </Link>
    );
}
