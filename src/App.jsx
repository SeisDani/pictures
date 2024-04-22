import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import './App.css'
import searchImage from './api'

function App() {
  const [Images, setImage] = useState([])

  const handleSubmit = async(term) => {
    console.log('usted esta buscando con:', term)
    const result = await searchImage(term)

    console.log('coco')
    console.log(result)

    setImage(result)

  }
  
  return (
      <div>
        <h1>App</h1>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
      </div>
  )
}

export default App
