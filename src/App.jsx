import React, { useState } from "react";
import user1 from "./assets/img/user1.png";
import "./App.css";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/main/Hero";
const App = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Новые",
      items: [
        {
          id: 1,
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 2,
          title: "Маркетолог",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 3,
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
    {
      id: 2,
      title: "Текущие",
      items: [
        {
          id: 4,
          title: "PHP Developer",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 5,
          title: "Freshers",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 6,
          title: "Joomla Developer",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
    {
      id: 3,
      title: "Закрытые",
      items: [],
    },
    {
      id: 4,
      title: "Архив",
      items: [
        {
          id: 7,
          title: "UI/UX дизайнер",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 8,
          title: "Маркетолог",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 9,
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
    {
      id: 5,
      title: "Удаленные",
      items: [
        {
          id: 10,
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 11,
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 12,
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
        {
          id: 13,
          title: "Менеджер по продажам",
          desc: "Отдел разработки мобильного приложения",
          bool: true,
          people: 3,
          count: 255,
          img: user1,
          name: "Алексей Щербаков",
        },
      ],
    },
  ]);
  return (
    <>
      <Header />
      <Sidebar />
      <Hero boards={boards} setBoards={setBoards} />
    </>
  );
};

export default App;
