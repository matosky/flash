import styled from "styled-components";

export const StyledFooterMobile = styled.div`
  background:${(props) => props.dark === "dark" ? "#000" : "#fff"};
  border-top: 1px solid ${(props) => props.dark === "dark" ? "#292828" : "#eee"};
  position: fixed;
  bottom: 0;
  width: 100vw;
  left: 0;
  padding: 10px 40px 20px 40px;
  display: none;
  z-index:1;

  

  .flex {
    display: flex;
    width: 90%;
    max-width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
  }

  .round {
    width: 30px;
    height: 30px;
    max-width: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .icon {
    font-size: 18px;
      color:${(props) => props.dark === "dark" ? "#fff" : "#000"};
  }
  

 

@media only screen and (max-width: 600px) {
    display: block;
}

`
