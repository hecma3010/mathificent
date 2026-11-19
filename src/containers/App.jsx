import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

function App() {
  const date = new Date();
  const currentHour = date.getHours();
  let greeting;
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <>
      <Header />
      <h1 className="text-center">Mathificent</h1>
      <p className="text-center">{greeting}, ready to practice?</p>
      <p className="text-center">
        {currentHour < 18
          ? "Plenty of time to practice today!"
          : "One last round before bed?"}
      </p>
      <Main />
      <Footer />
    </>
  );
}

export default App;
