import { useState } from 'react';

export default function SmallBtn(props) {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = (e) => {
    setIsActive(!isActive);
    props.onSubmit(e);
  };

  const styles = {
    btn: {
      color: isHover ? '#fff' : 'hsl(216, 12%, 54%)',
      fontFamily: 'Overpass, sans-serif',
      fontSize: '15px',
      fontWeight: '600',
      width: '50px',
      height: '50px',
      backgroundColor: isHover ? 'hsl(25, 97%, 53%)' : '#262F38',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      backgroundActiveColor: '#7C8898',
      colorActiveColor: '#fff',
    },
  };
  return (
    <button
      className="btn"
      style={{
        ...styles.btn,
        backgroundColor: isActive
          ? styles.btn.backgroundActiveColor
          : styles.btn.backgroundColor,
        color: isActive ? styles.btn.colorActiveColor : styles.btn.color,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {props.num}
    </button>
  );
}
