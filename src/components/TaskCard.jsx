"use client";
import React from "react";

import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div
      className="p-3 bg-slate-900 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => {
        router.push(`/task/${task.id}`);
      }}
    >
      <h1 className="mb-2 text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
