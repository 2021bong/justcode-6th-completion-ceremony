import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';
import FirstPage from './pages/home/FirstPage';
import Home from './pages/home/Home';
import Form from './pages/form/FormPage';
import Complete from './pages/form/Complete';
import Message from './pages/message/Message';

const Router = () => {
  const [name, setName] = useState('');
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/home' element={<Home />} />
          <Route
            path='/form'
            element={<Form name={name} setName={setName} />}
          />
          <Route
            path='/complete'
            element={<Complete name={name} setName={setName} />}
          />
          <Route path='/message' element={<Message />} />
          <Route path='*' element={<FirstPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
