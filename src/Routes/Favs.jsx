import Card from "../Components/Card";
import { useDentistaStates } from '../Components/utils/global.context'

const Favs = () => {

  const favs = JSON.parse(localStorage.getItem('favs')) || []
  const {state} = useDentistaStates()

  return (
    <main className={`main ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map((dentista) => <Card key={dentista.id} dentista={dentista}/> )}
      </div>
    </main>
  );
};

export default Favs;
