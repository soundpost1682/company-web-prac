import React from "react";

const AdminContacts = () => {
  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      <h1 className="text-4xl font-bold mt-6 mb-4">Q&A</h1>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex w-full md:w-auto gap-2">
          <select className="border rounded px-3 py-2 text-base">
            <option value="name">name</option>
            <option value="email">email</option>
            <option value="phone">phone</option>
            <option value="message">message</option>
          </select>
          <div className="flex-1 md:w-80">
            <input
              type="text"
              placeholder="search"
              className="w-full border px-3 py-2 text-base"
            />
          </div>
          <select className="border rounded px-3 py-2 text-base">
            <option value="all">all</option>
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
            <option value="completed">completed</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-base font-bold text-gray-600">
            page per :{" "}
          </label>
          <select className="border rounded px-3 py-2">
            {[10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>{`${size}`}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-lg font-bold text-gray-600">Total 0 documents</div>
      </div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden text-sm lg:text-lg font-bold">
          <thead className="bg-gray-100">
            <tr>
            <th className="px-4 py-3 text-left">no.</th>
            <th className="px-4 py-3 text-left">name</th>
            <th className="px-4 py-3 text-left">email</th>
            <th className="px-4 py-3 text-left">phone</th>
            <th className="px-4 py-3 text-left">content</th>
            <th className="px-4 py-3 text-left">status</th>
            <th className="px-4 py-3 text-left">manage</th>
            </tr>

          </thead>
        </table>
      </div>
    </div>
  );
};

export default AdminContacts;
