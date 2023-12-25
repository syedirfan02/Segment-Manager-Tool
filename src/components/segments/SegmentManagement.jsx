import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import PersonalCard from "../personal/PersonalCard";

const SegmentManagement = () => {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [blueBoxSchema, setBlueBoxSchema] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedSegments = localStorage.getItem("savedSegments");
    if (savedSegments) {
      setBlueBoxSchema(JSON.parse(savedSegments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedSegments", JSON.stringify(blueBoxSchema));
  }, [blueBoxSchema]);

  const schemas = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const filteredSchemas = schemas.filter(
    (schema) => !selectedSchemas.includes(schema.value)
  );

  const handleSaveSegment = async () => {
    if (!segmentName.trim()) {
      setError("Segment name cannot be empty");
      return;
    }

    if (selectedSchemas.length === 0) {
      setError("Please select at least one schema");
      return;
    }

    setError("");

    const newSegment = { name: segmentName, schemas: selectedSchemas };
    setBlueBoxSchema([...blueBoxSchema, newSegment]);
    setSegmentName("");
    setSelectedSchemas([]);
    setIsModalOpen(false);

    try {
      const response = await fetch(
        "https://webhook.site/10b9d006-ee56-4dcf-a54d-92300996ab0e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSegment),
        }
      );

      if (!response.ok) {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  const handleRemoveSegment = (index) => {
    const updatedBlueBoxSchema = [...blueBoxSchema];
    updatedBlueBoxSchema.splice(index, 1);
    setBlueBoxSchema(updatedBlueBoxSchema);
  };

  const handleChangeSegment = (index) => {
    const newSegment = prompt(
      "Enter new segment value:",
      blueBoxSchema[index].name
    );
    if (newSegment !== null) {
      const updatedBlueBoxSchema = [...blueBoxSchema];
      updatedBlueBoxSchema[index].name = newSegment;
      setBlueBoxSchema(updatedBlueBoxSchema);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r ">
      <PersonalCard />

      <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-2/3 lg:w-1/2 ml-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Saved Segments
        </h2>
        {blueBoxSchema.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {blueBoxSchema.map((segment, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-400 to-blue-400 text-white p-4 rounded-md shadow-md flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-lg">{segment.name}</span>
                  <span className="ml-2 text-sm text-gray-300">
                    (
                    {segment.schemas.map((schema, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 font-bold text-white px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {schema}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="text-white hover:text-gray-700"
                    onClick={() => handleRemoveSegment(index)}
                  >
                    <TiDelete className="text-xl" />
                  </button>
                  <button
                    className="text-white hover:text-gray-700"
                    onClick={() => handleChangeSegment(index)}
                  >
                    <MdEdit className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No segments saved</p>
        )}

        <button
          className="mt-4 bg-[#1E3ED4] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          Save segment
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg overflow-hidden w-full md:w-1/2 p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Add Segment
              </h2>

              {error && (
                <p className="text-red-500 text-sm mb-4">
                  <strong>Error: </strong>
                  {error}
                </p>
              )}

              <label className="block mb-4">
                <span className="text-gray-800">Segment name:</span>
                <input
                  className={`border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:border-${
                    error ? "red-500" : "green-500"
                  }`}
                  type="text"
                  value={segmentName}
                  onChange={(e) => setSegmentName(e.target.value)}
                />
              </label>

              <label className="block mb-4">
                <span className="text-gray-800">Add schemas to segment:</span>
                <select
                  className={`border rounded w-full py-2 px-3 mt-1 focus:outline-none focus:border-${
                    error ? "red-500" : "green-500"
                  }`}
                  value=""
                  onChange={(e) => {
                    const selectedSchema = e.target.value;
                    if (
                      selectedSchema &&
                      !selectedSchemas.includes(selectedSchema)
                    ) {
                      setSelectedSchemas([...selectedSchemas, selectedSchema]);
                    }
                  }}
                >
                  <option value="">Select schema</option>
                  {filteredSchemas.map((schema) => (
                    <option key={schema.value} value={schema.value}>
                      {schema.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="mb-4">
                <span className="text-gray-800">Selected Schemas:</span>
                <div className="flex flex-wrap mt-2">
                  {selectedSchemas.map((schema, index) => (
                    <div
                      key={index}
                      className="bg-[#1E3ED4] text-white px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {schema}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="bg-[#1E3ED4] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mt-2"
                disabled={selectedSchemas.length === 0}
                onClick={handleSaveSegment}
              >
                +Add new segment
              </button>

              <div className="mt-4 flex justify-end">
                <button
                  className="bg-[#1E3ED4] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mr-2"
                  onClick={handleSaveSegment}
                >
                  Save the segment
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedSchemas([]);
                    setError("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SegmentManagement;
