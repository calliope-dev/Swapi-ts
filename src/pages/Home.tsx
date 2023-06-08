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
                  <div>
                    <span>{index.name}</span>
                  </div>
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