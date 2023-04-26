import './App.css';
import Button from './Button';
import SmallBtn from './SmallBtn';
import Star from './images/icon-star.svg';
import Rating from './images/illustration-thank-you.svg';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  const [submitted, setsubmitted] = useState(false);
  const buttonData = ['1', '2', '3', '4', '5'];

  const getData = (e) => {
    const num = parseInt(e.target.innerHTML);
    if (num > 5 || num <= 0) {
      setResult(false);
    }
    setResult(e.target.innerHTML);
    return e.target.innerHTML;
  };
  const buttonSubmit = (e) => {
    if (e.target.innerHTML && result) {
      setsubmitted(true);
    } else setsubmitted(false);
  };

  return (
    <>
      {!submitted ? (
        <div className="container">
          <img src={Star} className="logo" alt="Star with orange color" />
          <h1> How did we do?</h1>
          <p>
            {' '}
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul>
            {buttonData.map((data, index) => {
              return (
                <li key={index}>
                  <SmallBtn
                    onSubmit={getData}
                    num={data}
                    key={index}
                    index={index}
                  />
                </li>
              );
            })}
          </ul>
          <Button onSubmit={buttonSubmit} txt="Submit" />
        </div>
      ) : (
        <ThankYouComponent
          name="Thank you!"
          desc="We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!"
          submission={result}
        />
      )}
    </>
  );
}

function ThankYouComponent(props) {
  return (
    <div className="container">
      <div className="img-container">
        <img src={Rating} className="rating-img" alt="Star with orange color" />
      </div>
      <div className="response">
        <span className="asnwer-box">
          You selected <span className="answer">{props.submission}</span> out of
          5
        </span>
      </div>

      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default App;
