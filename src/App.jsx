import { Entry } from "./components/Entry";
import { Header } from "./components/Header";
import japanImg from '/src/assets/japan.jpeg';


function App(){
  return(
    <>
      <Header/>
      <Entry
        img = {{
          src: japanImg,
          alt:'Fuji'
        }}
        country= "JAPAN"
        location = 'https://maps.app.goo.gl/1137892RPu6jhofy8'
        title='Mount Fuji'
        date = '12 Jan, 2021 - 24 Jan,2021'
        about = 'Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.'
      />
    </>
  );
}

export default App;