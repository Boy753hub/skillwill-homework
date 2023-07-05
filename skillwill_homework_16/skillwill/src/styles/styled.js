import { styled , css} from "styled-components";

// export const GlobalStyle = styled.createGlobalStyle`
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
// `;



export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  background-color: #ffffff;
  padding: 2rem;
  margin: 4rem 2rem 2rem 2rem;
  border: 1px solid black;
  height: fit-content;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 5px;
  border-bottom: 3px solid #dc5038;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: azure;
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
`;

export const Header = styled.div`
  border-bottom: 3px solid #f7ca16;
`
export const HeaderDone = styled.div`
  border-bottom: 3px solid #95cb5a;
`

export const Todos = styled.div`
  border: 1px solid #dc5038;
  border-left: 7px solid #dc5038;
  padding: 15px 8px 15px 12px;
  border-radius: 5px;
  margin: 15px 0 15px 0;
  display: flex;
  justify-content: space-between;

  ${(props)=>css`
      border: 1px solid ${props.color};
      border-left: 7px solid ${props.color};
  `}

`;

export const PPA = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;

  ${(promps)=> css`
  background-color: ${promps.color};
  `}
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;



export const DarkParagraph = styled.p`
  position: absolute;
  color: rgb(81, 255, 0);
  font-size: larger;
  right: 7rem;
  top: 2%;
`;

export const Switch = styled.label`
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 34px;
  right: 2%;
  top: 2%;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
`;

export const SliderThumb = styled.span`
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
`;

export const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider} ${SliderThumb} {
    transform: translateX(26px);
  }
`;

export const RoundedSlider = styled(Slider)`
  border-radius: 34px;

  ${SliderThumb} {
    border-radius: 50%;
  }
`;

// * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box
//   }
  
//   .formlist2{
//     display: flex;
//     flex-direction: column;
//     width: 30rem;
//     background-color: rgb(173, 228, 228);
//     padding: 2rem ;
//     margin: 4rem 2rem 2rem 2rem;
//     border: 1px solid black;
//     height: fit-content;
//   }
//   .formlist{
//     display: flex;
//     flex-direction: column;
//     width: 30rem;
//     background-color: rgb(173, 228, 228);
//     padding: 2rem;
//     margin: 4rem 2rem 2rem 2rem;
//     border: 1px solid black;
//     height: fit-content;
//   }
//   .formlist form{
//     text-align: center;
//   }
//   .formlist input{
//     width: 100%;
//     height: 2rem;
//     border-radius: 10px;
//   }
//   .formlist button{
//     all: unset;
//     cursor: pointer;
//     background-color: azure;
//     border-radius: 10px;
//     padding: 0.2rem 0.5rem 0.2rem 0.5rem;
//   }
//   .formlist2 form{
//     text-align: center;
//   }
//   .formlist2 input{
//     width: 100%;
//     height: 2rem;
//     border-radius: 10px;
//   }
//   .formlist2 button{
//     all: unset;
//     cursor: pointer;
//     background-color: azure;
//     border-radius: 10px;
//     padding: 0.2rem 0.5rem 0.2rem 0.5rem;
//   }
//   .todo{
//     border: 1px solid black;
//     padding: 8px 8px 8px 12px;
//     display: flex;
//     justify-content: space-between;
//   }
//   .ppa{
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//   }
//   .buttons{
//     display: flex;
//     gap: 12px;
//   }
//   .background{
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     background-color: #121212;
//     z-index: -1;
//   }
  
//   /* slider */
//   .dark p {
//    position: absolute;
//    color: rgb(81, 255, 0);
//    font-size: larger;
//    right: 7rem;
//    top: 2%;
//   }
//   .switch {
//     position: absolute;
//     display: inline-block;
//     width: 60px;
//     height: 34px;
//     right: 2%;
//     top: 2%;
//   }
  
//   .switch input { 
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
  
//   .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #ccc;
//     -webkit-transition: .4s;
//     transition: .4s;
//   }
  
//   .slider:before {
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     -webkit-transition: .4s;
//     transition: .4s;
//   }
  
//   input:checked + .slider {
//     background-color: #2196F3;
//   }
  
//   input:focus + .slider {
//     box-shadow: 0 0 1px #2196F3;
//   }
  
//   input:checked + .slider:before {
//     -webkit-transform: translateX(26px);
//     -ms-transform: translateX(26px);
//     transform: translateX(26px);
//   }
  
//   /* Rounded sliders */
//   .slider.round {
//     border-radius: 34px;
//   }
  
//   .slider.round:before {
//     border-radius: 50%;
//   }