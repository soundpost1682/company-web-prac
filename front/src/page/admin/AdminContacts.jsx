import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Swal from 'sweetalert2'

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/contact", {
          withCredentials: true,
        });
        setContacts(response.data);
      } catch (error) {
        console.log("fetching QA failed.", error);
      }
    };
    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setSelectContact(contact);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      await axios.put(
        `http://localhost:3000/api/contact/${selectedContact._id}`,
        { status: newStatus },
        { withCredentials: true }
      );
      setContacts(
        contacts.map((contact) =>
          contact._id === selectedContact._id
            ? { ...contact, status: newStatus }
            : contact
        )
      );
      setIsModalOpen(false)
      Swal.fire('Edit Done!', 'Status changed', 'success')
    } catch (error) {
      console.log('edit failed.', error)
      Swal.fire('Error!', 'Status fixing', 'error')

      
    }
  };

  const handleDelete = async (id) =>{
        const result = await Swal.fire({
      title: '삭제하시겠습니까?',
      text: "이 작업은 되돌릴 수 없습니다!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '삭제',
      cancelButtonText: '취소'
    });
    if (result.isConfirmed){
      try {
        await axios.delete(`http://localhost:3000/api/contact/${id}`, {withCredentials:true})
        setContacts(contacts.filter(contact => contact._id !== id))
        Swal.fire('Delted', 'QA deleted ', 'success')
      }catch(error){
        console.log('Failed deleting', error)
        Swal.fire('Error!','error deleting','success')
      }
    }
  }

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const value = contact[searchType].toLowerCase() || "";
      const matchesSearch = value.includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || contact.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [contacts, searchTerm, searchType, statusFilter]);

  const totalPages = Math.ceil(filteredContacts.length / pageSize);
  const paginatedContacts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredContacts.slice(start, start + pageSize);
  }, [filteredContacts, currentPage, pageSize]);

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      <h1 className="text-4xl font-bold mt-6 mb-4">Q&A</h1>

      {contacts.length === 0 ? (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <p className="text-2xl font-bold text-gray-800">No QA</p>
        </div>
      ) : (
        <>
          <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex w-full md:w-auto gap-2">
              <select
                className="border rounded px-3 py-2 text-base"
                value={searchType}
                onChange={(e) => {
                  setSearchType(e.target.value);
                }}
              >
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="border rounded px-3 py-2 text-base"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
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
              <select
                className="border rounded px-3 py-2"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                {[10, 25, 50, 100].map((size) => (
                  <option key={size} value={size}>{`${size}`}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-lg font-bold text-gray-600">
              Total {filteredContacts.length} documents
            </div>
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden text-sm lg:text-lg font-bold">
              <colgroup>
                <col className="w-[8%]" />
                <col className="w-[12%]" />
                <col className="w-[20%]" />
                <col className="w-[15%]" />
                <col className="w-[25%]" />
                <col className="w-[10%]" />
                <col className="w-[10%]" />
              </colgroup>
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
                {paginatedContacts.map((contact, index) => (
                  <tr key={contact._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">
                      {(currentPage - 1) * pageSize + index + 1}
                    </td>
                    <td className="px-4 py-3">{contact.name}</td>
                    <td className="px-4 py-3">{contact.email}</td>
                    <td className="px-4 py-3">{contact.phone}</td>
                    <td className="px-4 py-3">{contact.message}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          contact.status == "pending"
                            ? "bg-blue-100 text-blue-800"
                            : contact.status == "in progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {contact.status === "in progress"
                          ? "진행중"
                          : contact.status === "pending"
                          ? "대기중"
                          : "완료"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleEdit(contact)}
                          className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          edit
                        </button>
                        <button onClickCapture={()=>handleDelete(contact._id)} className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600">
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
            {paginatedContacts.map((contact, index) => (
              <div
                key={contact._id}
                className="p-4 border rounded-lg bg-white shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-lg font-bold">
                    ${(currentPage - 1) * pageSize + index + 1}
                    <span
                      className={`px-2 py-1 rounded-full text-base ${
                        contact.status == "pending"
                          ? "bg-blue-100 text-blue-800"
                          : contact.status == "in progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {contact.status === "in progress"
                        ? "진행중"
                        : contact.status === "pending"
                        ? "대기중"
                        : "완료"}
                    </span>
                  </div>
                </div>

                <div>name : {contact.name}</div>
                <div>email : {contact.email}</div>
                <div>phone : {contact.phone}</div>
                <div>message : {contact.message}</div>

                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(contact)}
                    className="px-3 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    edit
                  </button>
                  <button onClickCapture={()=>handleDelete(contact._id)} className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600">
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center space-x-2 text-lg font-bold">
            <button
              className="px-3 py-1 rounded border disabled:opacity-50"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              back
            </button>
            <span className="px-3 py-1">
              {currentPage} / {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded border disabled:opacity-50"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              next
            </button>
          </div>
        </>
      )}
      {isModalOpen && selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Editing QA</h2>
            <div className="mb-4">
              <p className="font-medium mb-2">
                Current Status :{" "}
                {selectedContact.status === "in progress"
                  ? "진행중"
                  : selectedContact.status === "pending"
                  ? "대기중"
                  : "완료"}
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => handleStatusUpdate("pending")}
                  className="w-full px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                >
                  대기 중
                </button>
                <button
                  onClick={() => handleStatusUpdate("in progress")}
                  className="w-full px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                >
                  진행 중
                </button>
                <button
                  onClick={() => handleStatusUpdate("completed")}
                  className="w-full px-4 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200"
                >
                  완료
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
