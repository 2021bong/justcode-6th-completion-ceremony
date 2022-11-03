import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import styled from 'styled-components';
import { GiPartyHat } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Message = () => {
  const [list, setList] = useState();

  useEffect(() => {
    const loadData = async () => {
      const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const memoRef = collection(db, 'attend-survey');
      const allRes = await getDocs(memoRef);
      let dataList = [];
      allRes.forEach((res, i) => {
        dataList.push({
          id: res._document.key.path.segments[6],
          name: res._document.data.value.mapValue.fields.name.stringValue,
          email: res._document.data.value.mapValue.fields.email.stringValue,
          attend: res._document.data.value.mapValue.fields.attend.stringValue,
          dinner: res._document.data.value.mapValue.fields.dinner.stringValue,
          memo: res._document.data.value.mapValue.fields.memo.stringValue,
          createdAt:
            res._document.data.value.mapValue.fields.createdAt.timestampValue,
        });
      });
      const onlyJustcodeList = dataList
        .map((el) => (el.name === '' ? { ...el, name: '익명' } : el))
        .filter((el) => el.memo !== '');
      setList(onlyJustcodeList);
    };
    loadData();
  }, []);

  return (
    <Body>
      <div className='mainContainer'>
        <Link to='/' className='goToHome'>
          <GiPartyHat size='2.5rem' />
        </Link>
        <div className='titleContainer'>
          <h1>
            <span className='title'>마지막 한마디</span> 😀
          </h1>
        </div>
        <ul className='contentContainer'>
          {list &&
            list.map((memo) => {
              return (
                <li key={memo.id} className='card'>
                  <p className='name'>{memo.name}</p>
                  <p className='memo'>{memo.memo}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </Body>
  );
};

export default Message;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      to top left,
      rgb(118, 37, 202) 0%,
      rgb(224, 29, 207) 100%
    )
    no-repeat;

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
    box-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.text};
    transition: 300ms;

    @media screen and (max-width: 615px) {
      width: 90%;
      height: 85%;
      padding: 1rem;
    }

    .goToHome {
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
      color: ${({ theme }) => theme.pink};

      &:hover {
        color: ${({ theme }) => theme.blue};
      }

      &:active {
        color: ${({ theme }) => theme.purple};
      }

      @media screen and (max-width: 615px) {
        padding: 10px;
        top: 0;
        left: 0;
      }
    }

    .titleContainer {
      font-size: 2rem;
      margin-bottom: 1.875rem;
      font-weight: 900;
      text-align: center;
      text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

      @media screen and (max-width: 615px) {
        font-size: 1.5rem;
      }

      .title {
        background-image: ${({ theme }) => theme.purpleToNavyRight};
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
    }

    .contentContainer {
      width: 100%;
      height: 80%;
      padding: 30px;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 615px) {
        padding: 10px;
      }

      .card {
        width: 85%;
        min-width: 200px;
        padding: 20px;
        margin-bottom: 30px;
        border-radius: 1.25rem;
        border: 2px solid ${({ theme }) => theme.blue};
        box-shadow: 4px 4px 0.8rem rgba(0, 0, 0, 0.15);

        @media screen and (max-width: 615px) {
          width: 100%;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &:nth-child(2n) {
          border: 2px solid ${({ theme }) => theme.purple};
        }

        .name {
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 1.4rem;
          margin-bottom: 5px;
        }

        .memo {
          line-height: 1.2rem;
        }
      }
    }
  }
`;
