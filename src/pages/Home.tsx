import { useContext, useEffect, useState } from "react";
import { CFooter, CHeader } from "../components/Index";

// Context
import AppContext from "../context/Index";

// Interface
import { IPlanet } from "../interfaces/IPlanet";

const Home = () => {
  const context = useContext(AppContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    try {
      const { name } = JSON.parse(localStorage.getItem('sucess_login') || '{}');
      setUserName(name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    context?.isLoading ? (<span>Loading...</span>) : (
      <div>
        <CHeader userName={userName} />
        <main
          className="h-screen"
        >
          {
            context?.starWarsPlanets.map((index: IPlanet) => {
              return (
                <article
                  key={index.name}
                >
                  <table>
                    <tr>
                      <th>Nome:</th>
                      <th>Rotation Period:</th>
                      <th>Orbital Period:</th>
                      <th>Climate:</th>
                      <th>Population:</th>
                      <th>Diameter:</th>
                    </tr>
                    <tr>
                      <td>{index.name}</td>
                      <td>{index.rotation_period}</td>
                      <td>{index.orbital_period}</td>
                      <td>{index.climate}</td>
                      <td>{index.population}</td>
                      <td>{index.diameter}</td>
                    </tr>
                  </table>
                </article>
              );
            })
          }
        </main>
        <CFooter />
      </div>
    )
  );
};

export default Home;