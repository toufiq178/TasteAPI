import { Suspense } from 'react'
import './App.css'
import Foods from './Component/Foods/Foods'

const foodsPromise = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res => res.json())

function App() {

  return (
    <>

      


      <Suspense fallback={<p>Food Loading...</p>}>

        <Foods foodsPromise={foodsPromise}></Foods>

      </Suspense>

    </>
  )
}

export default App
