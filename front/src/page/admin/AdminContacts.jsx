import React from "react";

const AdminContacts = () => {
  const contacts = [
    {
      id: 1,
      name: "홍길동",
      email: "hong@example.com",
      phone: "010-1234-5678",
      message: "상품에 대한 문의입니다.",
      status: "대기중",
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      phone: "010-8765-4321",
      message: "환불 요청합니다.",
      status: "진행중",
    },
    {
      id: 3,
      name: "박철수",
      email: "park@example.com",
      phone: "010-0000-1111",
      message: "연락이 지연되고 있습니다.",
      status: "완료",
    },
  ];

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
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b">
                <td className="px-4 py-3">{contact.id}</td>
                <td className="px-4 py-3">{contact.name}</td>
                <td className="px-4 py-3">{contact.email}</td>
                <td className="px-4 py-3">{contact.phone}</td>
                <td className="px-4 py-3">{contact.message}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      contact.status == "대기중"
                        ? "bg-blue-100 text-blue-800"
                        : contact.status == "진행중"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {contact.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center space-x-2">
                    <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
                      edit
                    </button>
                    <button className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600">
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 border rounded-lg bg-white shadow-md"
          >
            <div className="text-lg font-bold">number : {contact.id}</div>
            <div>name : {contact.name}</div>
            <div>email : {contact.email}</div>
            <div>phone : {contact.phone}</div>
            <div>message : {contact.message}</div>
            <div>
              status :
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  contact.status == "대기중"
                    ? "bg-blue-100 text-blue-800"
                    : contact.status == "진행중"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {contact.status}
              </span>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
                edit
              </button>
              <button className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600">
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-2 text-lg font-bold">
        <button className="px-3 py-1 rounded border disabled:opacity-50">back</button>
        <span className="px-3 py-1">1/1</span>
        <button className="px-3 py-1 rounded border disabled:opacity-50">next</button>
      </div>
    </div>
  );
};

export default AdminContacts;
