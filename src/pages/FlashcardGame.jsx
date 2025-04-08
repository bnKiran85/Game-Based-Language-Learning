import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  IconButton,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Tooltip,
  useTheme,
  useMediaQuery,
  Divider,
  AppBar,
  Toolbar,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Tab,
  Tabs
} from "@mui/material";
import {
  VolumeUp,
  NavigateNext,
  RestartAlt,
  EmojiEvents,
  School,
  Translate,
  Language,
  FlashOn,
  CheckCircle,
  Dashboard,
  Bookmark,
  Settings,
  Person,
  Notifications,
  Menu as MenuIcon,
  ArrowBack,
  SportsEsports,
  MenuBook,
  Psychology,
  StarBorder,
  Star
} from "@mui/icons-material";

// Import the wordSets from your existing code
const wordSets = {
  EnglishToKannada: [
    { question: "Hello", answer: "ಹಲೋ" },
    { question: "Thank you", answer: "ಧನ್ಯವಾದಗಳು" },
    { question: "Goodbye", answer: "ವಿದಾಯ" },
    { question: "Please", answer: "ದಯವಿಟ್ಟು" },
    { question: "Yes", answer: "ಹೌದು" },
    { question: "No", answer: "ಇಲ್ಲ" },
    { question: "Water", answer: "ನೀರು" },
    { question: "Food", answer: "ಆಹಾರ" },
    { question: "Friend", answer: "ಸ್ನೇಹಿತ" },
    { question: "Book", answer: "ಪುಸ್ತಕ" },
    { question: "Car", answer: "ಕಾರು" },
    { question: "House", answer: "ಮನೆ" },
    { question: "Love", answer: "ಪ್ರೇಮ" },
    { question: "School", answer: "ಶಾಲೆ" },
    { question: "Teacher", answer: "ಶಿಕ್ಷಕ" },
    { question: "Sun", answer: "ಸೂರ್ಯ" },
    { question: "Moon", answer: "ಚಂದ್ರ" },
    { question: "Time", answer: "ಸಮಯ" },
    { question: "Work", answer: "ಕೆಲಸದ" },
    { question: "Money", answer: "ಹಣ" },
    { question: "Dog", answer: "ನಾಯಿ" },
    { question: "Cat", answer: "ಬೆಕ್ಕು" },
    { question: "Day", answer: "ದಿನ" },
    { question: "Night", answer: "ರಾತ್ರಿ" },
    { question: "Family", answer: "ಕುಟುಂಬ" },
    { question: "City", answer: "ನಗರ" },
    { question: "Happy", answer: "ಸುಖಿ" },
    { question: "Sad", answer: "ದುಃಖ" },
    { question: "Beautiful", answer: "ಸುಂದರ" },
    { question: "Small", answer: "ಸಣ್ಣ" },
    { question: "Big", answer: "ದೊಡ್ಡ" },
    { question: "Fast", answer: "ವೇಗದ" },
    { question: "Slow", answer: "ನಿಧಾನ" },
    { question: "Strong", answer: "ಬಲಿಷ್ಠ" },
    { question: "Weak", answer: "ದುರ್ಬಲ" },
    { question: "Cold", answer: "ತಂಡಿ" },
    { question: "Hot", answer: "ಬಿಸಿ" },
    { question: "Right", answer: "ಬಲ" },
    { question: "Left", answer: "ಎಡ" },
    { question: "Inside", answer: "ಒಳಗೆ" },
    { question: "Outside", answer: "ಹೊರಗೆ" },
    { question: "Today", answer: "ಇಂದು" },
    { question: "Tomorrow", answer: "ನಾಳೆ" },
    { question: "Yesterday", answer: "ನಿನ್ನೆ" },
    { question: "Light", answer: "ಬೆಳಕು" },
    { question: "Dark", answer: "ಕತ್ತಲು" },
    { question: "Open", answer: "ತೆರೆಯಿರಿ" },
    { question: "Close", answer: "ಮುಚ್ಚಿ" },
    { question: "Street", answer: "ರಸ್ತೆ" },
    { question: "Mountain", answer: "ಪರ್ವತ" },
    { question: "Ocean", answer: "ಸಾಗರ" },
    { question: "Fire", answer: "ಬೆಂಕಿ" },
    { question: "Rain", answer: "ಮಳೆ" },
    { question: "Snow", answer: "ಹಿಮ" },
    { question: "Wind", answer: "ಗಾಳಿ" },
    { question: "Summer", answer: "ಬೆಳಕಿನ ಕಾಲ" },
    { question: "Winter", answer: "ಚಳಿಗಾಲ" },
    { question: "Spring", answer: "ವಸಂತ" },
    { question: "Autumn", answer: "ಶರದೃತು" },
    { question: "Breakfast", answer: "ಪ್ರಾತಃಭೋಜನ" },
    { question: "Lunch", answer: "ಮಧ್ಯಾಹ್ನ ಭೋಜನ" },
    { question: "Dinner", answer: "ರಾತ್ರಿ ಊಟ" },
    { question: "Glass", answer: "ಗಾಜು" },
    { question: "Plate", answer: "ತಟ್ಟೆ" },
    { question: "Knife", answer: "ಚಾಕು" },
    { question: "Fork", answer: "ಫೋರ್ಕ್" },
    { question: "Spoon", answer: "ಚಮಚ" },
    { question: "Clothes", answer: "ಬಟ್ಟೆ" },
    { question: "Shoe", answer: "ಬೂಟು" },
    { question: "Hat", answer: "ಟೋಪಿ" },
    { question: "Jacket", answer: "ಜಾಕೆಟ್" },
    { question: "Bag", answer: "ಚೀಲ" },
    { question: "Bed", answer: "ಹಾಸಿಗೆ" },
    { question: "Chair", answer: "ಕುರ್ಚಿ" },
    { question: "Table", answer: "ಮೇಜು" },
    { question: "Window", answer: "ಕಿಟಕಿ" },
    { question: "Door", answer: "ಬಾಗಿಲು" },
    { question: "Computer", answer: "ಕಂಪ್ಯೂಟರ್" },
    { question: "Phone", answer: "ದೂರವಾಣಿ" },
    { question: "Music", answer: "ಸಂಗೀತ" },
    { question: "Movie", answer: "ಚಿತ್ರ" },
    { question: "Game", answer: "ಆಟ" },
    { question: "Airplane", answer: "ವಿಮಾನ" },
    { question: "Train", answer: "ರೈಲು" },
    { question: "Bus", answer: "ಬಸ್" },
    { question: "Bicycle", answer: "ಸೈಕಲ್" },
    { question: "Doctor", answer: "ವೈದ್ಯ" },
    { question: "Police", answer: "ಪೊಲೀಸ್" },
    { question: "Firefighter", answer: "ಅಗ್ನಿಶಾಮಕ" },
    { question: "Farmer", answer: "ಕೃಷಿಕ" },
    { question: "Artist", answer: "ಕಲಾವಿದ" },
    { question: "Singer", answer: "ಗಾಯಕ" },
    { question: "Writer", answer: "ಲೇಖಕ" },
    { question: "Painter", answer: "ಚಿತ್ರಕಾರ" },
    { question: "Scientist", answer: "ವಿಜ್ಞಾನಿ" },
    { question: "Student", answer: "ವಿದ್ಯಾರ್ಥಿ" },
    { question: "Dream", answer: "ಕನಸು" },
    { question: "Idea", answer: "ಆಯ್ಕೆ" },
    { question: "Problem", answer: "ಸಮಸ್ಯೆ" },
    { question: "Solution", answer: "ಪರಿಹಾರ" },
    { question: "Danger", answer: "ಅಪಾಯ" },
    { question: "Success", answer: "ಯಶಸ್ಸು" }
  ],
  
  EnglishToSpanish: [
    { question: "Hello", answer: "Hola" },
    { question: "Thank you", answer: "Gracias" },
    { question: "Goodbye", answer: "Adiós" },
    { question: "Please", answer: "Por favor" },
    { question: "Yes", answer: "Sí" },
    { question: "No", answer: "No" },
    { question: "Water", answer: "Agua" },
    { question: "Food", answer: "Comida" },
    { question: "Friend", answer: "Amigo" },
    { question: "Book", answer: "Libro" },
    { question: "Car", answer: "Coche" },
    { question: "House", answer: "Casa" },
    { question: "Love", answer: "Amor" },
    { question: "School", answer: "Escuela" },
    { question: "Teacher", answer: "Maestro" },
    { question: "Sun", answer: "Sol" },
    { question: "Moon", answer: "Luna" },
    { question: "Time", answer: "Tiempo" },
    { question: "Work", answer: "Trabajo" },
    { question: "Money", answer: "Dinero" },
    { question: "Dog", answer: "Perro" },
    { question: "Cat", answer: "Gato" },
    { question: "Day", answer: "Día" },
    { question: "Night", answer: "Noche" },
    { question: "Family", answer: "Familia" },
    { question: "City", answer: "Ciudad" },
    { question: "Happy", answer: "Feliz" },
    { question: "Sad", answer: "Triste" },
    { question: "Beautiful", answer: "Hermoso" },
    { question: "Small", answer: "Pequeño" },
    { question: "Big", answer: "Grande" },
    { question: "Fast", answer: "Rápido" },
    { question: "Slow", answer: "Lento" },
    { question: "Strong", answer: "Fuerte" },
    { question: "Weak", answer: "Débil" },
    { question: "Cold", answer: "Frío" },
    { question: "Hot", answer: "Caliente" },
    { question: "Right", answer: "Derecha" },
    { question: "Left", answer: "Izquierda" },
    { question: "Inside", answer: "Dentro" },
    { question: "Outside", answer: "Fuera" },
    { question: "Today", answer: "Hoy" },
    { question: "Tomorrow", answer: "Mañana" },
    { question: "Yesterday", answer: "Ayer" },
    { question: "Light", answer: "Luz" },
    { question: "Dark", answer: "Oscuro" },
    { question: "Open", answer: "Abrir" },
    { question: "Close", answer: "Cerrar" },
    { question: "Street", answer: "Calle" },
    { question: "Mountain", answer: "Montaña" },
    { question: "Ocean", answer: "Océano" },
    { question: "Fire", answer: "Fuego" },
    { question: "Rain", answer: "Lluvia" },
    { question: "Snow", answer: "Nieve" },
    { question: "Wind", answer: "Viento" },
    { question: "Summer", answer: "Verano" },
    { question: "Winter", answer: "Invierno" },
    { question: "Spring", answer: "Primavera" },
    { question: "Autumn", answer: "Otoño" },
    { question: "Breakfast", answer: "Desayuno" },
    { question: "Lunch", answer: "Almuerzo" },
    { question: "Dinner", answer: "Cena" },
    { question: "Glass", answer: "Vaso" },
    { question: "Plate", answer: "Plato" },
    { question: "Knife", answer: "Cuchillo" },
    { question: "Fork", answer: "Tenedor" },
    { question: "Spoon", answer: "Cuchara" },
    { question: "Clothes", answer: "Ropa" },
    { question: "Shoe", answer: "Zapato" },
    { question: "Hat", answer: "Sombrero" },
    { question: "Jacket", answer: "Chaqueta" },
    { question: "Bag", answer: "Bolsa" },
    { question: "Bed", answer: "Cama" },
    { question: "Chair", answer: "Silla" },
    { question: "Table", answer: "Mesa" },
    { question: "Window", answer: "Ventana" },
    { question: "Door", answer: "Puerta" },
    { question: "Computer", answer: "Computadora" },
    { question: "Phone", answer: "Teléfono" },
    { question: "Music", answer: "Música" },
    { question: "Movie", answer: "Película" },
    { question: "Game", answer: "Juego" },
    { question: "Airplane", answer: "Avión" },
    { question: "Train", answer: "Tren" },
    { question: "Bus", answer: "Autobús" },
    { question: "Bicycle", answer: "Bicicleta" },
    { question: "Doctor", answer: "Doctor" },
    { question: "Police", answer: "Policía" },
    { question: "Firefighter", answer: "Bombero" },
    { question: "Farmer", answer: "Agricultor" },
    { question: "Artist", answer: "Artista" },
    { question: "Singer", answer: "Cantante" },
    { question: "Writer", answer: "Escritor" },
    { question: "Painter", answer: "Pintor" },
    { question: "Scientist", answer: "Científico" },
    { question: "Student", answer: "Estudiante" },
    { question: "Dream", answer: "Sueño" },
    { question: "Idea", answer: "Idea" },
    { question: "Problem", answer: "Problema" },
    { question: "Solution", answer: "Solución" },
    { question: "Danger", answer: "Peligro" },
    { question: "Success", answer: "Éxito" }
  ],

  
  EnglishToFrench: [
    { question: "Hello", answer: "Bonjour" },
    { question: "Thank you", answer: "Merci" },
    { question: "Goodbye", answer: "Au revoir" },
    { question: "Please", answer: "S'il vous plaît" },
    { question: "Yes", answer: "Oui" },
    { question: "No", answer: "Non" },
    { question: "Water", answer: "Eau" },
    { question: "Food", answer: "Nourriture" },
    { question: "Friend", answer: "Ami" },
    { question: "Book", answer: "Livre" },
    { question: "Car", answer: "Voiture" },
    { question: "House", answer: "Maison" },
    { question: "Love", answer: "Amour" },
    { question: "School", answer: "École" },
    { question: "Teacher", answer: "Professeur" },
    { question: "Sun", answer: "Soleil" },
    { question: "Moon", answer: "Lune" },
    { question: "Time", answer: "Temps" },
    { question: "Work", answer: "Travail" },
    { question: "Money", answer: "Argent" },
    { question: "Dog", answer: "Chien" },
    { question: "Cat", answer: "Chat" },
    { question: "Day", answer: "Jour" },
    { question: "Night", answer: "Nuit" },
    { question: "Family", answer: "Famille" },
    { question: "City", answer: "Ville" },
    { question: "Happy", answer: "Heureux" },
    { question: "Sad", answer: "Triste" },
    { question: "Beautiful", answer: "Beau" },
    { question: "Small", answer: "Petit" },
    { question: "Big", answer: "Grand" },
    { question: "Fast", answer: "Rapide" },
    { question: "Slow", answer: "Lent" },
    { question: "Strong", answer: "Fort" },
    { question: "Weak", answer: "Faible" },
    { question: "Cold", answer: "Froid" },
    { question: "Hot", answer: "Chaud" },
    { question: "Right", answer: "Droite" },
    { question: "Left", answer: "Gauche" },
    { question: "Inside", answer: "Dedans" },
    { question: "Outside", answer: "Dehors" },
    { question: "Today", answer: "Aujourd'hui" },
    { question: "Tomorrow", answer: "Demain" },
    { question: "Yesterday", answer: "Hier" },
    { question: "Light", answer: "Lumière" },
    { question: "Dark", answer: "Sombre" },
    { question: "Open", answer: "Ouvrir" },
    { question: "Close", answer: "Fermer" },
    { question: "Street", answer: "Rue" },
    { question: "Mountain", answer: "Montagne" },
    { question: "Ocean", answer: "Océan" },
    { question: "Fire", answer: "Feu" },
    { question: "Rain", answer: "Pluie" },
    { question: "Snow", answer: "Neige" },
    { question: "Wind", answer: "Vent" },
    { question: "Summer", answer: "Été" },
    { question: "Winter", answer: "Hiver" },
    { question: "Spring", answer: "Printemps" },
    { question: "Autumn", answer: "Automne" },
    { question: "Breakfast", answer: "Petit-déjeuner" },
    { question: "Lunch", answer: "Déjeuner" },
    { question: "Dinner", answer: "Dîner" },
    { question: "Glass", answer: "Verre" },
    { question: "Plate", answer: "Assiette" },
    { question: "Knife", answer: "Couteau" },
    { question: "Fork", answer: "Fourchette" },
    { question: "Spoon", answer: "Cuillère" },
    { question: "Clothes", answer: "Vêtements" },
    { question: "Shoe", answer: "Chaussure" },
    { question: "Hat", answer: "Chapeau" },
    { question: "Jacket", answer: "Veste" },
    { question: "Bag", answer: "Sac" },
    { question: "Bed", answer: "Lit" },
    { question: "Chair", answer: "Chaise" },
    { question: "Table", answer: "Table" },
    { question: "Window", answer: "Fenêtre" },
    { question: "Door", answer: "Porte" },
    { question: "Computer", answer: "Ordinateur" },
    { question: "Phone", answer: "Téléphone" },
    { question: "Music", answer: "Musique" },
    { question: "Movie", answer: "Film" },
    { question: "Game", answer: "Jeu" },
    { question: "Airplane", answer: "Avion" },
    { question: "Train", answer: "Train" },
    { question: "Bus", answer: "Bus" },
    { question: "Bicycle", answer: "Vélo" },
    { question: "Doctor", answer: "Docteur" },
    { question: "Police", answer: "Police" },
    { question: "Firefighter", answer: "Pompier" },
    { question: "Farmer", answer: "Agriculteur" },
    { question: "Artist", answer: "Artiste" },
    { question: "Singer", answer: "Chanteur" },
    { question: "Writer", answer: "Écrivain" },
    { question: "Painter", answer: "Peintre" },
    { question: "Scientist", answer: "Scientifique" },
    { question: "Student", answer: "Étudiant" },
    { question: "Dream", answer: "Rêve" },
    { question: "Idea", answer: "Idée" },
    { question: "Problem", answer: "Problème" },
    { question: "Solution", answer: "Solution" },
    { question: "Danger", answer: "Danger" },
    { question: "Success", answer: "Succès" }
  ],
 
  
  EnglishToGerman: [
    { question: "Hello", answer: "Hallo" },
    { question: "Thank you", answer: "Danke" },
    { question: "Goodbye", answer: "Auf Wiedersehen" },
    { question: "Please", answer: "Bitte" },
    { question: "Yes", answer: "Ja" },
    { question: "No", answer: "Nein" },
    { question: "Water", answer: "Wasser" },
    { question: "Food", answer: "Essen" },
    { question: "Friend", answer: "Freund" },
    { question: "Book", answer: "Buch" },
    { question: "Car", answer: "Auto" },
    { question: "House", answer: "Haus" },
    { question: "Love", answer: "Liebe" },
    { question: "School", answer: "Schule" },
    { question: "Teacher", answer: "Lehrer" },
    { question: "Sun", answer: "Sonne" },
    { question: "Moon", answer: "Mond" },
    { question: "Time", answer: "Zeit" },
    { question: "Work", answer: "Arbeit" },
    { question: "Money", answer: "Geld" },
    { question: "Dog", answer: "Hund" },
    { question: "Cat", answer: "Katze" },
    { question: "Day", answer: "Tag" },
    { question: "Night", answer: "Nacht" },
    { question: "Family", answer: "Familie" },
    { question: "City", answer: "Stadt" },
    { question: "Happy", answer: "Glücklich" },
    { question: "Sad", answer: "Traurig" },
    { question: "Beautiful", answer: "Schön" },
    { question: "Small", answer: "Klein" },
    { question: "Big", answer: "Groß" },
    { question: "Fast", answer: "Schnell" },
    { question: "Slow", answer: "Langsam" },
    { question: "Strong", answer: "Stark" },
    { question: "Weak", answer: "Schwach" },
    { question: "Cold", answer: "Kalt" },
    { question: "Hot", answer: "Heiß" },
    { question: "Right", answer: "Rechts" },
    { question: "Left", answer: "Links" },
    { question: "Inside", answer: "Drinnen" },
    { question: "Outside", answer: "Draußen" },
    { question: "Today", answer: "Heute" },
    { question: "Tomorrow", answer: "Morgen" },
    { question: "Yesterday", answer: "Gestern" },
    { question: "Light", answer: "Licht" },
    { question: "Dark", answer: "Dunkel" },
    { question: "Open", answer: "Öffnen" },
    { question: "Close", answer: "Schließen" },
    { question: "Street", answer: "Straße" },
    { question: "Mountain", answer: "Berg" },
    { question: "Ocean", answer: "Ozean" },
    { question: "Fire", answer: "Feuer" },
    { question: "Rain", answer: "Regen" },
    { question: "Snow", answer: "Schnee" },
    { question: "Wind", answer: "Wind" },
    { question: "Summer", answer: "Sommer" },
    { question: "Winter", answer: "Winter" },
    { question: "Spring", answer: "Frühling" },
    { question: "Autumn", answer: "Herbst" },
    { question: "Breakfast", answer: "Frühstück" },
    { question: "Lunch", answer: "Mittagessen" },
    { question: "Dinner", answer: "Abendessen" },
    { question: "Glass", answer: "Glas" },
    { question: "Plate", answer: "Teller" },
    { question: "Knife", answer: "Messer" },
    { question: "Fork", answer: "Gabel" },
    { question: "Spoon", answer: "Löffel" },
    { question: "Clothes", answer: "Kleidung" },
    { question: "Shoe", answer: "Schuh" },
    { question: "Hat", answer: "Hut" },
    { question: "Jacket", answer: "Jacke" },
    { question: "Bag", answer: "Tasche" },
    { question: "Bed", answer: "Bett" },
    { question: "Chair", answer: "Stuhl" },
    { question: "Table", answer: "Tisch" },
    { question: "Window", answer: "Fenster" },
    { question: "Door", answer: "Tür" },
    { question: "Computer", answer: "Computer" },
    { question: "Phone", answer: "Telefon" },
    { question: "Music", answer: "Musik" },
    { question: "Movie", answer: "Film" },
    { question: "Game", answer: "Spiel" },
    { question: "Airplane", answer: "Flugzeug" },
    { question: "Train", answer: "Zug" },
    { question: "Bus", answer: "Bus" },
    { question: "Bicycle", answer: "Fahrrad" },
    { question: "Doctor", answer: "Arzt" },
    { question: "Police", answer: "Polizei" },
    { question: "Firefighter", answer: "Feuerwehrmann" },
    { question: "Farmer", answer: "Bauer" },
    { question: "Artist", answer: "Künstler" },
    { question: "Singer", answer: "Sänger" },
    { question: "Writer", answer: "Schriftsteller" },
    { question: "Painter", answer: "Maler" },
    { question: "Scientist", answer: "Wissenschaftler" },
    { question: "Student", answer: "Student" },
    { question: "Dream", answer: "Traum" },
    { question: "Idea", answer: "Idee" },
    { question: "Problem", answer: "Problem" },
    { question: "Solution", answer: "Lösung" },
    { question: "Danger", answer: "Gefahr" },
    { question: "Success", answer: "Erfolg" }
  ],
  
  EnglishToItalian: [
    { question: "Hello", answer: "Ciao" },
    { question: "Thank you", answer: "Grazie" },
    { question: "Goodbye", answer: "Arrivederci" },
    { question: "Please", answer: "Per favore" },
    { question: "Yes", answer: "Sì" },
    { question: "No", answer: "No" },
    { question: "Water", answer: "Acqua" },
    { question: "Food", answer: "Cibo" },
    { question: "Friend", answer: "Amico" },
    { question: "Book", answer: "Libro" },
    { question: "Car", answer: "Macchina" },
    { question: "House", answer: "Casa" },
    { question: "Love", answer: "Amore" },
    { question: "School", answer: "Scuola" },
    { question: "Teacher", answer: "Insegnante" },
    { question: "Sun", answer: "Sole" },
    { question: "Moon", answer: "Luna" },
    { question: "Time", answer: "Tempo" },
    { question: "Work", answer: "Lavoro" },
    { question: "Money", answer: "Denaro" },
    { question: "Dog", answer: "Cane" },
    { question: "Cat", answer: "Gatto" },
    { question: "Day", answer: "Giorno" },
    { question: "Night", answer: "Notte" },
    { question: "Family", answer: "Famiglia" },
    { question: "City", answer: "Città" },
    { question: "Happy", answer: "Felice" },
    { question: "Sad", answer: "Triste" },
    { question: "Beautiful", answer: "Bello" },
    { question: "Small", answer: "Piccolo" },
    { question: "Big", answer: "Grande" },
    { question: "Fast", answer: "Veloce" },
    { question: "Slow", answer: "Lento" },
    { question: "Strong", answer: "Forte" },
    { question: "Weak", answer: "Debole" },
    { question: "Cold", answer: "Freddo" },
    { question: "Hot", answer: "Caldo" },
    { question: "Right", answer: "Destra" },
    { question: "Left", answer: "Sinistra" },
    { question: "Inside", answer: "Dentro" },
    { question: "Outside", answer: "Fuori" },
    { question: "Today", answer: "Oggi" },
    { question: "Tomorrow", answer: "Domani" },
    { question: "Yesterday", answer: "Ieri" },
    { question: "Light", answer: "Luce" },
    { question: "Dark", answer: "Buio" },
    { question: "Open", answer: "Aprire" },
    { question: "Close", answer: "Chiudere" },
    { question: "Street", answer: "Strada" },
    { question: "Mountain", answer: "Montagna" },
    { question: "Ocean", answer: "Oceano" },
    { question: "Fire", answer: "Fuoco" },
    { question: "Rain", answer: "Pioggia" },
    { question: "Snow", answer: "Neve" },
    { question: "Wind", answer: "Vento" },
    { question: "Summer", answer: "Estate" },
    { question: "Winter", answer: "Inverno" },
    { question: "Spring", answer: "Primavera" },
    { question: "Autumn", answer: "Autunno" },
    { question: "Breakfast", answer: "Colazione" },
    { question: "Lunch", answer: "Pranzo" },
    { question: "Dinner", answer: "Cena" },
    { question: "Glass", answer: "Bicchiere" },
    { question: "Plate", answer: "Piatto" },
    { question: "Knife", answer: "Coltello" },
    { question: "Fork", answer: "Forchetta" },
    { question: "Spoon", answer: "Cucchiaio" },
    { question: "Clothes", answer: "Vestiti" },
    { question: "Shoe", answer: "Scarpa" },
    { question: "Hat", answer: "Cappello" },
    { question: "Jacket", answer: "Giacca" },
    { question: "Bag", answer: "Borsa" },
    { question: "Bed", answer: "Letto" },
    { question: "Chair", answer: "Sedia" },
    { question: "Table", answer: "Tavolo" },
    { question: "Window", answer: "Finestra" },
    { question: "Door", answer: "Porta" },
    { question: "Computer", answer: "Computer" },
    { question: "Phone", answer: "Telefono" },
    { question: "Music", answer: "Musica" },
    { question: "Movie", answer: "Film" },
    { question: "Game", answer: "Gioco" },
    { question: "Airplane", answer: "Aereo" },
    { question: "Train", answer: "Treno" },
    { question: "Bus", answer: "Autobus" },
    { question: "Bicycle", answer: "Bicicletta" },
    { question: "Doctor", answer: "Dottore" },
    { question: "Police", answer: "Polizia" },
    { question: "Firefighter", answer: "Pompiere" },
    { question: "Farmer", answer: "Contadino" },
    { question: "Artist", answer: "Artista" },
    { question: "Singer", answer: "Cantante" },
    { question: "Writer", answer: "Scrittore" },
    { question: "Painter", answer: "Pittore" },
    { question: "Scientist", answer: "Scienziato" },
    { question: "Student", answer: "Studente" },
    { question: "Dream", answer: "Sogno" },
    { question: "Idea", answer: "Idea" },
    { question: "Problem", answer: "Problema" },
    { question: "Solution", answer: "Soluzione" },
    { question: "Danger", answer: "Pericolo" },
    { question: "Success", answer: "Successo" }
  ],
  
    EnglishToJapanese: [
      { question: "Hello", answer: "こんにちは" },
      { question: "Thank you", answer: "ありがとう" },
      { question: "Goodbye", answer: "さようなら" },
      { question: "Please", answer: "お願いします" },
      { question: "Yes", answer: "はい" },
      { question: "No", answer: "いいえ" },
      { question: "Water", answer: "水" },
      { question: "Food", answer: "食べ物" },
      { question: "Friend", answer: "友達" },
      { question: "Book", answer: "本" },
      { question: "Car", answer: "車" },
      { question: "House", answer: "家" },
      { question: "Love", answer: "愛" },
      { question: "School", answer: "学校" },
      { question: "Teacher", answer: "先生" },
      { question: "Sun", answer: "太陽" },
      { question: "Moon", answer: "月" },
      { question: "Time", answer: "時間" },
      { question: "Work", answer: "仕事" },
      { question: "Money", answer: "お金" },
      { question: "Dog", answer: "犬" },
      { question: "Cat", answer: "猫" },
      { question: "Day", answer: "日" },
      { question: "Night", answer: "夜" },
      { question: "Family", answer: "家族" },
      { question: "City", answer: "都市" },
      { question: "Happy", answer: "幸せ" },
      { question: "Sad", answer: "悲しい" },
      { question: "Beautiful", answer: "美しい" },
      { question: "Small", answer: "小さい" },
      { question: "Big", answer: "大きい" },
      { question: "Fast", answer: "速い" },
      { question: "Slow", answer: "遅い" },
      { question: "Strong", answer: "強い" },
      { question: "Weak", answer: "弱い" },
      { question: "Cold", answer: "寒い" },
      { question: "Hot", answer: "暑い" },
      { question: "Right", answer: "右" },
      { question: "Left", answer: "左" },
      { question: "Inside", answer: "内" },
      { question: "Outside", answer: "外" },
      { question: "Today", answer: "今日" },
      { question: "Tomorrow", answer: "明日" },
      { question: "Yesterday", answer: "昨日" },
      { question: "Light", answer: "光" },
      { question: "Dark", answer: "暗い" },
      { question: "Open", answer: "開ける" },
      { question: "Close", answer: "閉める" },
      { question: "Street", answer: "通り" },
      { question: "Mountain", answer: "山" },
      { question: "Ocean", answer: "海" },
      { question: "Fire", answer: "火" },
      { question: "Rain", answer: "雨" },
      { question: "Snow", answer: "雪" },
      { question: "Wind", answer: "風" },
      { question: "Summer", answer: "夏" },
      { question: "Winter", answer: "冬" },
      { question: "Spring", answer: "春" },
      { question: "Autumn", answer: "秋" },
      { question: "Breakfast", answer: "朝食" },
      { question: "Lunch", answer: "昼食" },
      { question: "Dinner", answer: "夕食" },
      { question: "Glass", answer: "コップ" },
      { question: "Plate", answer: "皿" },
      { question: "Knife", answer: "ナイフ" },
      { question: "Fork", answer: "フォーク" },
      { question: "Spoon", answer: "スプーン" },
      { question: "Clothes", answer: "服" },
      { question: "Shoe", answer: "靴" },
      { question: "Hat", answer: "帽子" },
      { question: "Jacket", answer: "ジャケット" },
      { question: "Bag", answer: "バッグ" },
      { question: "Bed", answer: "ベッド" },
      { question: "Chair", answer: "椅子" },
      { question: "Table", answer: "テーブル" },
      { question: "Window", answer: "窓" },
      { question: "Door", answer: "ドア" },
      { question: "Computer", answer: "コンピューター" },
      { question: "Phone", answer: "電話" },
      { question: "Music", answer: "音楽" },
      { question: "Movie", answer: "映画" },
      { question: "Game", answer: "ゲーム" },
      { question: "Airplane", answer: "飛行機" },
      { question: "Train", answer: "電車" },
      { question: "Bus", answer: "バス" },
      { question: "Bicycle", answer: "自転車" },
      { question: "Doctor", answer: "医者" },
      { question: "Police", answer: "警察" },
      { question: "Firefighter", answer: "消防士" },
      { question: "Farmer", answer: "農家" },
      { question: "Artist", answer: "芸術家" },
      { question: "Singer", answer: "歌手" },
      { question: "Writer", answer: "作家" },
      { question: "Painter", answer: "画家" },
      { question: "Scientist", answer: "科学者" },
      { question: "Student", answer: "学生" },
      { question: "Dream", answer: "夢" },
      { question: "Idea", answer: "アイデア" },
      { question: "Problem", answer: "問題" },
      { question: "Solution", answer: "解決" },
      { question: "Danger", answer: "危険" },
      { question: "Success", answer: "成功" }
    ]
  };


