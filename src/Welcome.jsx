import WelcomeMessage from "./WelcomeMessage.jsx";
import Login from "./Login.jsx";

function Welcome({ loggedIn }) {
  return <div>{loggedIn ? <WelcomeMessage /> : <Login />}</div>;
}

export default Welcome;
