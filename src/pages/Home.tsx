import { useEffect, useState } from "react";
import { CFooter, CHeader } from "../components/Index";

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    try {
      const { name } = JSON.parse(localStorage.getItem('sucess_login') || '{}');
      setUserName(name);
    } catch (errors) {
      console.log(errors);
    }
  }, []);

  return (
    <>
      <CHeader userName={userName} />
      <main
        className="h-screen"
      >
        Homepage
      </main>
      <CFooter />
    </>
  );
};

export default Home;