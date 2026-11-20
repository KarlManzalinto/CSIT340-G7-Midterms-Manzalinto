import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers((currentFollowers) => currentFollowers + 1);
  }

  function handleAddRate() {
    setRate((currentRate) => currentRate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars((currentStars) => currentStars + 1);
  }

  function handleStarTodo() {
    setTodoStars((currentStars) => currentStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars((currentStars) => currentStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Profile
        followers={followers}
        rate={rate}
        onFollow={handleFollow}
        onAddRate={handleAddRate}
        onReset={handleReset}
      />
      <Repositories
        portfolioStars={portfolioStars}
        todoStars={todoStars}
        dotfilesStars={dotfilesStars}
        onStarPortfolio={handleStarPortfolio}
        onStarTodo={handleStarTodo}
        onStarDotfiles={handleStarDotfiles}
      />
      <Footer />
    </div>
  );
}

export default App;
