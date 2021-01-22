import styled from "styled-components";

export const StyledRibbon = styled.div`

 
  width: 130px;
  height: 35px;
  transform: rotate(45deg);
  z-index: -1;
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