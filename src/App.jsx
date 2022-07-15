import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import useSWR, { SWRConfig } from "swr";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
  // const api = "https://pokeapi.co/api/v2/pokemon/"
  const [pokes, setPokes] = useState([]);
  
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  
  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
    fetcher
    );
    console.log(data);
    
   

  // useEffect(() => {
  //   async function loadPoke() {
  //    const response = await axios(url);
  //    setPokes(response.data);
  //   }

  //   loadPoke();
  //    }, []);

  // useEffect(() => {
  //   axios
  // .get(`${api}?offset=0&limit=151`)

  // .then(({ data }) => {
  //   let result = data.results;
  //   setPokes([...result]);
  // })

  // .catch(() => {
  //   console.log("TODO ME MALE SAL");
  // })

  // .finally(() => {
  //   setTimeout(() => {}, 3000);
  // });
  // }, []);

  return (
    <div className="container bg-primary py-2">
      <div className="row">
        {pokes.map((poke) => (
          <div key={poke.name} className="col-12 col-md-6 col-lg-3 mb-3 ">
            <div className="border bg-success text-center">
              <h4>{poke.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
