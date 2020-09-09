import React from 'react';
import Fade from 'react-reveal/Fade';
import '../css/Connect.css';

const Connect = () => {
    return (
        <div className='connect-container'>
            <div className='connect-label'>
                <Fade top>
                    <h2>Connect With Me!</h2>
                </Fade>
            </div>
            <div className='options-container'>
                <Fade left>
                    <div className='option-item'>
                        <button class="ui google plus button">
                            <i class="google plus icon"></i>
                            haz.dev.git@gmail.com
                        </button>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='option-item'>
                        <button class="ui linkedin button">
                            <i class="linkedin icon"></i>
                            LinkedIn
                        </button>
                    </div>
                </Fade>
                <Fade top>
                    <div className='option-item'>
                        <button class="ui github button">
                            <i class="github icon"></i>
                            Github
                        </button>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='option-item'>
                        <button class="ui facebook button">
                            <i class="facebook icon"></i>
                            Facebook
                        </button>
                    </div>
                </Fade>
                <Fade right>
                    <div className='option-item'>
                        <button class="ui twitter button">
                            <i class="twitter icon"></i>
                            Twitter
                        </button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Connect;