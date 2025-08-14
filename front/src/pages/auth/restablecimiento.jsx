import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Restablecimiento() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setMessage("Por favor ingrese la nueva contraseña.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.put("/auth/contraseña.php", {
        contraseña: password,
        ID: id,
      });

      setMessage(
        response.data.message || "Contraseña actualizada correctamente."
      );
      window.close(
        `/au5Z4YhReMcxh1r0WdbGNrGiMU7+j6CfaUrMxP2TGJNv7ZgI72muOl1gie2Lc7dasdddss/${id}`,
        "popup",
        "width=700,height=600"
      );
    } catch (error) {
      setMessage("Error al actualizar la contraseña.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/hand-showing-digital-security-interface-internet-things-cybersecurity-concept_556176-597.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-sm flex flex-col"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Restablecer Contraseña
        </h2>
        <label className="block mb-2 text-sm text-gray-600">
          Nueva contraseña:
        </label>
        <input
          type="password"
          placeholder="Ingrese su nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Restablecer"}
        </button>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
      </form>
    </div>
  );
}
