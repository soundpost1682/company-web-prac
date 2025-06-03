import React, { useState } from "react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-center text-3xl text-gray-600">
            Staff Account
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xm font-medium text-gray-700"
              >
                admin ID
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                placeholder="ID"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xm font-medium text-gray-700"
              >
                admin PW
              </label>
              <input
                type="text"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                placeholder="password"
              />
            </div>
          </div>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg text-base font-bold text-center">
              {typeof error === "string" ? error : error.message}
              {error.remainingAttempts !== undefined && (
                <div className="mt-1">
                  Attempt left : {error.remainingAttempts}
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full items-center px-4 py-3 border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition-color duration-300"
          >
            Log-In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
