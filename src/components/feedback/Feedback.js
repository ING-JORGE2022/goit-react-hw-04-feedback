import { useState } from 'react';
import style from './feebback.module.css';
/// se uso HOOK DE useState
const FeedbackApp =() =>{
   const [good , setGood] = useState (0)
   const [neutral , setNeutral] = useState (0)
   const [bad , setBad] = useState (0)
   
////////////////////////////////////////////
    const AumentarContadorGood = () => {
        setGood(good + 1)
        console.log("Good :" , good)
    } 
    const AumentarContadorNeutral = () => {
        setNeutral( neutral + 1)
        console.log("Neutro :" , neutral)
    }
    const AumentarContadorBad = () => {
       setBad(bad + 1)
        console.log("Bad :",  bad)
    }
    // ////////////////////////////////////
    const countTotalFeedback = () =>{
    
    return good + neutral+ bad;
    }
    const countPositiveFeedbackPercentage = () =>{
        return countTotalFeedback() > 0 ? Math.round((good/countTotalFeedback ())*100) : 0
    }

    const Reset = () =>{
        setGood(0);
        setBad(0);
        setNeutral(0);
        
    }
     const Notification = (props) =>{
        return <h2>{props.mensaje}</h2>
    }
   
        return (
            <>
            
          <div className={style.container}>
              <h2>Please leave Feedback</h2>
              <br></br>
             <div className={style.containerbutton}>
                 <button className={style.button} onClick={AumentarContadorGood}>Good</button>
                 <button className={style.button}  onClick={AumentarContadorNeutral}>Neutral</button>
                 <button className={style.button} onClick={AumentarContadorBad}>Bad</button>
             </div>
              <br></br>
              <h2>Statictis</h2>
              {countTotalFeedback () > 0 ? 
              <div>
                  
                  <ul>
                      <li>Good: {good} </li>
                      <li>Neutral: {neutral}</li>
                      <li>Bad: {bad}</li>
                      <li>Positive Feedback: {countPositiveFeedbackPercentage()} % </li>
                  </ul>
              </div>    
            :<Notification mensaje="There is no feedback"/> }
          <button className={style.button} onClick={Reset}>Reset</button>
          </div>
        </>
            
        );
    }
export default  FeedbackApp;