import React, { useState } from "react";
import SymptomForm from "./components/SymptomForm";
import PredictionResult from "./components/PredictionResult";

const App = () => {
    const [predictions, setPredictions] = useState([]);

    return (
        <div>
            <h1>Symptom Checker</h1>
            <SymptomForm setPredictions={setPredictions} />
            <PredictionResult predictions={predictions} />
        </div>
    );
};

export default App;
