import styled from "styled-components";
import f1 from "../images/f1.jpg"
import f2 from "../images/f2.jpg"
import f3 from "../images/f3.jpg"

export const StyledLanding = styled.div`

height: 100vh;
min-height: 100%;
background-color: #fff;


&::after{
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  background-color: #000;
  z-index: 1;
}


  
  nav{
    width: 90vw;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;
    z-index: 20;
  }

  nav .logoLan{
    color: #dc2743;
    font-size: 32px;
    font-style: italic;
}

  header{
    position: relative;
    z-index: 100;
    margin-bottom: 80px;
    width: 100vw;
    max-width: 100%;
    z-index: 20;
    /* border-bottom: 1px solid #eee; */
  }

  section{
    width: 90vw;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  a{
    text-decoration: none;
    padding: 12px 40px;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 24px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }


  section .top{
    width: fit-content;
    height: fit-content;
        background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    text-align: center;
    color: #fff;
    border-radius: 24px;
    padding: 20px;
    z-index: 40;
    margin-bottom: -80px;
  }

   section > div > h2{
     font-size: 32px;
  }

   section > div > p{
   color: #fff;
   margin-top: 10px;
   font-size: 1.2rem;
   font-weight: 700;
  }

  button{
    padding: 15px 64px;
    width: 60%;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 24px;
    margin-top: 30px;
    cursor: pointer;
    color: #000;
    font-weight: 700;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  button:hover{
    color: #000;
    opacity: 0.6;
  }

  .boxLan{
    position: relative;
    width: 100%;
    height: 100%;
  }


  .boxi{
    position: absolute;
    width: 300px;
    max-width: 100%;
    border-radius: 24px;
    height: 300px;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }

  .boxi:hover{
    transform: scale(0.9);
  }


   .box2{
    top: -40px;
    right: 20px;
    height: 400px;
   background-image: url(${f1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

   .box4{
    top: -40px;
    left: 20px;
    height: 400px;
     background-image: url(${f2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

   .box5{
    top: 30%;
    left: 40%;
    transform: translateX(-50% -50%);
    height: 400px;
  background-image: url(${f3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .userColor{
    color: #fff;
    font-weight: 700;
  }

  @media only screen and (max-width: 600px) {
    .box2{
        display: none;
    }
     .box4{
        display: none;
    }

  .box5{
    top: 30%;
    left: 0;
    width: 100%;
  }
}
 
`