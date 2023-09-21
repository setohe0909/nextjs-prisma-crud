"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ useParams }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescripcion(data.descripcion);
        });
    }
  }, [useParams.id]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (title && descripcion) {
      const task = {
        title,
        descripcion,
      };

      if (params.id) {
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "PUT",
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        console.info("Tarea actualizada ", data);
      } else {
        const res = await fetch("/api/tasks", {
          method: "POST",
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        console.info("Tarea creada ", data);
      }

      router.refresh();
      router.push("/");
    }
  };

  const onDelete = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.info("Tarea eliminada ", data);

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center w-full h-screen sm:w-1/4 item-center">
      <form className="p-10 bg-slate-800" onSubmit={onSubmit}>
        <label htmlFor="title" className="text-sm font-bold">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="w-full p-2 mb-4 text-black border border-gray-499"
          placeholder="Titulo"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <label htmlFor="descripcion" className="text-sm font-bold">
          Descripcion de la tarea
        </label>

        <textarea
          id="descripcion"
          className="w-full p-2 mb-4 text-black border border-gray-499"
          row="3"
          placeholder="Escribe tu tarea"
          onChange={(event) => setDescripcion(event.target.value)}
          value={descripcion}
        ></textarea>
        <button
          className="font-bold text-white bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          Crear
        </button>

        {params.id && (
          <button
            className="px-4 py-2 ml-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            type="button"
            onClick={onDelete}
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
}

export default NewPage;
