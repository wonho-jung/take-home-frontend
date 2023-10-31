import React from "react";

const UsersDataTable = ({ usersData }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-blue-400 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              User name
            </th>
            <th scope="col" className="px-6 py-3">
              T-shirt size
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No users found.
              </td>
            </tr>
          )}
          {usersData.length > 0 &&
            usersData.map((user, index) => {
              return (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 1 ? "bg-blue-50" : "bg-white"
                  } border-b`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {user.id}
                  </th>
                  <td className="px-6 py-4">{user.user_name}</td>
                  <td className="px-6 py-4">{user.size}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDataTable;