// Language display names and accent codes
const languageInfo = {
  EnglishToKannada: { name: "Kannada", code: "kn-IN", flag: "🇮🇳", color: "#FF9933" },
  EnglishToSpanish: { name: "Spanish", code: "es-ES", flag: "🇪🇸", color: "#F1BF00" },
  EnglishToFrench: { name: "French", code: "fr-FR", flag: "🇫🇷", color: "#0055A4" },
  EnglishToGerman: { name: "German", code: "de-DE", flag: "🇩🇪", color: "#DD0000" },
  EnglishToItalian: { name: "Italian", code: "it-IT", flag: "🇮🇹", color: "#009246" },
  EnglishToJapanese: { name: "Japanese", code: "ja-JP", flag: "🇯🇵", color: "#BC002D" }
};

const FlashcardGame = () => {
  const [language, setLanguage] = useState("EnglishToSpanish");
  const [words, setWords] = useState(wordSets[language]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [streak, setStreak] = useState(0);
  const [mastered, setMastered] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  // Reset animation state after each card change
  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 500);
    return () => clearTimeout(timer);
  }, [index]);

  // Show confetti when score increases by 5
  useEffect(() => {
    if (score > 0 && score % 5 === 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [score]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageInfo[language].code;
    speechSynthesis.speak(utterance);
  };

  const handleFlip = () => {
    if (!flipped) {
      setFlipped(true);
      speak(words[index].answer);
      setIsCorrect(true);
      
      // Add to mastered if not already there
      if (!mastered.includes(index)) {
        setMastered([...mastered, index]);
      }
    }
  };

  const handleNext = () => {
    if (flipped) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    setFlipped(false);
    setIsCorrect(null);
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handleReset = () => {
    setIndex(0);
    setScore(0);
    setFlipped(false);
    setIsCorrect(null);
    setStreak(0);
    setMastered([]);
  };

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    setWords(wordSets[newLanguage]);
    handleReset();
  };

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Calculate progress percentage
  const progress = ((index + 1) / words.length) * 100;
  const masteredPercentage = (mastered.length / words.length) * 100;

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SportsEsports sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" color="primary.main" fontWeight="bold">
          GameLang
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText primary="My Courses" />
        </ListItem>
        <ListItem button selected>
          <ListItemIcon>
            <MenuBook color="primary" />
          </ListItemIcon>
          <ListItemText primary="Flashcards" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Bookmark />
          </ListItemIcon>
          <ListItemText primary="Saved Items" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <SportsEsports sx={{ color: 'primary.main', mr: 1 }} />
            <Typography variant="h6" component="div" fontWeight="bold">
              GameLang
            </Typography>
          </Box>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton sx={{ ml: 1 }}>
            <Avatar sx={{ width: 32, height: 32 }} alt="User Profile" src="/user-avatar.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          bgcolor: '#f5f7fa',
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        {/* Confetti effect */}
        {showConfetti && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
              zIndex: 1000,
              overflow: "hidden"
            }}
          >
            {[...Array(50)].map((_, i) => (
              <Box
                key={i}
                component={motion.div}
                sx={{
                  position: "absolute",
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  borderRadius: "50%"
                }}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  opacity: 1
                }}
                animate={{
                  y: window.innerHeight + 20,
                  opacity: 0,
                  x: Math.random() * window.innerWidth
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </Box>
        )}

        {/* Page Header */}
        <Box 
          sx={{ 
            py: 3, 
            px: 3, 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, sm: 0 } }}>
            <IconButton 
              sx={{ mr: 1, bgcolor: 'white', boxShadow: 1 }}
              onClick={() => window.history.back()}
            >
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography variant="h5" component="h1" fontWeight="bold">
                Language Flashcards
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Master vocabulary through interactive learning
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip 
              icon={<EmojiEvents sx={{ color: "#FFD700 !important" }} />}
              label={`Score: ${score}`}
              sx={{ 
                bgcolor: "white", 
                fontWeight: "bold",
                boxShadow: 1
              }}
            />
            
            <Chip 
              icon={<FlashOn sx={{ color: "#FF4500 !important" }} />}
              label={`Streak: ${streak}`}
              sx={{ 
                bgcolor: "white", 
                fontWeight: "bold",
                boxShadow: 1
              }}
            />
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ px: 3 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons={isMobile ? "auto" : false}
            allowScrollButtonsMobile
            sx={{ 
              mb: 3, 
              bgcolor: 'white', 
              borderRadius: 1,
              boxShadow: 1,
              '& .MuiTab-root': {
                minHeight: 64,
              }
            }}
          >
            <Tab 
              icon={<MenuBook />} 
              label="Flashcards" 
              iconPosition="start"
            />
            <Tab 
              icon={<Psychology />} 
              label="Practice" 
              iconPosition="start"
            />
            <Tab 
              icon={<StarBorder />} 
              label="Mastered" 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <Container maxWidth="lg" sx={{ mb: 4 }}>
          {activeTab === 0 && (
            <Grid container spacing={3}>
              {/* Main Flashcard Column */}
              <Grid item xs={12} md={8}>
                <Paper
                  elevation={2}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    background: "#ffffff",
                    position: "relative",
                    mb: 3
                  }}
                >
                  {/* Header Section */}
                  <Box
                    sx={{
                      p: { xs: 2, md: 3 },
                      background: `linear-gradient(135deg, ${languageInfo[language].color}22 0%, ${languageInfo[language].color}44 100%)`,
                      borderBottom: `4px solid ${languageInfo[language].color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
                        {languageInfo[language].flag} {languageInfo[language].name}
                      </Typography>
                      <Chip 
                        size="small"
                        label={`${mastered.length}/${words.length} mastered`}
                        sx={{ bgcolor: 'white' }}
                      />
                    </Box>
                    
                    <FormControl size="small" sx={{ minWidth: 180 }}>
                      <Select
                        value={language}
                        onChange={handleLanguageChange}
                        displayEmpty
                        variant="outlined"
                        sx={{ bgcolor: 'white', borderRadius: 1 }}
                      >
                        <MenuItem value="EnglishToKannada">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ mr: 1 }}>🇮🇳</Typography>
                            English to Kannada
                          </Box>
                        </MenuItem>
                        <MenuItem value="EnglishToSpanish">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ mr: 1 }}>🇪🇸</Typography>
                            English to Spanish
                          </Box>
                        </MenuItem>
                        <MenuItem value="EnglishToFrench">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ mr: 1 }}>🇫🇷</Typography>
                            English to French
                          </Box>
                        </MenuItem>
                        <MenuItem value="EnglishToGerman">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ mr: 1 }}>🇩🇪</Typography>
                            English to German
                          </Box>
                        </MenuItem>
                        <MenuItem value="EnglishToItalian">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ mr: 1 }}>🇮🇹</Typography>
                            English to Italian
                          </Box>
                        </MenuItem>
                        <MenuItem value="EnglishToJapanese">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography sx={{ mr: 1 }}>🇯🇵</Typography>
                            English to Japanese
                          </Box>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  {/* Progress Bar */}
                  <Box sx={{ px: 3, pt: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Card {index + 1} of {words.length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {Math.round(progress)}% Complete
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={progress} 
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: "rgba(0,0,0,0.05)",
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(90deg, ${languageInfo[language].color}88, ${languageInfo[language].color})`,
                          borderRadius: 4
                        }
                      }}
                    />
                  </Box>

                  {/* Flashcard */}
                  <Box sx={{ p: 3, perspective: "1000px" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          animate={{ rotateY: flipped ? 180 : 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          style={{
                            width: "100%",
                            transformStyle: "preserve-3d",
                            position: "relative"
                          }}
                        >
                          <Box
                            onClick={handleFlip}
                            sx={{
                              position: "relative",
                              width: "100%",
                              height: { xs: 200, sm: 250, md: 300 },
                              cursor: "pointer",
                              borderRadius: 4,
                              boxShadow: flipped 
                                ? `0 10px 30px ${languageInfo[language].color}44` 
                                : "0 10px 30px rgba(0,0,0,0.1)",
                              transition: "box-shadow 0.6s ease",
                            }}
                          >
                            {/* Front of card */}
                            <Box
                              sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 3,
                                borderRadius: 4,
                                background: `linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)`,
                                border: `2px solid ${languageInfo[language].color}22`,
                                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                transition: "transform 0.6s ease-in-out",
                              }}
                            >
                              <Typography 
                                variant={isMobile ? "h4" : "h3"} 
                                fontWeight="bold" 
                                color="#333"
                                sx={{ mb: 2, textAlign: "center" }}
                              >
                                {words[index].question}
                              </Typography>
                              <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center" }}>
                                Tap to reveal translation
                              </Typography>
                              <Box 
                                sx={{ 
                                  position: "absolute", 
                                  top: 16, 
                                  left: 16, 
                                  bgcolor: "rgba(0,0,0,0.05)",
                                  px: 1,
                                  py: 0.5,
                                  borderRadius: 1
                                }}
                              >
                                <Typography variant="caption" color="text.secondary">
                                  ENGLISH
                                </Typography>
                              </Box>
                            </Box>

                            {/* Back of card */}
                            <Box
                              sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 3,
                                borderRadius: 4,
                                background: `linear-gradient(135deg, ${languageInfo[language].color}22 0%, ${languageInfo[language].color}44 100%)`,
                                border: `2px solid ${languageInfo[language].color}`,
                                transform: flipped ? "rotateY(0deg)" : "rotateY(180deg)",
                                transition: "transform 0.6s ease-in-out",
                              }}
                            >
                              <Typography 
                                variant={isMobile ? "h4" : "h3"} 
                                fontWeight="bold" 
                                color="#333"
                                sx={{ mb: 3, textAlign: "center" }}
                              >
                                {words[index].answer}
                              </Typography>
                              
                              <Tooltip title="Listen to pronunciation">
                                <IconButton 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    speak(words[index].answer);
                                  }}
                                  sx={{ 
                                    bgcolor: "rgba(255,255,255,0.5)",
                                    color: languageInfo[language].color,
                                    '&:hover': {
                                      bgcolor: "rgba(255,255,255,0.7)",
                                    }
                                  }}
                                >
                                  <VolumeUp />
                                </IconButton>
                              </Tooltip>
                              
                              <Box 
                                sx={{ 
                                  position: "absolute", 
                                  top: 16, 
                                  left: 16, 
                                  bgcolor: "rgba(255,255,255,0.5)",
                                  px: 1,
                                  py: 0.5,
                                  borderRadius: 1,
                                  display: "flex",
                                  alignItems: "center"
                                }}
                              >
                                <Typography variant="caption" sx={{ mr: 0.5 }}>
                                  {languageInfo[language].flag}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                  {languageInfo[language].name.toUpperCase()}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </Box>

                  {/* Action Buttons */}
                  <Box 
                    sx={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      gap: 2,
                      flexWrap: "wrap",
                      p: 3,
                      pt: 0
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleNext}
                      endIcon={<NavigateNext />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: 2,
                        background: `linear-gradient(90deg, ${languageInfo[language].color}88, ${languageInfo[language].color})`,
                        boxShadow: `0 4px 10px ${languageInfo[language].color}44`,
                        fontWeight: "bold",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        "&:hover": {
                          background: `linear-gradient(90deg, ${languageInfo[language].color}, ${languageInfo[language].color})`,
                          transform: "translateY(-2px)",
                          boxShadow: `0 6px 15px ${languageInfo[language].color}66`,
                        }
                      }}
                    >
                      Next Card
                    </Button>
                    
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={handleReset}
                      startIcon={<RestartAlt />}
                      sx={{
                        py: 1.5,
                        px: 3,
                        borderRadius: 2,
                        borderColor: languageInfo[language].color,
                        color: languageInfo[language].color,
                        "&:hover": {
                          borderColor: languageInfo[language].color,
                          bgcolor: `${languageInfo[language].color}11`,
                        }
                      }}
                    >
                      Reset
                    </Button>
                  </Box>
                </Paper>

                {/* Learning Tips */}
                <Paper elevation={2} sx={{ borderRadius: 2, p: 3 }}>
                  <Typography variant="h6" fontWeight="medium" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Psychology sx={{ mr: 1, color: 'primary.main' }} />
                    Learning Tips
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                        <CheckCircle sx={{ color: "#4CAF50", mr: 1, fontSize: 18, mt: 0.3 }} />
                        <Typography variant="body2">
                          Practice daily to build your vocabulary
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                        <CheckCircle sx={{ color: "#4CAF50", mr: 1, fontSize: 18, mt: 0.3 }} />
                        <Typography variant="body2">
                          Say words out loud to improve pronunciation
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                        <CheckCircle sx={{ color: "#4CAF50", mr: 1, fontSize: 18, mt: 0.3 }} />
                        <Typography variant="body2">
                          Use new words in sentences for better retention
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
                        <CheckCircle sx={{ color: "#4CAF50", mr: 1, fontSize: 18, mt: 0.3 }} />
                        <Typography variant="body2">
                          Review mastered words periodically
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                {/* Progress Card */}
                <Paper elevation={2} sx={{ borderRadius: 2, p: 3, mb: 3 }}>
                  <Typography variant="h6" fontWeight="medium" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Star sx={{ mr: 1, color: '#FFD700' }} />
                    Your Progress
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Words Mastered
                      </Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {mastered.length}/{words.length} ({Math.round(masteredPercentage)}%)
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={masteredPercentage} 
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: "rgba(0,0,0,0.05)",
                        '& .MuiLinearProgress-bar': {
                          background: "linear-gradient(90deg, #4CAF50, #8BC34A)",
                          borderRadius: 4
                        }
                      }}
                    />
                  </Box>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Card variant="outlined" sx={{ borderRadius: 2, p: 2, textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold" color="primary.main">
                          {score}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Total Score
                        </Typography>
                      </Card>
                    </Grid>
                                     <Grid item xs={6}>
                      <Card variant="outlined" sx={{ borderRadius: 2, p: 2, textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#FF4500' }}>
                          {streak}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Current Streak
                        </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </Paper>

                {/* Language Stats */}
                <Paper elevation={2} sx={{ borderRadius: 2, p: 3, mb: 3 }}>
                  <Typography variant="h6" fontWeight="medium" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Language sx={{ mr: 1, color: languageInfo[language].color }} />
                    Language Stats
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Box 
                        sx={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          bgcolor: languageInfo[language].color,
                          color: 'white',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          mr: 1.5
                        }}
                      >
                        {languageInfo[language].flag}
                      </Box>
                      <Typography variant="body1" fontWeight="medium">
                        {languageInfo[language].name}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ pl: 4.5 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        • {mastered.length} words mastered
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        • {words.length - mastered.length} words remaining
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • {Math.round(masteredPercentage)}% complete
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Button 
                    fullWidth
                    variant="outlined"
                    startIcon={<Translate />}
                    sx={{
                      borderColor: languageInfo[language].color,
                      color: languageInfo[language].color,
                      "&:hover": {
                        borderColor: languageInfo[language].color,
                        bgcolor: `${languageInfo[language].color}11`,
                      }
                    }}
                  >
                    View All Languages
                  </Button>
                </Paper>
                
                {/* Achievement Card */}
                <Paper elevation={2} sx={{ borderRadius: 2, p: 3 }}>
                  <Typography variant="h6" fontWeight="medium" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <EmojiEvents sx={{ mr: 1, color: '#FFD700' }} />
                    Achievements
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        boxShadow: '0 2px 8px rgba(255, 215, 0, 0.5)',
                        mr: 2
                      }}
                    >
                      <FlashOn sx={{ color: 'white', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" fontWeight="medium">
                        Quick Learner
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Master 10 words in a row
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                      {streak >= 10 ? (
                        <CheckCircle sx={{ color: '#4CAF50' }} />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {streak}/10
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #9C27B0, #673AB7)',
                        boxShadow: '0 2px 8px rgba(156, 39, 176, 0.5)',
                        mr: 2,
                        opacity: masteredPercentage >= 50 ? 1 : 0.5
                      }}
                    >
                      <School sx={{ color: 'white', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" fontWeight="medium" sx={{ opacity: masteredPercentage >= 50 ? 1 : 0.7 }}>
                        Halfway There
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Master 50% of all words
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                      {masteredPercentage >= 50 ? (
                        <CheckCircle sx={{ color: '#4CAF50' }} />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          {Math.round(masteredPercentage)}%/50%
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          )}
          
          {activeTab === 1 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Psychology sx={{ fontSize: 60, color: 'text.secondary', opacity: 0.5, mb: 2 }} />
              <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>
                Practice Mode Coming Soon
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We're working on new ways to help you practice your vocabulary.
              </Typography>
            </Box>
          )}
          
          {activeTab === 2 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <StarBorder sx={{ fontSize: 60, color: 'text.secondary', opacity: 0.5, mb: 2 }} />
              <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>
                {mastered.length > 0 ? `You've mastered ${mastered.length} words!` : 'No mastered words yet'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {mastered.length > 0 
                  ? 'Keep practicing to maintain your knowledge.' 
                  : 'Flip cards to start mastering vocabulary.'}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default FlashcardGame;
