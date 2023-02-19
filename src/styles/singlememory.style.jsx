import styled from "styled-components";

export const StyledSingleMemoryPage = styled.div`
   
    position: relative;
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  

    .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    max-width: 65%;
    height: 650px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    box-shadow: rgba(143, 143, 144, 0.15) 0px 48px 100px 0px;
    z-index: 10;
    border-radius: 6px;
    }


      .shadow{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.5;
        height: 100%;
        z-index: 5;
        color:#fff;
    }

        .shadow2{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.5;
        height: 100%;
        z-index: 20;
        color:#fff;
    }

    .close{
        position: absolute;
        right: 40px;
        top: 30px;
        font-size: 24px;
        cursor: pointer;
    }

    

    .left {
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .left .img-box{
        height: 100%;
    }

    .left img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .right {
    width: 100%;
    position: relative;
    display: flex;
    padding: 5px;
    overflow-y: scroll;
    flex-direction: column;
    background: #fff;
    z-index: 4000;
    }

    .right .top{
        position: sticky;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ada7a7;
        padding: 20px 0;
    }

    .right .comment-scroll{
        overflow-y: scroll;
    }

    .right .desc{
        width: 100%;
        max-width: 100%;
        height: fit-content;
        padding: 20px 5px;
    }

    .comments{
        margin-top: 20px;
        width: 100%;
        max-width: 100%;
        height: fit-content;
        padding-top: 10px;
    }

    .commentBox{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
         box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 5px;
        max-width: 100%;
    }

    .icons{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 0 10px;
    }

    .icons .one, .two{
        font-size: 24px;
    }

    .likes{
        margin-bottom: 40px;
    }

    .input-field{
        border-top: 1px solid #716f6f;
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;
    }
    .input-field .postBtn{
        cursor: pointer;
    }

    .input-field input{
        width: 100%;
        height: 40px;
        border-radius: 6px;
        border: none;
        outline: none;
    }

@media only screen and (max-width: 600px) {
    .container{
      grid-template-columns: 1fr;
    }
}

`