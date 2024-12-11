import { Assets } from "./assets"

/* eslint-disable react/prop-types */

export function Entry(props){
    return(
        <>
        <article className="card">
            <div className="image-container">
                <img src={props.img.src} 
                className="place-image"
                alt={props.img.alt}
                />
            </div>
            <div className="place-details">
                {/* <img className="location-pin" 
                src="/src/assets/location.svg"/> */}
                <img className="location-pin" 
                src={Assets().location}/>
                <span>{props.country}</span>
                <a href={props.location} target="_blank">View on Google Maps</a>
                <div className="entry">
                <h1 className="entry-title">{props.title}</h1>
                <p className="date">{props.date}</p>
                <p className="entry-text">{props.about}</p>
                </div>
            </div>
        </article>
        </>
    )
}