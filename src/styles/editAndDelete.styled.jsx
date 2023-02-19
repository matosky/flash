import styled from "styled-components";

export const StyledEditAndDeleteModal = styled.div`
  
   width:600px;
   height: 400px;
   position: fixed;
   z-index: 500;
   background-color: #fff;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   border: 1px solid #969595;
   border-radius: 6px;

   ul{
    list-style-type: none;
    margin-bottom: 30px;
   }

   ul li{
    margin-top: 10px;
    text-align: center;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    padding: 0.6rem 0.6rem;
    color: #000;
    border-bottom: 1px solid #727070;
   }

   ul li:nth-child(1){
    color: red;
   }


   span{
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    text-align: center;
    width: 100%;
    padding: 0.6rem 0.6rem;
    border-top: 1px solid #727070;
    cursor: pointer;
    color: #000;
   }

   @media only screen and (max-width: 600px) {
   width:300px;
   height: 300px;
   position: fixed;
   
}

  
`