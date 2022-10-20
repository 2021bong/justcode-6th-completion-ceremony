import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

const FirstPage = () => {
  useEffect(() => {
    jsConfetti.addConfetti({ confettiNumber: 600 });
    const confettiTime = setInterval(() => {
      jsConfetti.addConfetti({ confettiNumber: 600 });
    }, 4000);
    return () => {
      clearInterval(confettiTime);
    };
  }, []);

  return (
    <Wrap>
      <main className='mainContainer'>
        <img src='main-face.png' alt='축하하는 얼굴' className='faceImg' />
        <h1 className='title'>
          환영합니다.
          <br />
          <span className='impact'>JUSTCODE 6기 오프라인 수료식</span>으로
          <br />
          초대합니다 :D
        </h1>
        <Link to='/home'>
          <button className='btn'>확인하기</button>
        </Link>
      </main>
    </Wrap>
  );
};

export default FirstPage;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.blueToPurpleRight};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    height: 70%;
    min-height: 570px;
    padding: 50px;
    border-radius: 20px;
    background-color: #fff;
    font-size: 33px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);

    @media screen and (min-width: 414px) and (max-width: 909px) {
      font-size: 28px;
      padding: 30px;
    }

    @media screen and (max-width: 414px) {
      width: 90%;
      font-size: 24px;
      padding: 15px;
    }

    .faceImg {
      width: 18rem;

      @media screen and (max-width: 413px) {
        width: 16rem;
      }
    }

    .title {
      margin-top: -20px;
      line-height: 40px;
      font-weight: 900;
      text-align: center;
      text-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

      .impact {
        background-image: ${({ theme }) => theme.blueToPurpleLeft};
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        line-height: 35px;
      }

      @media screen and (min-width: 414px) and (max-width: 599px) {
        line-height: 35px;
      }

      @media screen and (max-width: 413px) {
        line-height: 29px;
      }
    }

    .btn {
      width: 25%;
      min-width: 218px;
      padding: 15px;
      margin-top: 10px;
      background: ${({ theme }) => theme.blueToPurpleLeft};
      border: none;
      border-radius: 15px;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${({ theme }) => theme.purpleToNavyRight};
        transform: scale(102%);
        font-size: 23px;
        transition: 250ms;

        &:active {
          background: ${({ theme }) => theme.Navy};
        }
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        font-size: 18px;
        padding: 13px;
      }

      @media screen and (max-width: 413px) {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 12px;
      }
    }
  }
`;
