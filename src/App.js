import useOnlineStatus from "./checkOnlineStatus";

function App() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="App">
      <h1>Internet Status : {onlineStatus ? "Online ✅" : "Offline 🔴"}</h1>
    </div>
  );
}

export default App;
