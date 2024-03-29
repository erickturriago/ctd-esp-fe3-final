import { useState } from 'react'
import Form from '../Components/Form'
import { useDentistaStates } from '../Components/utils/global.context'

const Contact = () => {
  const {state} = useDentistaStates()
  const [form,setForm] = useState({})
  return (
    <div className={`main ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form form={form} setForm={setForm}/>
      {form.name && <h3>{`Gracias ${form.name}, te contactaremos lo más pronto posible`}</h3>}
    </div>
  )
}

export default Contact