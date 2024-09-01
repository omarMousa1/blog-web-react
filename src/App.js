import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import Wordle from "./pages/games/wordle/Wordle";
import { Home } from "./pages/Home";
import TicTacToe from "./pages/games/tictactoe/TicTacToe";
import { NotFound } from "./pages/NotFound";
import { ToDoList } from "./pages/todo list/ToDoList";
// import { WeatherApp } from "./pages/waetherSystem/WeatherApp";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Omar Mousa";
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="wordle" element={<Wordle />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="todo" element={<ToDoList />} />
        {/* {<Route path="weather" element={<WeatherApp />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
