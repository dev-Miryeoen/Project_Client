import styled from "styled-components";
import theme from "../../global/theme";

const PALLETE = theme.PALETTE
const S = {};

    S.NeedLoginBox = styled.div`
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        & .needLogin{
            display: flex;
            flex-direction: column;
            align-items: center;
            & svg{
                position: relative;
                top: -30px;
                left: 0;
                font-size: 200px;
                & path{
                    fill: ${PALLETE.gray[100]}
                }
            }
            & h1{
                font-size: 40px;
                margin-bottom: 40px;
                color: ${PALLETE.yellow};
                
            }
            & button{
                
            }
        }
    `;


export default S;