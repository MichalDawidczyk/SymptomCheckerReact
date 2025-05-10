import React from "react";

const PredictionResult = ({ predictions }) => {
    return (
        <div>
            <h2>Possible Diseases:</h2>
            {predictions.length === 0 ? (
                <p>No predictions yet. Enter symptoms above.</p>
            ) : (
                <ul>
                    {predictions.map((pred, index) => (
                        <li key={index}>
                            <strong>{pred.disease}</strong> - Confidence: {(pred.confidence * 100).toFixed(2)}%
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PredictionResult;
