import React, { useState } from "react";
import axios from "axios";

const SommeComponent = () => {
  const [n1, setNumber1] = useState("");
  const [n2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleProd = () => {
    
   axios.post('https://hnodeapp.vercel.app/produit', { n1, n2 })
    .then((response) => {
     
      setResult(response.data.result);

  })
  .catch((error) => {
    console.log(error);
   
   
  });
   
  }

  const handleSom = () => {
    
    axios.post('https://hnodeapp.vercel.app/somme', { n1, n2 })
     .then((response) => {
      
       setResult(response.data.result);
 
   })
   .catch((error) => {
     console.log(error);
    
    
   });
    
   }
  

  return (
    <div>
      <input
        type="text"
        value={n1}
        onChange={(event) => setNumber1(event.target.value)}
      />
      <input
        type="text"
        value={n2}
        onChange={(event) => setNumber2(event.target.value)}
      />
      <button onClick={handleProd}>Produit</button>
      <button onClick={handleSom}>Somme</button>
     
      <p>Résultat : {result}</p>
    </div>
  );
};

export default SommeComponent;
