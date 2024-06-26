import React,{useState, useEffect} from 'react';
import './ColorChangeButton.scss';

const ColorChangeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
   useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--global-backcolor', 'rgb(30, 29, 38)');
    root.style.setProperty('--global-fontcolor', 'white');
    root.style.setProperty('--global-decocolor', 'rgb(0, 255, 165)');
    root.style.setProperty('--global-decocolor-second', 'rgb(45, 44, 50)');
  }, []);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
   
    const currentBackColor = getComputedStyle(root).getPropertyValue('--global-backcolor').trim();
    const currentFontColor = getComputedStyle(root).getPropertyValue('--global-fontcolor').trim();
    const currentDecoColor = getComputedStyle(root).getPropertyValue('--global-decocolor').trim();
    const currentDecoColorSecond = getComputedStyle(root).getPropertyValue('--global-decocolor-second').trim();
  
    const newBackColor = currentBackColor === 'rgb(30, 29, 38)' ? 'rgb(240, 255, 240)' : 'rgb(30, 29, 38)';
    const newFontColor = currentFontColor === 'white' ? 'rgb(30, 29, 38)' : 'white';
    const newDecoColor = currentDecoColor === 'rgb(0, 255, 165)' ? 'rgb(46, 139, 87)' :'rgb(0, 255, 165)';
    const newDecoColorSecond = currentDecoColorSecond === 'rgb(45,44,50)' ? 'rgb(64, 220, 165)' :'rgb(45,44,50)';

    root.style.setProperty('--global-backcolor', newBackColor);
    root.style.setProperty('--global-fontcolor', newFontColor);
    root.style.setProperty('--global-decocolor', newDecoColor);
    root.style.setProperty('--global-decocolor-second', newDecoColorSecond);
    
  };

  return (
    <div className="theme-toggle-container">
      <div className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={handleClick}>
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ColorChangeButton;
