import { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';

const Form = ({ name, setName }) => {
  const [email, setEmail] = useState('');
  const [attend, setAttend] = useState('참석');
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
    const data = { name, email, attend, memo, createdAt: new Date() };

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
            <div className='inputContent flex'>
              <label>참석 여부</label>
              <div onChange={handleAttend}>
                <input name='yseorno' id='참석' type='radio' defaultChecked />
                <label htmlFor='참석'>참석</label>
                <input name='yseorno' id='불참석' type='radio' />
                <label htmlFor='불참석'>불참석</label>
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
    padding: 120px 0;
    width: 50%;
    height: 85%;
    min-height: 600px;
    max-width: 700px;
    border-radius: 20px;
    background-color: #fff;
    font-size: 30px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.text};
    line-height: 35px;
    transition: 300ms;

    .wrapContainer {
      width: 100%;

      .titleContainer {
        margin-bottom: 50px;
        font-weight: 900;
        text-align: center;
        text-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

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
        width: 50%;
        margin: 0 auto;
        padding: 0 0 20px 0;
        text-align: center;

        input {
          border: none;
          background-color: ${({ theme }) => theme.bg};
          border-radius: 15px;
          padding: 8px;
        }

        label {
          margin-right: 10px;
          font-size: 18px;
          font-weight: 700;
        }

        .inputContent {
          margin-bottom: 10px;

          &:nth-child(3) {
            margin-bottom: 30px;
          }
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .textareaContainer {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #ccc;
          padding-top: 20px;

          textarea {
            border: none;
            background-color: ${({ theme }) => theme.bg};
            border-radius: 20px;
            padding: 15px;
            width: 100%;
            height: 80px;
            resize: none;
          }
        }
      }
    }

    .btn {
      width: 25%;
      min-width: 218px;
      padding: 15px;
      background: ${({ theme }) => theme.purpleToNavyRight};

      border: none;
      border-radius: 15px;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      transition: 250ms;
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);

      &:hover {
        transform: scale(101%);
        transition: 250ms;
        background: ${({ theme }) => theme.blueToPurpleLeft};

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