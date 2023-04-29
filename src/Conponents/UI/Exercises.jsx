import React from 'react'
import  '../../Styles/Exercise.css'
import lunges from '../../assets/lunges1.png'
import yoga from '../../assets/yoga-pose.png'
import extended from '../../assets/extended.png'


const Exercises = () => {
  return (
    <section id='schedule'>
        <div className="container_exercise">
            <div className="exercise_top">
              <h2 className="section_title">
                Benefits of <span className="highlight">Exercise</span>
                </h2>
                <p>Exercise can improve your brain health ,help manage weight,
                   reduce the risk of dease,<br/>
                    strengthen the bone and inprove your ability to do everyday activities.
                </p>  
            </div>

            <div className="exercise_wrapper">
                <div className="exercise_item"  data-aos="zoom-in" 
                 data-aos-duration="1500">
                  <span className='exercise_icon'>
                    <img src={lunges} alt=''></img>
                    </span>

                    <div className="exersise_content">
                        <h4>Healthy Life</h4> 
                        <p> real health includes getting enough sleep,
                            exerciseing at list once or twice daily.
                        </p>
                        </div> 
                </div>

                <div className="exercise_item" data-aos="zoom-in" 
                 data-aos-duration="1500">
                  <span className='exercise_icon'>
                    <img src={extended} alt=''></img>
                    </span>

                    <div className="exersise_content">
                        <h4>Increased flexibility</h4> 
                        <p> real health includes getting enough sleep,
                            exerciseing at list once or twice daily.
                        </p>
                        </div>

                        <div className="exercise_item" data-aos="zoom-in" 
                 data-aos-duration="1500">
                  <span className='exercise_icon'>
                    <img src={yoga} alt=''></img>
                    </span>

                    <div className="exersise_content">
                        <h4>Reducing blood presure</h4> 
                        <p> real health includes getting enough sleep,
                            exerciseing at list once or twice daily.
                        </p>
                        </div> 
                </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercises