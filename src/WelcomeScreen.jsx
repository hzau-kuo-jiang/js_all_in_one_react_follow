import WelcomeMessage from "./WelcomeMessage.jsx";

function WelcomeScreen({ loggedIn, isHuman }) {
  return (
    <div>
      {loggedIn && isHuman && <WelcomeMessage />}
      Note: if you don't see the welcome message, you're not logged in or you're
      a bot.
    </div>
  );
}

export default WelcomeScreen;
