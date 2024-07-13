import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { api } from "../../utils/api";
import useEscape from "../../hooks/useEscape";

import { register, authorize, checkToken } from "../../utils/auth";

import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

///// App /////

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEscape(activeModal, handleCloseModal);

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleAddItemSubmit = (item) => {
    console.log(item);
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    api
      .deleteItem(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c._id !== card._id));
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    register(name, avatar, email, password)
      .then((res) => {
        if (res) {
          handleAuthorize({ email, password });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAuthorize = ({ email, password }) => {
    authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          handleCloseModal();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Weather API - retrieves weather data
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const weatherData = parseWeatherData(data);
        setTemp(weatherData.temperature);

        const locationName = parseLocationData(data);
        setLocationName(locationName);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Data API - retrieves item card data
  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header onCreateModal={handleCreateModal} locationName={locationName} />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              weatherTemp={{ temperature: temp }}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCreateModal={handleCreateModal}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />

      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          onAddItem={handleAddItemSubmit}
        />
      )}

      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          handleCardDelete={handleCardDelete}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal onClose={handleCloseModal} onRegister={handleRegister} />
      )}

      {activeModal === "login" && (
        <LoginModal onClose={handleCloseModal} onLogin={handleAuthorize} />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
