import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHandIndexThumb } from 'react-icons/bs';
import { AiTwotoneContainer } from 'react-icons/ai';
import styled from 'styled-components';

const Home = () => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkTime = setInterval(() => {
      setBlink((prev) => !prev);
    }, 600);

    return () => {
      clearInterval(blinkTime);
    };
  }, []);

  return (
    <Wrap>
      <main className='mainContainer'>
        <Link to='/message'>
          <AiTwotoneContainer
            className='messageIcon'
            size='1.8rem'
            title='모두의 메세지 보러가기'
          />
        </Link>
        <div className='titleContainer'>
          <h1 className='title'>
            <span className='impact'>
              JUSTCODE 6기 <br />
              오프라인 수료식 일정
            </span>
          </h1>
        </div>
        <div className='contentContainer'>
          <p className='content'>
            시간 : <b>2022년 10월 28일 금요일 오후 5시</b>
          </p>
          <p className='content'>
            장소 : <b>위워크 선릉 2호점 회의실</b>
          </p>
          <p className='content'>
            드레스 코드 : <b>할로윈</b>
            <span className='desc'>
              그냥 오셔도 됩니다. <br />
              샤이걸&샤이뽀이들을 위한 머리핀을 준비했어요 ;D
            </span>
          </p>
        </div>
        <Hand size='2rem' $blink={blink} />
        <Link to='/form'>
          <button className='btn'>참석 여부 알리기</button>
        </Link>
      </main>
    </Wrap>
  );
};

export default Home;

const Hand = styled(BsHandIndexThumb)`
  margin-bottom: 1.25rem;
  transform: ${({ blink }) =>
    blink
      ? 'translateY(-3px) rotate(180deg)'
      : 'translateY(5px) rotate(180deg)'};
  opacity: ${({ $blink }) => ($blink ? 0 : 1)};
  visibility: ${({ $blink }) => ($blink ? 'hidden' : 'visible')};
  transition: 200ms;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.blueToPurpleRight};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 70%;
    min-height: 600px;
    padding: 3.125rem;
    border-radius: 1.25rem;
    background-color: #fff;
    font-size: 2.063rem;
    box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.text};
    line-height: 2.5rem;
    transition: 300ms;

    @media screen and (min-width: 414px) and (max-width: 909px) {
      transition: 300ms;
      width: 70%;
      font-size: 1.75rem;
      padding: 1.875rem;
      line-height: 2.188rem;
    }

    @media screen and (min-width: 414px) and (max-width: 599px) {
      transition: 300ms;
      width: 70%;
      line-height: 2.188rem;
      padding: 1.25rem 0;
    }

    @media screen and (max-width: 414px) {
      transition: 300ms;
      width: 90%;
      font-size: 1.688rem;
      padding: 1.125rem 0;
    }

    .messageIcon {
      position: absolute;
      top: 1rem;
      left: 2rem;
      margin-top: 15px;
      cursor: pointer;
      transition: all 0.3s;
      color: ${({ theme }) => theme.purple};

      &:hover {
        color: ${({ theme }) => theme.blue};
      }

      &:active {
        color: ${({ theme }) => theme.pink};
      }

      @media screen and (max-width: 449px) {
        top: 0.5rem;
        left: 1rem;
      }
    }
    .titleContainer {
      width: 70%;
      border-bottom: 1px solid #ccc;
      margin-bottom: 2.5rem;

      .title {
        margin-bottom: 1.875rem;
        font-weight: 900;
        text-align: center;
        text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

        .impact {
          background-image: ${({ theme }) => theme.blueToPurpleRight};
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }
      }
    }

    .contentContainer {
      text-align: center;
      margin-bottom: 1.875rem;
      font-size: 1.25rem;

      .content {
        margin-bottom: 1.875rem;

        &:last-child {
          margin-bottom: 0;
          line-height: 1.875rem;
        }
      }

      .desc {
        display: block;
        font-size: 0.875rem;
        line-height: 1.063rem;
        color: ${({ theme }) => theme.desc};
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        font-size: 1.25rem;
        line-height: 1.25rem;
      }

      @media screen and (min-width: 414px) and (max-width: 599px) {
        line-height: 2.188rem;
        font-size: 1.125rem;
      }

      @media screen and (max-width: 413px) {
        font-size: 1.125rem;
        line-height: 1.813rem;
      }
    }

    .btn {
      width: 25%;
      background: ${({ theme }) => theme.blueToPurpleLeft};
      min-width: 218px;
      padding: 15px;
      border: none;
      border-radius: 15px;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${({ theme }) => theme.purpleToNavyRight};
        transition: 250ms;
        transform: scale(101%);

        &:active {
          background: ${({ theme }) => theme.Navy};
        }
      }

      @media screen and (min-width: 414px) and (max-width: 909px) {
        font-size: 1.125rem;
        padding: 0.813rem;
      }

      @media screen and (max-width: 413px) {
        font-size: 1.125rem;
        margin-bottom: 1.875rem;
        padding: 0.75rem;
      }
    }
  }
`;
