import { prisma } from "@/libs/prisma";

import TaskCard from "@/components/TaskCard";

async function loadTask() {
  // Make request with fetch
  // const res = awaitfetch(`http://localhost:3000/api/task`, { method: "GET" });
  // const data = await res.json();

  // return data;

  const task = await prisma.task.findMany();
  return task;
}

export default async function Home() {
  const tasks = await loadTask();
  return (
    <section className="mx-auto contianer">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
