import styled from "styled-components";

export const StyledSidebar = styled.div`
    
    width: 250px;
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 0 30px 10px;
    position: relative;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    .shadow{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.7;
        height: 100%;
        z-index: 4;
        color:#fff;
    }


    .logo{
        margin: 20px 0 40px 0;
        padding: 10px;
        cursor: pointer;
        color: #cc2366; 
        font-size: 24px;
        font-style: italic;
        font-weight: 800;
        color: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
        color: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        color: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    }

    .navLinks li{
        display: flex;
        align-items: center;
       margin: 40px 0 0 0;
       list-style-type: none;
       cursor:pointer;
       padding: 10px;
       transition: all 0.3s ease;
    }

    .navLinks li:hover{
        background-color: ${(props) => props.dark === "dark" ? "rgba(250, 250, 250)" : "#ebe7e7"};
        color: ${(props) => props.dark === "dark" ? "rgba(250, 250, 250)" : "#000"};
        border-radius: 24px;
    }

    .navLinks .link-icon{
        margin: 0 10px 0 0;
    }


     .moreBtn{
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 24px;
        padding: 10px 20px 10px 10px;
        transition: all 0.3s ease;
     }

   

    .moreBtn .link-icon{
        margin: 0 10px 0 0;
    }

    .more{
        position: absolute;
        bottom: 70px;
        padding: 10px 15px;
        border-radius: 6px;
        width: 100%;
        max-width: 100%;
        background-color: #eee;
    }

    .offMore{
        display: none;
    }

    .more li{
      cursor: pointer;
    }
    

    .more li{
        list-style-type: none;
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        color: ${(props) => props.dark === "dark" ? "rgba(250, 250, 250)" : "#000"};
    }


@media only screen and (max-width: 600px) {
   display: none;
}

`