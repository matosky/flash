import styled from "styled-components";

export const StyledNavbarMobile = styled.nav`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: fit-content;
    padding: 0px 10px;
     background:${(props) => props.dark === "dark" ? "#000" : "#fff"};
    border-bottom: 1px solid ${(props) => props.dark === "dark" ? "#191818" : "#eee"};
    display: none;
    z-index: 500;

    .times{
        position: absolute;
        top: 20px;
        right: 20px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
    }

      .shadow{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.7;
        height: 100%;
        z-index: 10;
        color:#fff;
    }
   
    .searchShadow{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.1;
        height: 100%;
        z-index: 10;
        color:#fff;
    }

    .smallSearchIcon{
        font-weight: 100;
        color: #6b6969;
    }
    
    .logo{
        cursor: pointer;
        /* color: #313030;  */
        font-size: 20px;
        font-style: oblique;
        font-weight: 800;
        color: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
        color: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        color: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    }

    .container1{
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 60px;
    }

    a li{
        list-style: none;
    }

   .search-box{
    width: 80%;
    max-width: 100%;
    color: #eee;
    background:${(props) => props.dark === "dark" ? "#484646" : "#eee"};
    display: flex;
    align-items: center;
    margin-left: 20px;
    border-radius:6px 6px 6px 6px;
    padding: 0 10px;
   }

   .search-box input{
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 10px 5px;
    border: none;
    outline: none;
    border-radius:6px 6px 6px 6px;
    color: ${(props) => props.dark === "dark" ? "#fff" : "#000"};
    background:${(props) => props.dark === "dark" ? "#484646" : "#eee"};
   }

   .display{
    position: absolute;
    top: 100%;
    right: 10px;
    overflow-y: scroll;
    width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 6px;
    z-index: 1000;
    padding: 5px;
    border: 1px solid #eee;
   }

     .display-box{
    margin-top: 30px;
    overflow-y: scroll;
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


   @media only screen and (max-width: 600px) {
    display: block;
}
`