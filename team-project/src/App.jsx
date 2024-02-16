import Header from "./components/Header";
import Employees from "./components/Employees";
import { useState, useEffect } from "react";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "Team A"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || [
      {
        id: 1,
        fullName: "John Doe",
        gender: "Male",
        designation: "Software Engineer",
        teamName: "Team A",
      },
      {
        id: 2,
        fullName: "Jane Smith",
        gender: "Female",
        designation: "Product Manager",
        teamName: "Team B",
      },
      {
        id: 3,
        fullName: "Alex Johnson",
        gender: "Non-binary",
        designation: "UX Designer",
        teamName: "Team C",
      },
      {
        id: 4,
        fullName: "Michael Lee",
        gender: "Male",
        designation: "Data Analyst",
        teamName: "Team D",
      },
      {
        id: 5,
        fullName: "Emily Brown",
        gender: "Female",
        designation: "Quality Assurance Engineer",
        teamName: "Team A",
      },
      {
        id: 6,
        fullName: "Ryan Patel",
        gender: "Male",
        designation: "Scrum Master",
        teamName: "Team B",
      },
      {
        id: 7,
        fullName: "Maria Rodriguez",
        gender: "Female",
        designation: "Frontend Developer",
        teamName: "Team C",
      },
      {
        id: 8,
        fullName: "David Kim",
        gender: "Male",
        designation: "DevOps Engineer",
        teamName: "Team D",
      },
      {
        id: 9,
        fullName: "Olivia Chen",
        gender: "Female",
        designation: "Business Analyst",
        teamName: "Team A",
      },
      {
        id: 10,
        fullName: "Ethan Nguyen",
        gender: "Male",
        designation: "Product Owner",
        teamName: "Team B",
      },
      {
        id: 11,
        fullName: "Chloe Adams",
        gender: "Female",
        designation: "Backend Developer",
        teamName: "Team C",
      },
      {
        id: 12,
        fullName: "Daniel Garcia",
        gender: "Male",
        designation: "Technical Lead",
        teamName: "Team D",
      },
    ]
  );

  const selectedMembers = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleSelectedTeam(e) {
    setSelectedTeam(e.target.value);
  }

  function handleClick(e) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }

  return (
    <div className="text-center min-h-screen">
      <Header selectedTeam={selectedTeam} selectedMembers={selectedMembers} />
      <Employees
        employees={employees}
        setEmployees={setEmployees}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
        handleClick={handleClick}
        handleSelectedTeam={handleSelectedTeam}
      />
    </div>
  );
}

export default App;
