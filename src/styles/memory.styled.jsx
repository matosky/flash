import styled from "styled-components";

export const StyledMemory = styled.div`

.row{
    padding: 0 8px;
}
    .icon-bar{
        width: 100%;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        margin: 5px 0;
        border-top: 1px solid #eee;
    }

    .liked{
        width: 100%;
        max-width: 100%;
        font-size: 10px;
        padding: 5px 0;
    }

    .liked .small-thumb{
        font-size: 12px;
        color: red;
    }

    .com-icon{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;
        border-radius: 2px;
    }

    .com-icon:hover{
        background: #eae8e8;
        color: #000;
    }

    .like-holder{
        position: relative;
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
    }

    .off-heart{
        position: absolute;
        color: #000;
        font-size: 24px;
        cursor: pointer;
        z-index: 5;
        background: #fff;
        transition: all 0.2s ease-out;
    }

    .off-heart:hover{
        transform: scale(1.1);
        color: red;
    }

     .on-heart{
        position: absolute;
        color: red;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.2s ease-out;
    }
    .on-heart:hover{
        transform: scale(1.1);
    }


    .hideLike{
        display: none;
    }

    .mainBox{
        display: none;
    }

    .commentBox{
        width: 100%;
        max-width: 100%;
    }

    .showComment{
        display: block;
    }

    .commentBox input{
        width: 100%;
        max-width: 100%;
        padding: 10px 0px 10px 20px;
        border-radius: 24px;
        margin-bottom: 5px;
    }

    .comBtn{
        width: fit-content;
        height: fit-content;
        background: #000;
        color: #fff;
        padding: 0.1rem 0.8rem;
        font-size: 12px;
        border-radius: 6px;
        cursor: pointer;
    }


    .persons{
        margin-top: 15px;
    }

    .persons .individual{
        margin: 10px 0;
        display: flex;
    }

    .commenterAvatar{
        width: 30px;
        height: 30px;
        max-width: 100%;
        border-radius: 50%;
        margin-right: 8px;
    }

    .realCom{
        width: 100%;
        max-width: 100%;
        padding: 3px 0 10px 0;
        background-color: #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`