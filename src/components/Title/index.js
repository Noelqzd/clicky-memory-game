import React from 'react'
import './style.css'
import Logo from '../../../src/images/simpsons.png'

let Title = ({highscore, score, message}) => (
    <div className="title-wrapper">
        <div className="logo-score-wrapper">
            <div className="logo-wrapper">
                <img className="simp-logo" alt="img" 
                src={Logo}>

                </img>
            </div>
            <div className="score-wrapper">
                <h2>Current Score : {score}</h2>
                <h2>High Score : {highscore}</h2>
                <h2>{message}</h2>
            </div>
        </div>

        <div className="directions-wrapper">
            <h1>Memory Game</h1>
            <h2>Clicking A Unique Card Grants A Point and Will Shuffle The Cards!  Be Careful, You Can't Select The Same Card Twice!</h2>
        </div>
    </div>
)
export default Title