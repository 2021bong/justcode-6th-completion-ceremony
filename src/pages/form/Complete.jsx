import styled from 'styled-components';
import JSConfetti from 'js-confetti';
import { GiPartyPopper } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const Complete = ({ name, setName }) => {
  const [shake, setShake] = useState(false);
  const [fire, setFire] = useState(false);
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    !name && setName('저코 6기');
    jsConfetti.addConfetti({ confettiNumber: 500 });

    const shakeTime = setInterval(() => {
      setShake((prev) => !prev);
      setFire((prev) => !prev);
    }, 300);

    return () => {
      clearInterval(shakeTime);
    };
  }, []);

  return (
    <Wrap>
      <div className='mainContainer'>
        <div className='contentContainer'>
          <GiPartyPopper size='3rem' className='icon' />
          <p>감사합니다!</p>
          <span className='info impact'>제출되었습니다.</span>
          <p>
            <Fire fire={fire}>🔥</Fire>
            <span className='impact'>{name}</span>님 <br />
            그동안 고생많으셨습니다.
          </p>
          <p>취직까지 화이팅!</p>
          <br />
          <p>
            수료식 때 만나요<Shakehand shake={shake}>👋</Shakehand>
          </p>
        </div>
      </div>
    </Wrap>
  );
};

export default Complete;

const Shakehand = styled.span`
  transition: 300ms;
  display: inline-block;
  transform: ${({ shake }) => (shake ? 'rotate(0)' : 'rotate(20deg)')};
`;

const Fire = styled.span`
  margin-right: 5px;
  transition: 300ms;
  display: inline-block;
  transform: ${({ fire }) => (fire ? '' : 'scale(110%) translateY(-2px)')};
`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.blueToPurpleLeft};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0;
    width: 50%;
    height: 50%;
    min-height: 600px;
    max-width: 700px;
    border-radius: 20px;
    background-color: #fff;
    font-size: 27px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.text};
    line-height: 36px;
    transition: 300ms;

    .contentContainer {
      margin-bottom: 50px;
      font-weight: 600;
      text-align: center;
      text-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

      .icon {
        color: ${({ theme }) => theme.blue};
      }

      .info {
        display: block;
        margin-bottom: 30px;
      }

      .impact {
        font-weight: 900;
        background-image: ${({ theme }) => theme.blueToPurpleLeft};
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
    }
  }
`;
