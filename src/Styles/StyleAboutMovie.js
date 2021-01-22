import styled from "styled-components";

export const StyledRating = styled.div`
    margin-top: 50px;
    height: 50px;
    width: 150px;
    background-color: ${ props => {
        if (props.rating === 0){
            return "grey";
        }else if(props.rating < 50){
            return "Red";
        }else if(props.rating >= 50 && 70 > props.rating){
            return "yellow";
        }else{
            return "green";
        }
    }};
`;
