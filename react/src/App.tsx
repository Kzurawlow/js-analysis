import {useEffect, useState} from 'react'
import './styles.css'
import {createClient} from 'pexels';
import {Image} from "./Image.tsx";

function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState<any[] | null>(null);
  const client = createClient('eqDK60Xl9lzIP4RHt4YCNdwO2mm5RLkFzl1WGyQytonWVWaHOOzdBhfr');

  async function fetchData() {
    try {
      const resp = await client.photos.search({query: 'Nature', per_page: 12, page: count})
      setCount(count + 1)
      setResponse(resp.photos)
    } catch (e) {
      console.log(e)

    }

  }

  useEffect(() => {
    fetchData()
  }, []);
  console.log(response)

  return (
    <div>
      <h1 style={{display: "flex", justifyContent: "center"}}>Zdjęcia: </h1>
      <div className="buttonsContainer">
        <button onClick={() => setResponse([])}>Wyczyść zdjęcia</button>
        <button onClick={() => fetchData()}>Załaduj zdjęcia</button>
      </div>
      <div className="container">
        {response?.map(image => (<Image key={image.id} image={image}/>))}
      </div>
    </div>
  )
}

export default App
