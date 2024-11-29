var url = 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?cs=srgb&dl=pexels-tomas-malik-793526-3408353.jpg&fm=jpg';
var location = 'https://maps.app.goo.gl/vsPUDZLpdZgyQFoH7';

export function Entry(){
    return(
        <>
        <article className="card">
            <img src={url} className="place-image"/>
            <div className="place-details">
                <img className="location-pin" src="/src/assets/location.svg"/>
                <span>JAPAN</span>
                <a href={location}>View on Google Maps</a>
                <h1>Mount Fuji</h1>
            </div>
        </article>
        </>
    )
}