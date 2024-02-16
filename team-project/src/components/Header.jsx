import React from "react";

function Header({ selectedMembers, selectedTeam }) {
  return (
    <div className="mt-14 font-bold text-2xl text-white">
      <h2>{`${selectedTeam} has ${selectedMembers} members.`}</h2>
    </div>
  );
}

export default Header;
