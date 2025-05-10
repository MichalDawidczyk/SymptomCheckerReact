import React, { useState } from "react";
import axios from "axios";

const SymptomForm = ({ setPredictions }) => {
    const [symptoms, setSymptoms] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/predict", {
                symptoms: symptoms.split(",").map((s) => s.trim()),
            });
            setPredictions(response.data.top_predictions);
        } catch (error) {
            console.error("Error fetching predictions:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter symptoms separated by commas"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
            />
            <button type="submit">Predict Disease</button>
        </form>
    );
};

export default SymptomForm;
