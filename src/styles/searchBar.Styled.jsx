import styled from "styled-components";

export const StyledSearchBarDestop = styled.div`
  

  position: fixed;
  width: 400px;
  top: 0;
  left: 0;
  max-width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${(props) => props.dark === "dark" ? "rgba(250, 250, 250)" : "#ebe7e7"};
  color: ${(props) => props.dark === "dark" ? "rgba(250, 250, 250)" : "#000"};
  padding: 20px;

  
  .top-flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-box{
    margin-top: 40px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
     background-color: #2f2e2e;
    width: 100%;
    max-width: 100%;
    padding: 6px;
    margin-bottom: 40px;
    color: #fff;
    border-radius: 6px;
  }

  .search-box .smallSearchIcon{
    position: absolute;
    color: #fff;
    margin-right: 20px;
  }

  .search-box input{
    width: 400px;
    max-width: 100%;
    padding: 10px 0 10px 5px;
    outline: none;
    margin-left: 20px;
    border: none;
    color: #fff;
    background: transparent;
  }

  .display-box{
    margin-top: 30px;
    list-style: none;
  }

   .display-box span{
    border: 1px solid #0fa89b;
    background-color: #0fa89b;
    margin-right: 8px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .fa-close{
    cursor: pointer;
  }

  .display-box li div{
    display: flex;
  }

  .display-box .avatar-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .search-link{
    cursor: pointer;
  }


`