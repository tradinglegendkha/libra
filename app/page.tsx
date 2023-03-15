"use client";
import Image from "next/image";
import styles from "./page.module.css";
import AddPost from "./components/AddPost";

export default function Home() {
  return (
    <main className="">
      <h1>Home</h1>
      <AddPost />
    </main>
  );
}
