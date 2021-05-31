import React from 'react'

export default function Crads(props) {
    return (
        <>
            
            
            <div className="cards">

                <div className="image">
                    <img src={props.imgsrc} alt="Pic"/>
                </div>


                <div className="title">
                    <h1>{props.title}</h1>
                </div>

                <div className="desc">
                    <p>{props.desc}</p>
                    <a href={props.link} target="_necxt"> 
                        <button type="submit">More..</button>
                    </a>
                </div>

            </div>

            
        </>
    )
}
