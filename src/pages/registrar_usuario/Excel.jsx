import React, { useState } from "react";
import * as XLSX from "xlsx";

// button {
//     padding: 10px 20px;
//     background-color: #4CAF50;
//     color: white;
//     border: none;
//     cursor: pointer;
//   }
  
//   button:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
  
//   input[type="file"] {
//     margin: 10px 0;
//   }
  
//   table {
//     width: 100%;
//     margin-top: 20px;
//     border-collapse: collapse;
//   }
  
//   table th, table td {
//     padding: 8px;
//     border: 1px solid #ddd;
//   }
  
//   h2 {
//     margin-bottom: 20px;
//   }
  
//   h3 {
//     margin-top: 20px;
//   }


const ExcelUpload = () => {
  const [fileName, setFileName] = useState(""); // Para almacenar el nombre del archivo cargado
  const [excelData, setExcelData] = useState([]); // Para almacenar los datos leídos del archivo Excel
  const [loading, setLoading] = useState(false); // Para mostrar un mensaje de carga si es necesario

  // Función para manejar la carga del archivo Excel
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Obtener el primer archivo cargado
    if (!file) return;

    setFileName(file.name); // Actualizar el nombre del archivo cargado

    const reader = new FileReader(); // Crear un lector de archivos
    reader.onload = (event) => {
      const binaryStr = event.target.result; // Leer el archivo como una cadena binaria
      const wb = XLSX.read(binaryStr, { type: "binary" }); // Leer el archivo Excel con XLSX
      const ws = wb.Sheets[wb.SheetNames[0]]; // Obtener la primera hoja del archivo Excel
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }); // Convertir los datos de la hoja a formato JSON
      setExcelData(data); // Almacenar los datos en el estado
    };
    reader.readAsBinaryString(file); // Leer el archivo cargado como una cadena binaria
  };

  // Función para manejar el envío de los datos al backend (esto es solo un ejemplo)
  const handleSubmit = async () => {
    if (excelData.length === 0) {
      alert("Por favor, carga un archivo Excel.");
      return;
    }

    setLoading(true); // Mostrar el indicador de carga

    try {
      // Aquí puedes enviar los datos al backend
      const response = await fetch("http://localhost:8000/api/upload-excel/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records: excelData }), // Enviar los datos del Excel en el cuerpo
      });

      if (response.ok) {
        alert("Datos guardados exitosamente!");
      } else {
        alert("Hubo un error al guardar los datos.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un error al comunicarse con el servidor.");
    }

    setLoading(false); // Ocultar el indicador de carga
  };

  return (
    <div>
      <h2>Cargar archivo Excel</h2>
      <input
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={handleFileUpload}
      />
      {fileName && <p>Archivo cargado: {fileName}</p>}

      {excelData.length > 0 && (
        <div>
          <h3>Datos del archivo cargado:</h3>
          <table>
            <thead>
              <tr>
                {excelData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Cargando..." : "Subir y Guardar Datos"}
      </button>
    </div>
  );
};

export default ExcelUpload;
