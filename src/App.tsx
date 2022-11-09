import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://images.vexels.com/media/users/3/229320/isolated/preview/3dbf158d77c22e31cee5eafbdcf5ce0f-square-gradient-logo.png' alt='error'/>
            </header>

            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Massages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>

            </nav>

            <div className='content'>
                <div className='content-header'>
                    <img src="https://f-cover.com.ua/upload/iblock/453/453f1272a1a7d08c82483e1383c9e027.jpg"
                         alt="error"/>
                </div>
                <div className='content-profileAvatar'>
                    <img
                        src="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/b4b98005-a07f-446d-8dd9-29583d2ddfac"
                        alt="error"/> <span>Description</span>
                </div>

            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
                <div>
                    post 3
                </div>
            </div>

        </div>
    );
}

export default App;
