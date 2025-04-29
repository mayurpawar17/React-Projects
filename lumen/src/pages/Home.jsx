import React from "react";
import { Header } from "../components/Header";
import "../assets/styles/home.css";
import { NoteCard } from "../components/NoteCard";

const Home = () => {
  const notes = [
    {
      id: 1,
      title: "Reading",
      content:
        "Explore novels, articles, and blogs daily for relaxation and learning.",
    },
    {
      id: 2,
      title: "Coding",
      content:
        "Practice programming by solving challenges or building small projects.",
    },
    {
      id: 3,
      title: "Workout",
      content:
        "Engage in physical activities like yoga, running, or gym sessions.",
    },
    {
      id: 4,
      title: "Meditation",
      content: "Take time each day to reflect and practice mindfulness.",
    },
    {
      id: 5,
      title: "Cooking",
      content: "Experiment with new recipes or enhance culinary skills.",
    },
    {
      id: 6,
      title: "Learning",
      content: "Pick up a new skill or delve into educational topics.",
    },
    {
      id: 7,
      title: "Planning",
      content: "Organize your day or set goals for the week.",
    },
    {
      id: 8,
      title: "Socializing",
      content: "Spend quality time with friends and family.",
    },
    {
      id: 9,
      title: "Music",
      content: "Listen to or create music that resonates with your mood.",
    },
    {
      id: 10,
      title: "Gardening",
      content: "Nurture plants and enjoy connecting with nature.",
    },
  ];
  return (
    <>
      <Header />
      <div className="home-container">
        {notes.map((note) => (
          <NoteCard key={note.id} title={note.title} content={note.content} />
        ))}
      </div>{" "}
    </>
  );
};

export default Home;
