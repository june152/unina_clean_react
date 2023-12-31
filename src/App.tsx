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
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/home/1" replace />,
        },
        { path: ":page", element: <HomePage /> },
      ]
    },
    {
      path: "/homecleaning/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/homecleaning/1" replace />,
        },
        { path: ":page", element: <HomeCleaning /> },
      ]
    },
    {
      path: "/officecleaning/*",
      children: [
        {
          path: "*",
          element: <Navigate to="/officecleaning/1" replace />,
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
