import React, { useState } from 'react';
import { useRoutes, Navigate } from "react-router-dom";

import './App.css';
import './styles/style.css'
import './styles/common.css'
import HomePage from './pages/HomePage';
import Header from './common/Header';
import Footer from './common/Footer';
import HomeCleaning from './pages/HomeCleaning';
import OfficeCleaning from './pages/OfficeCleaning';
import Modal from './common/Modal';

function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const handleModalToggle = (isVisible : boolean) => {
    setModalVisible(isVisible)
  }

  const routes = useRoutes([
    {
      path: "*",
      element: <Navigate to="/unina_clean_react/home" replace />,
    },
    {
      path: "/unina_clean_react/home/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/unina_clean_react/home/1" replace />,
        },
        { path: ":page", element: <HomePage /> },
      ]
    },
    {
      path: "/unina_clean_react/homecleaning/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/unina_clean_react/homecleaning/1" replace />,
        },
        { path: ":page", element: <HomeCleaning /> },
      ]
    },
    {
      path: "/unina_clean_react/officecleaning/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/unina_clean_react/officecleaning/1" replace />,
        },
        { path: ":page", element: <OfficeCleaning /> },
      ]
    },
  ])

  return (
    <div className="App">
      <Header handleModalToggle={handleModalToggle} />
      {routes}
      <Footer />
      {
        modalVisible && (
          <Modal handleModalToggle={handleModalToggle} />
        )
      }
    </div>
  );
}

export default App;
