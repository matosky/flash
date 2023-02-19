import styled from "styled-components";

export const StyledSignUpPage = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    border-radius: 5px;

    form{
        width:400px;
        max-width:100%;
    }
    form input{
        width: 100%;
        max-width: 100%;
        padding: 0.6rem 6px;
        outline: none;
        margin-top: 3px;
        font-size: 16px;
        border-radius: 6px;
    }

    .field{
        margin: 10px 0;
    }

    .firstname-field{
         border-top-width: 20px;
    }

    


    .lastname-field{
    border-top-width: 20px;
    }
    .email-field{
    border-top-width: 20px;
    }

    label{
    display: block;
    }
    .password-field{
    border-top-width: 20px;
    }
    .signup-btn{
         padding:0.35em 1.2em;
         border-radius: 5px;
         margin:20px 0;
        color: #fff;
         box-sizing: border-box;
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
   background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
         font-weight:800;
         text-align:center;
         font-size: 1.1em;
         transition: all 0.2s;
         align-items: center;
         width:100%;
         cursor: pointer;
        }
`
