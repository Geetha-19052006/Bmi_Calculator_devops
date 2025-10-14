import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage("Underweight");
      else if (bmiValue < 25) setMessage("Normal weight");
      else if (bmiValue < 30) setMessage("Overweight");
      else setMessage("Obese");
    } else {
      setMessage("Please enter valid positive numbers.");
      setBmi(null);
    }
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚖️ BMI Calculator</h1>

      <div style={styles.inputContainer}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={styles.input}
        />
      </div>

      <div>
        <button onClick={calculateBMI} style={styles.button}>
          Calculate
        </button>
        <button onClick={resetFields} style={styles.resetBtn}>
          Reset
        </button>
      </div>

      {bmi && (
        <div style={styles.resultBox}>
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {message}</p>
        </div>
      )}

      {!bmi && message && (
        <p style={{ color: "red", marginTop: "20px" }}>{message}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#333",
  },
  inputContainer: {
    margin: "20px 0",
  },
  input: {
    padding: "10px",
    width: "150px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  resetBtn: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resultBox: {
    backgroundColor: "#f4f4f4",
    margin: "30px auto",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
  },
};

export default App;
