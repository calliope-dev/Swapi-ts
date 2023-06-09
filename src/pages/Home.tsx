import { useContext, useEffect, useState } from "react";
import { CFooter, CHeader } from "../components/Index";

// Context
import AppContext from "../context/Index";

// Interface
import { IPlanet } from "../interfaces/IPlanet";

const Home = () => {
  const context = useContext(AppContext);

  const [userName, setUserName] = useState('');

  const [searchByName, setBySearch] = useState([]);

  useEffect(() => {
    try {
      const { name } = JSON.parse(localStorage.getItem('sucess_login') || '{}');
      setUserName(name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = event;
    let newArr;

    switch (name) {
      case 'search-input':
        newArr = context?.starWarsPlanets.filter((i: IPlanet) => {
          const planetNameLowerCase = i.name.toLowerCase();
          const valueLowerCase = value.toLowerCase().substring(0, 2);

          return planetNameLowerCase.substring(0, 2).includes(valueLowerCase);
        });
        setBySearch(newArr as never);
        break;
      default:
        break;
    }
  };

  return (
    context?.isLoading ? (<span>Loading...</span>) : (
      <div>
        <CHeader userName={userName} />
        <main
          className="h-screen"
        >
          <input
            type="text"
            name="search-input"
            onChange={onChangeFunction}
          />
          <table>
            <thead>
              <tr>
                <th>Nome:</th>
                <th>Rotation Period:</th>
                <th>Orbital Period:</th>
                <th>Climate:</th>
                <th>Population:</th>
                <th>Diameter:</th>
              </tr>
            </thead>
            {
              searchByName.length >= 1 ? (searchByName.map((index: IPlanet) => {
                return (
                  <tbody
                    key={index.name}
                  >
                    <tr>
                      <td>{index.name}</td>
                      <td>{index.rotation_period}</td>
                      <td>{index.orbital_period}</td>
                      <td>{index.climate}</td>
                      <td>{index.population}</td>
                      <td>{index.diameter}</td>
                    </tr>
                  </tbody>
                );
              })) : (context?.starWarsPlanets.map((index: IPlanet) => {
                return (
                  <tbody
                    key={index.name}
                  >
                    <tr>
                      <td>{index.name}</td>
                      <td>{index.rotation_period}</td>
                      <td>{index.orbital_period}</td>
                      <td>{index.climate}</td>
                      <td>{index.population}</td>
                      <td>{index.diameter}</td>
                    </tr>
                  </tbody>
                );
              })
              )}
          </table>
        </main>
        <CFooter />
      </div >
    )
  );
};

export default Home;