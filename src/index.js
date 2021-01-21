import React, { useState } from "react";
import { render } from "react-dom";
// 👉 App contains a more sophisticated form we'll flesh out later
import App from "./components/App";

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: "Fido", petType: "dog" },
  { petName: "Tweetie", petType: "canary" },
  { petName: "Goldie", petType: "fish" },
];
//step1//
const initialFormValues = { petName: "", petType: "" };
function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //step 3//
  const submit = (e) => {
    e.preventDefault();

    const newPet = {
      petName: formValues.petName,
      petType: formValues.petType,
    };
    console.log(newPet);

    setPets(pets.concat(newPet));
    setFormValues(initialFormValues);
  }
  return (
    //step 2//
    <div>
      {pets.map((pet, i) => (
        <div key={i}>
          {pet.petName} is a {pet.petType}
        </div>
      ))}
      <form onSubmit={submit}>
        <input name="" value={formValues.petName} onChange={change} />
        <input name="" value={formValues.petType} onChange={change} />
        <button>Submit new pet </button>
      </form>
    </div>
  );
}

render(
  <>
    <SimpleForm />
    <App />
  </>,
  document.querySelector("#root")
);
