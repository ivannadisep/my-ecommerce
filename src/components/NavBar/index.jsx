import CartWidget from '../CartWidget';
import React from 'react';
  
export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <a className='nav_link' href="a"> Mi Marca</a>
                </div>
                <ul className='nav_list'>
                    <li>
                        <a className='nav_link' href="a"> Categoria 1</a>
                    </li>
                    <li>
                        <a className='nav_link' href="a"> Categoria 2</a>
                    </li>
                    <li>
                       <a className='nav_link' href="a">CartWidget</a> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default  NavBar