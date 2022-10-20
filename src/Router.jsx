import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';
import FirstPage from './pages/home/FirstPage';
import Home from './pages/home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
