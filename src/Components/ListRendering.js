import React from "react";
import PersonRendering from "./PersonRendering"; // Updated import

function ListRendering() {
  const Lists = ["Sheldon", "Lenord", "Howard", "Raj"];
  const Persons = [
    {
      id: 1,
      name: "Spongebob",
      age: "26",
      job: "Fry Cook",
    },
    {
      id: 2,
      name: "Patrick",
      age: "30",
      job: "Unemployed",
    },
    {
      id: 3,
      name: "Sandy",
      age: "27",
      job: "Scientist",
    },
    {
      id: 4,
      name: "Mr. Krabs",
      age: "38",
      job: "Krusty Krabs Owner",
    },
  ];

  // Correctly passing person object
  const personList = Persons.map((person) => (
    <PersonRendering key={person.id} person={person} /> // Use key prop for list items
  ));

  const ListPerson = Lists.map((list, index) => (
    <h2 key={index}>
      {" "}
      {index}
      {list}
    </h2>
  ));

  return (
    <div>
      <div>{personList}</div>
      <div>{ListPerson}</div>
    </div>
  );
}

export default ListRendering;
