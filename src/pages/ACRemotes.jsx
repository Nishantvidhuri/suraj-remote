import React from "react";
import { useACProductContext } from "../context/ACProductContext";
import ACCard from "../components/ACCard";

const ACRemotes = ({ searchQuery }) => {
  const { acProducts } = useACProductContext();

  // Filter based on search query (if provided)
  const filteredRemotes = acProducts.filter((remote) =>
    remote.name.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  // Sort filtered remotes by shelf number
  const sortedRemotes = filteredRemotes.sort((a, b) => {
    // Extract numeric parts of the shelf number for sorting
    const shelfA = parseInt(a.shelfNumber.replace(/\D/g, "")) || 0; // Extract numeric part or default to 0
    const shelfB = parseInt(b.shelfNumber.replace(/\D/g, "")) || 0;
    return shelfA - shelfB; // Sort in ascending order of shelf number
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">AC Remotes</h2>
      {sortedRemotes.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No AC remotes found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedRemotes.map((remote, index) => (
            <ACCard key={index} {...remote} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ACRemotes; 