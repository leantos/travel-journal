var url = 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?cs=srgb&dl=pexels-tomas-malik-793526-3408353.jpg&fm=jpg';
var location = 'https://maps.app.goo.gl/1137892RPu6jhofy8';

export function Entry(){
    return(
        <>
        <article className="card">
            <img src={url} className="place-image"/>
            <div className="place-details">
                <img className="location-pin" src="/src/assets/location.svg"/>
                <span>JAPAN</span>
                <a href={location} target="_blank">View on Google Maps</a>
                <div className="entry">
                <h1 className="entry-title">Mount Fuji</h1>
                <p className="date">12 Jan, 2021 - 24 Jan,2021</p>

                <p className="entry-text">Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.</p>
                </div>
            </div>
        </article>
        </>
    )
}