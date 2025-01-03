import React from 'react'
import './Header1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';


function Header1() {

    return (
        <div>
            <nav1>
                <div className='logo1'>
                    <img src='/images/h1logo.png' alt="logo" />
                </div>

                <div class="Options">
                    <div className='h1-text'>Skip to main content</div>
                    <span class="divider"></span>
                    <div className='h1-text'>Screen reader access</div>
                    <span class="divider"></span>
                    <div class="font-controls">
                        <button id="increase-font" class="font-btn">A+</button>
                        <button id="original-font" class="font-btn">A</button>
                        <button id="decrease-font" class="font-btn">A-</button>
                    </div>
                    <span class="divider"></span>
                    <div className="language-selection">
                        <select className="language-dropdown">
                            <option value="english" selected>
                                English
                            </option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                        </select>
                    </div>




                </div>

            </nav1>
        </div>
    )
}

export default Header1;