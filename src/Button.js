import { useState } from 'react';

export default function Button(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = (e) => {
    props.onSubmit(e);
  };
  const styles = {
    btn: {
      fontFamily: 'Overpass, sans-serif',
      padding: '10px 20px',
      width: '100%',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: isHover ? '#fff' : 'hsl(25, 97%, 53%)',
      color: isHover ? 'hsl(25, 97%, 53%)' : 'hsl(0, 0%, 100%)',
      letterSpacing: '2px',
      fontSize: '15px',
      textTransform: 'uppercase',
      fontWeight: '400',
      cursor: 'pointer',
    },
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles.btn}
      onClick={handleClick}
    >
      {props.txt}
    </button>
  );
}
