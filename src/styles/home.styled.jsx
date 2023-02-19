import styled from "styled-components";

export const StyledHome = styled.div`
  
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  background-color: ${(props) => props.dark === "dark" ? "#000" : "#fff"};
  color:${(props) => props.dark === "dark" ? "#fff" : "#000"};


  a{
    text-decoration: none;
    color:${(props) => props.dark === "dark" ? "#fff" : "#000"};
  }

  .card-roll{
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    scroll-behavior: smooth;
  }

  .headline{
    width: 100%;
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
     background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
   background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    padding: 3px;
    border-radius: 0 0 50% 50%;
    font-style: oblique;
    position: relative;
    cursor: pointer;
    margin-bottom: 60px;
  }

  .headline span{
    position: absolute;
    top: 100%;
    left: 50%;
    height: fit-content;
    right: 0;
    color: #fff;
    border-radius: 0 0 3px 3px;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
   background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    width: fit-content;
    padding: 10px;
    cursor: pointer;
  }

  .top-top p{
    margin: 5px 0 0 0;
    font-size: 14px;
  }

  .rows1{
     border-bottom: 1px solid ${(props) => props.dark === "dark" ? "#1f1e1e" : "#eee"};
  border-left: 1px solid ${(props) => props.dark === "dark" ? "#1f1e1e" : "#eee"};
  border-right: 1px solid ${(props) => props.dark === "dark" ? "#1f1e1e" : "#eee"};
    background-color: ${(props) => props.dark === "dark" ? "#000" : "#fff"};
  color:${(props) => props.dark === "dark" ? "#fff" : "#000"};
  }

  .sectin-div h1 {
  color:${(props) => props.dark === "dark" ? "#fff" : "#000"};
}

.sectin-div p {
   color:${(props) => props.dark === "dark" ? "#fff" : "#000"};
}


@media only screen and (max-width: 600px) {
   .headline{
    display: none;
   }
}

`
