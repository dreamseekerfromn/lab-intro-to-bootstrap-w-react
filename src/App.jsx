import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import postData from "./data/posts.json";
import Main from "./main/Main";

function App() {
  console.log(postData);
  return (
    <>
      <Nav />
      <Main postData={postData}/>
      <Footer/>
    </>
      
  );
}

export default App;
