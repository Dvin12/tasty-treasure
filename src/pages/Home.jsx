import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Trending from "../components/Trending";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Navigation></Navigation>
      <Header></Header>
      <Trending></Trending>
      <Banner></Banner>
      <Footer></Footer>
    </main>
  );
}

export default Home;
