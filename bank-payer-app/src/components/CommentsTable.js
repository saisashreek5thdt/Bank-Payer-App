import React, { useEffect, useState } from "react";

const CommentsTable = () => {
  const [comments, setComments] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 
  const [loading, setLoading] = useState(true); 

  // Fetch data using native fetch API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setComments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = comments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Comments Table</h1>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Comment</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((comment, index) => (
                  <tr
                    key={comment.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-100 transition duration-200`}
                  >
                    <td className="border p-2 text-center">{comment.id}</td>
                    <td className="border p-2">{comment.name}</td>
                    <td className="border p-2">{comment.email}</td>
                    <td className="border p-2">{comment.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-gray-300 rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-400"
              }`}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-gray-300 rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-400"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsTable;
