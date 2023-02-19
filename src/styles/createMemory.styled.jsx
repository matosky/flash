import styled from "styled-components";

export const StyledCreateMemory = styled.div`

 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 border: 1px solid #000;
 background: #1a1a1a;
 width: 600px;
 max-width: 100%;
 height: fit-content;
 padding: 20px;
 z-index: 1000;
 font-size: 16px;
 border-radius: 6px;
 z-index: 20;
 color: #fff;

 h4{
   text-align: center;
   margin: 5px 0;
 }

 form{
    display: flex;
    flex-direction: column;
 }

 form textarea{
    width: 100%;
    max-width: 100%;
    border-radius: 6px;
    background: #1a1a1a;
    margin-top: 6px;
    outline: none;
    padding: 0.6rem 6px;
    color: #fff;
 }

 form .field label{
    display: block;
 }

 form .field{
    margin: 10px 0;
    border-radius: 6px;
 }

  form .field input{
    width: 100%;
    max-width: 100%;
    padding: 0.6rem 6px;
    outline: none;
    background: #1a1a1a;
    border:1px solid #494848;
    margin-top: 6px;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
 }

 form .file{
    width: fit-content;
    max-width: 100%;
    padding: 0.6rem 6px;
    border: none;
    box-shadow: none;
 }


  form button{
    padding: 0.8rem 6px;
    border: none;
    outline: none;
    border-radius: 6px;
   background: #f09433; 
   background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
   background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    color:#fff;
    cursor: pointer;
    font-size: 16px;
    margin: 8px 0;
  }

  .loadingBtn{
   opacity: 0.5;
  }


  @media only screen and (max-width: 600px) {
   width: 300px;
   z-index: 2000;
}

`