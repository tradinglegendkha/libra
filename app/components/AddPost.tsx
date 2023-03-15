"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mined?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200 "
        ></textarea>
      </div>
      <div>
        <button
          className="text-sm bg-teal-600 text-white py-2 px-6"
          type="submit"
        >
          Create a post
        </button>
      </div>
    </form>
  );
}
