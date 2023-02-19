import styled from "styled-components";

export const StyledEditForm = styled.div
   `
    width:400px;
    max-width:100%;
    height:fit-content;
    z-index:1000;
    background:#fff;
    padding:20px;
    border:1px solid #000;
    border-radius:6px;
    position:relative;

    form{
    display: flex;
    flex-direction: column;
 }


 .close2{
   color:#000;
   position:absolute;
   right:10px;
   top:10px;
   cursor:pointer;
 }

 form textarea{
    width: 100%;
    max-width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    outline: none;
    padding: 0.6rem 6px;
    color: #000;
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
    // background: #1a1a1a;
    border:1px solid #494848;
    margin-top: 6px;
    font-size: 16px;
    color: #000;
    border-radius: 6px;
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

`