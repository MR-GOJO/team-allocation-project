import React from "react";

function Employees({
  employees,
  selectedTeam,
  handleClick,
  handleSelectedTeam,
}) {
  const cards = employees.map((employee) => (
    <div
      key={employee.id}
      id={employee.id}
      className={`${
        employee.teamName === selectedTeam
          ? "bg-zinc-600 border-zinc-500"
          : "border-none"
      } border-4 shadow-[0_4px_6px_rgba(0,0,0,0.18)] overflow-hidden rounded-2xl cursor-pointer`}
      onClick={handleClick}
    >
      <img
        className="w-full h-44"
        src={
          employee.gender === "Male"
            ? "https://th.bing.com/th?id=OIP.soDaj1KtMx27Ul96kT9HKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"
            : "https://th.bing.com/th/id/OIP.xZn1igY5VkdTrYVYusNGCwHaHa?w=199&h=199&c=7&r=0&o=5&dpr=2&pid=1.7"
        }
        alt="pic"
      />
      <div className="flex flex-col justify-center items-center px-2 py-2">
        <h1 className="text-[1.8rem] uppercase text-white font-semibold">
          {employee.fullName}
        </h1>
        <p>{employee.designation}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col justify-center items-center">
      <select
        className="w-96 h-10 rounded-lg bg-white mt-10"
        value={selectedTeam}
        onChange={handleSelectedTeam}
      >
        <option value="Team A">Team A</option>
        <option value="Team B">Team B</option>
        <option value="Team C">Team C</option>
        <option value="Team D">Team D</option>
      </select>
      <div className="min-h-screen w-1/22 bg-zinc-800 text-zinc-200 grid grid-cols-3 gap-10 my-20">
        {cards}
      </div>
    </div>
  );
}

export default Employees;
