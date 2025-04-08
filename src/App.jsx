import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/DashboardStyled";
import FlashcardGame from "./pages/FlashcardGame";
import WordPuzzleGame from "./pages/WordPuzzleGame";
import ListeningChallenge from "./pages/ListeningChallenge";
import VocabularyQuiz from './pages/VocabularyQuiz'; 
import MemoryMatch from "./pages/MemoryMatch";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";
import Leaderboard from "./pages/Leaderboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcard-game" element={<FlashcardGame />} />
          <Route path="/word-puzzle-game" element={<WordPuzzleGame />} />
          <Route path="/ListeningChallenge" element={<ListeningChallenge />} />
          <Route path="/VocabularyQuiz" element={<VocabularyQuiz />} />
          <Route path="/MemoryMatch" element={<MemoryMatch />} />
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/Profile" element={<Profile />} /> 
          <Route path="/MyCourses" element={<MyCourses />} /> 
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
