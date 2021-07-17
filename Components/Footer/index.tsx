import styled from 'styled-components';
import SocIconLink from '../SocIconLink';
import wwwIcon from '../../public/www.svg';
import facebookIcon from '../../public/facebook.svg';
import vkIcon from '../../public/vk.svg';
import youtubeIcon from '../../public/youtube.svg';
import instaIcon from '../../public/instagram.svg';
import telegramIcon from '../../public/telegram.svg';

const FooterBlock = styled.div`
    width: 100%;
    background: #303030;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
`;

const SocContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default function Footer() {
    return (
        <FooterBlock>
            <SocContainer>
                <SocIconLink
                    link='https://son-rebyonka.ru/'
                    svgIcon={wwwIcon}
                />
                <SocIconLink
                    link='https://www.facebook.com/sonrebyonka/'
                    svgIcon={facebookIcon}
                />
                <SocIconLink
                    link='https://vk.com/son_rebyonka'
                    svgIcon={vkIcon}
                />
                <SocIconLink
                    link='https://www.youtube.com/channel/UCCcXt0dONzu8f5BiWoLq1KQ/'
                    svgIcon={youtubeIcon}
                />
                <SocIconLink
                    link='https://www.instagram.com/son_rebyonka/?hl=ru'
                    svgIcon={instaIcon}
                />
                <SocIconLink
                    link='https://t.me/son_rebyonka'
                    svgIcon={telegramIcon}
                />
            </SocContainer>
        </FooterBlock>
    );
}
