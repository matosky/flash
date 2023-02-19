import styled from "styled-components";

export const StyledOwnMemoryPage = styled.section`
   
   width: 100%;
   overflow-y: scroll;

.container{ 
  width: 90%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  }

  header{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #aaa6a6;
    padding: 20px 0;
  }

 

  .img{
    width: 100px;
    max-width: 100%;
    height: 100px;
    border: 1px solid #dc2743;
    border-radius: 50%;
    margin: 0 20px 0 0;
  }

  .img img{
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .flex2{
    margin-bottom: 40px;
    display: flex;
    align-items: center;
  }

  .flex2 .cog{
    margin-left: 40px;
    font-size: 24px;
    color: #6a6969;
    cursor: pointer;
    display: none;
  }

  

  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 95%;
    max-width: 100%;
    padding: 40px 0 0 0;
    gap: 10px;
  }

  .grid-fill{
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .card{
    width: 100%;
    border: 1px solid #fff;
    width: fit-content;
    max-width: 100%;
    height: fit-content;
    transition: all 0.3s ease-out;
    margin: 10px;
  }

  .card:hover{
    transform: scale(1.02);
  }

  

  .ownCardImage{
    width: 350px;
    height: 300px;
    max-width: 100%;
    border-radius: 3px;
    position: relative;
  }

  .ownCardImage img{
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .settings{
        position: absolute;
        top: 5px;
        left: 5px;
        padding: 10px 5px;
        border-radius: 6px;
        width: fit-content;
        max-width: 100%;
        background-color: #eee;
        cursor: pointer;
        z-index: 1000;
        list-style-type: none;
        display: none;
  }

  .light{
    background-color: #000;
    color: #fff;
    border: 1px solid #eee;
  }

  .settings li{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        cursor: pointer;
        font-weight: 700;
  }

  .settings .setting-icon{
    margin-left: 5px;
  }


   .shadow{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        background-color: #000;
        opacity: 0.7;
        height: 100%;
        z-index: 10;
        color:#fff;
    }

    .times{
        position: absolute;
        top: 20px;
        right: 20px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
    }

@media only screen and (max-width: 600px) {
   .flex2 .cog{
    display: block;
   }

   .settings{
    display: block;
   }
  
   .grid{
    margin: 0 auto;
   }
}

`