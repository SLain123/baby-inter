import styled from 'styled-components';

const FooterBlock = styled.div`
    width: calc(100% - 2px);
    border: red 1px solid;
    position: relative;
    bottom: 0;
    left: 0;
`;

export default function Footer() {
    return <FooterBlock>Some footer here</FooterBlock>;
}
