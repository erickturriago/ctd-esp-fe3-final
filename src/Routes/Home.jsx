import Card from '../Components/Card'
import { useDentistaStates } from '../Components/utils/global.context'

const Home = () => {
  const {state} = useDentistaStates()
  return (
    <main className={`main ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistaList.map((dentista) => <Card key={dentista.id} dentista={dentista}/> )}
      </div>
    </main>
  )
}

export default Home