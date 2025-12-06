import { ColourMessage } from './conpornents/ColourMessage';
import {useState,useEffect} from 'react';
export const App = () => {
  console.log("--App--")
  const [num,setNum]=useState(0);
  const [textColor, setTextColor] = useState('black');
  const [isShowFace,showFace]=useState(true);
  const [isShowFace2,ShowFace2] = useState(true);
  
  const onClickCountup = () => {
    setNum((prevNum) => prevNum + 1);
    // setNum(num + 1);
  }
  const onClickChangeColor = () => {
      setTextColor('pink');
    };
  const onCliclobake = () => {
    ShowFace2(!isShowFace2);
    
  }
  // const contentStyleA = {
  //   color: 'blue',
  //   backgroundColor: 'lightgray',
  //   fontSize: '20px',
  //   padding: '10px',
  // };

  const contentStyleB = {
    color: 'red',
    backgroundColor: 'lightgray',
    fontSize: '20px',
    padding: '10px',
  };

  const onClicktoggle = () => {
    showFace(!isShowFace);
  }

  useEffect(() =>{
    console.log("--useEffect--")
    if (num % 3 === 0) {
    isShowFace||showFace(true);
  } else {
    isShowFace&&showFace(false);
  }
  },[num])
  

  return (
  <>
    
    <p style={contentStyleB}>はい</p>
    <ColourMessage color="blue">お元気</ColourMessage>
    <ColourMessage color="green">元気</ColourMessage>
    <button onClick={onClickCountup}>カウントアップ</button>
    <button onClick={onClickChangeColor}>色変え</button>
    <button onClick={onClicktoggle}>on/off</button>
    <button onClick={onCliclobake}>on/off</button>
    {isShowFace &&<p>🤪</p>}
    /* /*isShowFace2 が true のときだけ 👻 を表示する*/ 
    {isShowFace2 &&<p>👻</p>}
    
    <p  style={{ color: textColor }}>{num}</p>
    </>
  )
}
