import React from 'react';
import './news.css'


const news = (props) => {
    return (
        <div className='main-con'>
            <div className="news-item">
                <img src={props.photo} alt="newsImg"/>
                <div className='desc'>
                    <a href={props.link} target='_blank'>{props.title}</a>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}


export default news;