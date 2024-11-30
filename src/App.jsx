/* eslint-disable react/jsx-key */
import { Entry } from "./components/Entry";
import { Header } from "./components/Header";
import data from './data.js'

const entryElements = data.map((entry)=>{
  return(
    <Entry
      img={entry.img}
      title={entry.title}
      location={entry.googleMapsLink}
      country={entry.country}
      date={entry.dates}
      about={entry.text}
    />
  )
})


function App(){
  return(
    <>
      <Header/>
      <main className="contianer">
        {entryElements}
      </main>
    </>
  );
}

export default App;