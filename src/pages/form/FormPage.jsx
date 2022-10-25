import { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';

const Form = ({ name, setName }) => {
  const [email, setEmail] = useState('');
  const [attend, setAttend] = useState('참석');
  const [dinner, setDinner] = useState('먹음');
  const [memo, setMemo] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAttend = (e) => {
    setAttend(e.target.id);
  };

  const handleDinner = (e) => {
    setDinner(e.target.id);
  };

  const handleMemo = (e) => {
    setMemo(e.target.value);
  };

  const writeData = async () => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };

    initializeApp(firebaseConfig);
    const db = getFirestore();
    const data = { name, email, attend, dinner, memo, createdAt: new Date() };

    await addDoc(collection(db, 'attend-survey'), data);
  };

  return (
    <Wrap>
      <main className='mainContainer'>
        <div className='wrapContainer'>
          <div className='titleContainer'>
            <h1 className='title'>
              <span className='impact'>
                JUSTCODE 6기 <br />
                오프라인 수료식 참가 여부 조사
              </span>
            </h1>
          </div>
          <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
            <div className='inputContent flex'>
              <label htmlFor='name'>이름</label>
              <input id='name' type='text' onChange={handleName} value={name} />
            </div>
            <div className='inputContent flex'>
              <label htmlFor='name'>이메일</label>
              <input
                id='email'
                type='text'
                onChange={handleEmail}
                value={email}
              />
            </div>
            <span className='desc'>오프라인 수료식에 참석하시나요?</span>
            <div className='inputContent flex'>
              <label>참석 여부</label>
              <div onChange={handleAttend}>
                <input name='yseorno1' id='참석' type='radio' defaultChecked />
                <label htmlFor='참석'>참석</label>
                <input name='yseorno1' id='불참석' type='radio' />
                <label htmlFor='불참석'>불참석</label>
              </div>
            </div>
            <span className='desc'>
              만약 인원이 모인다면 저녁 식사 참석 의향이 있으신가요?
            </span>
            <div className='inputContent flex'>
              <label>식사 여부</label>
              <div onChange={handleDinner}>
                <input name='yseorno2' id='먹음' type='radio' defaultChecked />
                <label htmlFor='먹음'>참석</label>
                <input name='yseorno2' id='안먹음' type='radio' />
                <label htmlFor='안먹음'>불참석</label>
              </div>
            </div>

            <div className='textareaContainer inputContent'>
              <label htmlFor='yes'>마지막으로 하고싶은 말</label>
              <textarea
                value={memo}
                onChange={handleMemo}
                name='memo'
                id='memo'
                placeholder='수료하며 마지막으로 하고싶은 말이 있다면 적어주세요! 그동안 고생하셨습니다 :)'
              />
            </div>
          </form>
        </div>
        <Link
          to='/complete'
          onClick={() => {
            writeData();
          }}
        >
          <button className='btn'>제출하기</button>
        </Link>
      </main>
    </Wrap>
  );
};

export default Form;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.purpleToNavyBottomTo};
  display: flex;
  justify-content: center;
  align-items: center;

  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3.125rem 0;
    width: 50%;
    height: 70%;
    min-height: 600px;
    max-width: 700px;
    border-radius: 1.25rem;
    background-color: #fff;
    font-size: 1.875rem;
    box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.text};
    line-height: 2.188rem;
    transition: 300ms;

    @media screen and (min-width: 414px) and (max-width: 768px) {
      width: 80%;
      height: 60%;
      padding: 2rem 0;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }

    @media screen and (max-width: 414px) {
      width: 90%;
      height: 90%;
      padding: 1rem 0;
      font-size: 1.3rem;
      line-height: 1.5rem;
    }

    @media screen and (min-height: 735px) and (max-height: 990px) {
      width: 90%;
      height: 90%;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }

    @media screen and (max-height: 735px) {
      width: 90%;
      height: 90%;
      padding: 1rem 0;
      font-size: 1.3rem;
      line-height: 1.5rem;
    }

    .wrapContainer {
      width: 100%;

      .titleContainer {
        margin-bottom: 1.875rem;
        font-weight: 900;
        text-align: center;
        text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

        .impact {
          background-image: ${({ theme }) => theme.purpleToNavyTopTo};
          background-size: 100%;
          background-repeat: repeat;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }
      }

      .formContainer {
        width: 70%;
        margin: 0 auto;
        padding-bottom: 1.25em;
        text-align: center;

        @media screen and (min-width: 414px) and (max-width: 768px) {
          width: 85%;
          padding-bottom: 0.8em;
        }

        @media screen and (max-width: 414px) {
          width: 90%;
          padding-bottom: 0.6em;
        }

        @media screen and (min-height: 735px) and (max-height: 990px) {
          padding-bottom: 0.6em;
        }

        @media screen and (max-height: 735px) {
          padding-bottom: 0.6em;
        }

        input {
          border: none;
          background-color: ${({ theme }) => theme.bg};
          border-radius: 0.938rem;
          padding: 8px;
        }

        input[type='text'] {
          width: 80%;
        }

        label {
          margin-right: 10px;
          font-size: 1.125rem;
          font-weight: 700;

          @media screen and (min-width: 414px) and (max-width: 768px) {
            font-size: 1rem;
          }

          @media screen and (max-width: 414px) {
            font-size: 0.8rem;
          }

          @media screen and (max-height: 735px) {
            font-size: 1rem;
          }
        }

        .inputContent {
          margin-bottom: 1.25rem;

          @media screen and (min-width: 414px) and (max-width: 768px) {
            margin-bottom: 0.8rem;
          }

          @media screen and (max-width: 414px) {
            margin-bottom: 0.6rem;
          }
        }

        .desc {
          display: block;
          font-size: 0.875rem;
          line-height: 1.063rem;
          color: ${({ theme }) => theme.desc};
          margin-top: 1.875rem;
          text-align: left;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .textareaContainer {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #ccc;
          padding-top: 1.25rem;

          textarea {
            border: none;
            background-color: ${({ theme }) => theme.bg};
            border-radius: 1.25rem;
            padding: 0.938rem;
            width: 100%;
            height: 5rem;
            resize: none;
          }
        }
      }
    }

    .btn {
      width: 25%;
      min-width: 218px;
      padding: 0.938rem;
      background: ${({ theme }) => theme.purpleToNavyRight};

      border: none;
      border-radius: 0.938rem;
      color: #fff;
      font-size: 1.375rem;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

      @media screen and (min-width: 414px) and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.8rem;
      }

      @media screen and (max-width: 414px) {
        font-size: 1rem;
        padding: 0.8rem;
      }

      &:hover {
        transform: scale(101%);
        transition: 250ms;
        background: ${({ theme }) => theme.blueToPurpleLeft};

        &:active {
          background: ${({ theme }) => theme.Navy};
        }
      }
    }
  }
`;
