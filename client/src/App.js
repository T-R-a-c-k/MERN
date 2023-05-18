import "./App.css";
import AppRoutes from "./AppRoutes";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppRoutes></AppRoutes>
      </UserProvider>
    </div>
  );
}

export default App;
