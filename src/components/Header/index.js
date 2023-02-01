import "./styles.scss";
import moon from '../../assets/624106.png';


function Header() {
  const colorFont = document.querySelector("body");
  let darkMode = "";
  console.log(localStorage.isDark);
  if(localStorage.isDark==="true"){
    colorFont.classList.toggle("-dark");
    darkMode=!darkMode;
    localStorage.setItem('isDark', darkMode);
  }
  const handleTheme = () => {
    colorFont.classList.toggle("-dark");
    darkMode=!darkMode;
    localStorage.setItem('isDark', darkMode);
    console.log(darkMode);
   
  };

  return (
    <div className="header">
      <h1 className="header-title">Converter</h1>
      <img src={moon} alt="lune" className="header-moon" onClick={handleTheme}/>
    </div>
  );
}

export default Header;
