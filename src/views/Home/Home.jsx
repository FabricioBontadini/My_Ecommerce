import React from 'react'
import './index.scss';
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div className='home'>
            <h1>Home 2</h1>
            <button>
                <Link to={'/products/1'}>Produto</Link>
            </button>
        </div>
    );
};

export default Home;