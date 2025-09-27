import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  const styles = {
    app: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Arial', sans-serif",
      lineHeight: 1.6,
      color: '#333',
      overflowX: 'hidden',
      minHeight: '100vh'
    }
  };

  // Global CSS injection
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: '#333;
        overflow-x: hidden;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      .fade-in {
        animation: fadeIn 0.8s ease-in-out;
      }
      
      .slide-up {
        animation: slideUp 0.8s ease-out;
      }
      
      .slide-right {
        animation: slideRight 0.8s ease-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes slideRight {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.app}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
