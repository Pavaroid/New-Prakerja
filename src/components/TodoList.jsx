import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);

  useEffect(() => {
    // Hitung total tasks
    setTotalTasks(tasks.length);

    // Hitung total tasks selesai/dihapus
    const completedTasks = tasks.filter((task) => task.completed).length;
    setTotalCompletedTasks(completedTasks);

    // Alert saat aplikasi dibuka
    alert("Selamat Datang");

    // Clean-up effect (alert saat aplikasi ditutup)
    return () => {
      alert("Sampai Jumpa");
    };
  }, [tasks]); // Memantau perubahan tasks untuk mengupdate totalTasks dan totalCompletedTasks

  // Logika untuk menambah, menghapus, dan menandai selesai task di sini

  return (
    <div>
      <h2>Todo List</h2>
      {/* Tampilan Todo List */}
      {/* Form untuk menambah task */}
      {/* Tampilkan total tasks */}
      <p>Total Tasks: {totalTasks}</p>
      {/* Tampilkan total tasks selesai/dihapus */}
      <p>Total Completed Tasks: {totalCompletedTasks}</p>
    </div>
  );
};

export default TodoList;
