import { useState, useEffect, StrictMode } from 'react'
import numberService from './services/number.service'
import NumberList from './components/NumberList'
import NumberDetail from './components/NumberDetail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    const fetchNumbers = async () => {
      const { data } = await numberService.getNumbers()
      setNumbers([...Array(1000).keys()].map((x, index) => {
        const existingNumber = data.find(f => f.number === index)
        if (existingNumber) return existingNumber
        return {
          number: index,
          status: 'AVAILABLE',
        }
      }))
    }

    fetchNumbers()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NumberList numbers={numbers}/>,
    },
    {
      path: "/:number",
      element: <NumberDetail/>
    }
  ]);

  return (
    <StrictMode>
      <h1>Rifa Solidaria</h1>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
