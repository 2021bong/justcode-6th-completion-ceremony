import styled from 'styled-components';

const Message = () => {
  return (
    <Body>
      <div className='mainContainer'>
        <div className='titleContainer'>
          <h1>
            <span className='title'>마지막 한마디</span> 😀
          </h1>
        </div>
        <div className='contentContainer'></div>
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
    overflow: scroll;

    .titleContainer {
      margin-bottom: 1.875rem;
      font-weight: 900;
      text-align: center;
      text-shadow: 6px 6px 1.25rem rgba(0, 0, 0, 0.2);

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
    }
  }
`;
