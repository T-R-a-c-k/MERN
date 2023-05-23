import "./App.css";
import AppRoutes from "./Routers/AppRoutes";
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
