import styled from 'styled-components';

const SpinnerBlock = styled.div`
    width: 138px;
    height: 138px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    :before {
        content: '';
        width: 138px;
        height: 14px;
        background: rgb(0, 0, 0);
        opacity: 0.1;
        position: absolute;
        top: 162px;
        left: 0;
        border-radius: 50%;
        animation: shadow 0.425s linear infinite;
        -o-animation: shadow 0.425s linear infinite;
        -ms-animation: shadow 0.425s linear infinite;
        -webkit-animation: shadow 0.425s linear infinite;
        -moz-animation: shadow 0.425s linear infinite;
    }

    :after {
        content: '';
        width: 138px;
        height: 138px;
        background: rgb(255, 224, 13);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 8px;
        animation: cssload-animate 0.425s linear infinite;
        -o-animation: cssload-animate 0.425s linear infinite;
        -ms-animation: cssload-animate 0.425s linear infinite;
        -webkit-animation: cssload-animate 0.425s linear infinite;
        -moz-animation: cssload-animate 0.425s linear infinite;
    }

    @keyframes cssload-animate {
        17% {
            border-bottom-right-radius: 8px;
        }
        25% {
            transform: translateY(25px) rotate(22.5deg);
        }
        50% {
            transform: translateY(50px) scale(1, 0.9) rotate(45deg);
            border-bottom-right-radius: 110px;
        }
        75% {
            transform: translateY(25px) rotate(67.5deg);
        }
        100% {
            transform: translateY(0) rotate(90deg);
        }
    }

    @-o-keyframes cssload-animate {
        17% {
            border-bottom-right-radius: 8px;
        }
        25% {
            -o-transform: translateY(25px) rotate(22.5deg);
        }
        50% {
            -o-transform: translateY(50px) scale(1, 0.9) rotate(45deg);
            border-bottom-right-radius: 110px;
        }
        75% {
            -o-transform: translateY(25px) rotate(67.5deg);
        }
        100% {
            -o-transform: translateY(0) rotate(90deg);
        }
    }

    @-ms-keyframes cssload-animate {
        17% {
            border-bottom-right-radius: 8px;
        }
        25% {
            -ms-transform: translateY(25px) rotate(22.5deg);
        }
        50% {
            -ms-transform: translateY(50px) scale(1, 0.9) rotate(45deg);
            border-bottom-right-radius: 110px;
        }
        75% {
            -ms-transform: translateY(25px) rotate(67.5deg);
        }
        100% {
            -ms-transform: translateY(0) rotate(90deg);
        }
    }

    @-webkit-keyframes cssload-animate {
        17% {
            border-bottom-right-radius: 8px;
        }
        25% {
            -webkit-transform: translateY(25px) rotate(22.5deg);
        }
        50% {
            -webkit-transform: translateY(50px) scale(1, 0.9) rotate(45deg);
            border-bottom-right-radius: 110px;
        }
        75% {
            -webkit-transform: translateY(25px) rotate(67.5deg);
        }
        100% {
            -webkit-transform: translateY(0) rotate(90deg);
        }
    }

    @-moz-keyframes cssload-animate {
        17% {
            border-bottom-right-radius: 8px;
        }
        25% {
            -moz-transform: translateY(25px) rotate(22.5deg);
        }
        50% {
            -moz-transform: translateY(50px) scale(1, 0.9) rotate(45deg);
            border-bottom-right-radius: 110px;
        }
        75% {
            -moz-transform: translateY(25px) rotate(67.5deg);
        }
        100% {
            -moz-transform: translateY(0) rotate(90deg);
        }
    }

    @keyframes shadow {
        0%,
        100% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1);
        }
    }

    @-o-keyframes shadow {
        0%,
        100% {
            -o-transform: scale(1, 1);
        }
        50% {
            -o-transform: scale(1.2, 1);
        }
    }

    @-ms-keyframes shadow {
        0%,
        100% {
            -ms-transform: scale(1, 1);
        }
        50% {
            -ms-transform: scale(1.2, 1);
        }
    }

    @-webkit-keyframes shadow {
        0%,
        100% {
            -webkit-transform: scale(1, 1);
        }
        50% {
            -webkit-transform: scale(1.2, 1);
        }
    }

    @-moz-keyframes shadow {
        0%,
        100% {
            -moz-transform: scale(1, 1);
        }
        50% {
            -moz-transform: scale(1.2, 1);
        }
    }
`;

export default function Spinner() {
    return <SpinnerBlock />;
}
