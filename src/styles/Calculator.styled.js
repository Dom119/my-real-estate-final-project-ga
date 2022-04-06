import styled from "styled-components";

export const StyledCalculator = styled.div`
    >div{
        display: flex;
        flex-direction:row;
        >div{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center
        }
        h1{
            font-size: 70px;
            color: blue;
        }
    }
    button{
        width: auto;
        padding: 10px 20px;
    }
`