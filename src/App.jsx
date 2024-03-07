import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseRefPage from "./pages/UseRefPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseContextPage from "./pages/UseContextPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseCustomHooksPage from "./pages/UseCustomHooksPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/use-state" element={ <UseStatePage /> }/>
      <Route path="/use-effect" element={ <UseEffectPage /> }/>
      <Route path="/use-ref" element={ <UseRefPage /> }/>
      <Route path="/use-memo" element={ <UseMemoPage /> }/>
      <Route path="/use-context" element={ <UseContextPage /> }/>
      <Route path="/use-reducer" element={ <UseReducerPage /> }/>
      <Route path="/use-callback" element={ <UseCallbackPage /> }/>
      <Route path="/use-custom-hooks" element={ <UseCustomHooksPage /> }/>
    </Routes>
  );
}

export default App
