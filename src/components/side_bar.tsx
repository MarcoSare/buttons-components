//import { useState } from 'react'
//import '../styles/home.css'
import { useState } from 'react'

const SideBar = ({ toggleTheme, theme }: { toggleTheme: () => void, theme: string }) => {
    const [open, setOpen] = useState(false)

    return <section className= {`side-bar ${open?'open':''}` }>
        <div>
            <div className='row-center mb-2 side-row'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                    className= {`side-bar-logo ${open?'':'side-hidden'}` }
                    alt="logo" />
                <h3 className={`${open?'':'side-hidden'}`}>ReactBtn</h3>
                <i className= {`fa-solid side-bars ${open?'fa-xmark':'fa-bars'}`} onClick={()=> setOpen(!open)}></i>
            </div>
            <div className={`${open?'':'side-hidden'}`}>
                <ul className='side-list'>
                    <li className='row-center'> <i className="fa-solid fa-palette"></i>Colors</li>
                    <li className='row-center'> <i className="fa-solid fa-font"></i>Typography</li>
                    <li className='row-center'> <i className="fa-solid fa-bars-staggered"></i>Spaces</li>
                    <li className='row-center'> <i className="fa-solid fa-stop"></i>Buttons</li>
                    <li className='row-center'> <i className="fa-solid fa-keyboard"></i>Inputs</li>
                    <li className='row-center'> <i className="fa-solid fa-grip"></i>Grid</li>
                </ul>
            </div>
        </div>
        
        <div>
            <div className={`${open?'':'side-hidden'}`}>
                <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleTheme} checked={theme === 'dark-theme' ? false : true} />
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    </section>
}


export default SideBar