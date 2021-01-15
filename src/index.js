import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div>
      {
        pets.map((pet, i) => (
          <div>
            {pet.petName} is a {pet.petType}
          </div>
        ))
      }

      <form>
        <input
          name="petName"
          value="hello"
          onChange={change} />
        <input
          name="petType"
          value="world"
          onChange={change} />
      </form>
    </div>
  );
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
