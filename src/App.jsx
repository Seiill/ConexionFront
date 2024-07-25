import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import Navbar from './components/navBar/NavBar';
import Sidebar from './components/navBar/sidBar';
import Home from './pages/home';
import ScrollToTopButton from './styles/styleComponents/ScrollTopButton';
import WhatsAppButton from './styles/styleComponents/whatsappButton';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Home />
      <WhatsAppButton></WhatsAppButton>
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
