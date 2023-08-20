import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import postData from "./data/posts.json";
import CardList from "./main/CardList";

function App() {
  console.log(postData);
  return (
    <>
      <Nav />
      <CardList postData={postData}/>
      <Footer/>
    </>
      
  );
}

export default App;
