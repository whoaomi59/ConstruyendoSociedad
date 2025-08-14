import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Login({ empresa }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!email || !password) {
      setErrorMsg("Por favor ingrese correo y contraseña.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "/auth/Login.php",
        {
          correo: email,
          contraseña: password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.token) {
        setSuccessMsg("Inicio de sesión exitoso.");
        sessionStorage.setItem("token", data.token);
        window.location.href = "/admin";
      } else {
        setErrorMsg(data.error || "Credenciales inválidas.");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-20">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&w=1575&q=80')",
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-20"
            src={empresa.Logo}
            alt={empresa.Nombre}
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          {empresa.Nombre}
        </p>

        {/* Mensajes de estado */}
        {errorMsg && (
          <div className="mt-4 p-3 text-sm text-red-600 bg-red-100 rounded">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="mt-4 p-3 text-sm text-green-600 bg-green-100 rounded">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label
              htmlFor="LoggingEmailAddress"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
              focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                htmlFor="loggingPassword"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Olvidaste tu contraseña?
              </a>
            </div>

            <input
              id="loggingPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
              focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-600"
              }`}
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
