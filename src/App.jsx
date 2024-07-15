import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Home from './pages/home'
import theme from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyles'
import { Normalize } from 'styled-normalize';
import Navbar from './components/navBar/NavBar';
import Sidebar from './components/navBar/sidBar';
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
    return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Home/>
    </ThemeProvider>
  )
}

export default App
