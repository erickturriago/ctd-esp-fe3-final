import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistaStates } from '../Components/utils/global.context'

const Detail = () => {

  const [dentista, setDentista] = useState({})
    const params = useParams()
    const {state} = useDentistaStates()
    console.log(params)
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/' + params.id)
        .then(res => setDentista(res.data))
    }, [])

  return (
    <main className={`main ${state.theme}`}>
      <h1>Detail Dentist id {params.id}</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentista.name}</td>
              <td>{dentista.email}</td>
              <td>{dentista.phone}</td>
              <td>{dentista.website}</td>
            </tr>
          </tbody>
        </table>
    </div>
    </main>
  )
}

export default Detail