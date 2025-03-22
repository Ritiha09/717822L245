import React from "react";
import axios from "axios";
import {useState} from "react";
const AvgCalculator = () => {

    const [numberId, setNumberId] = useState("r"); 
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const getNum = async () => {
        setError('');
        try {
          const res = await axios.get("http://20.244.56.144/test/primes");
          setResponse(res.data);
        } catch (err) {
          console.error(err);
          setError('Error fetching numbers from server.');
        }
      };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
            <h1 className="text-5xl font-semibold text-red-500 mb-10">Average Calculator</h1>
            <div className="flex gap-5">
                <select
                    value={numberId}
                    onChange={(a) => setNumberId(a.target.value)}
                    style={{
                      padding: '0.5rem 1.2rem',
                      fontSize: '1rem',
                      backgroundColor: '#111',
                      color: 'white',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      borderSpacing:'20px',
                    }}
                >Choose a number
                <option value="p">Prime</option>
                <option value="f">Fibonacci</option> 
                <option value="e">Even</option>  
                <option value="r">Random</option>
                </select>
                <button onclick={getNum}
                style={{
                    padding: '0.5rem 1.2rem',
                    fontSize: '1rem',
                    backgroundColor: '#111',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                  }}>
                    Calculate the Average
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
            <div style={{marginTop: '3rem',padding: '3rem',backgroundColor: 'grey-300',}}>
             <p><strong>Window Previous State:</strong> [{response.windowPrevState.join(', ')}]</p>
             <p><strong>Window Current State:</strong> [{response.windowPrevState.join(', ')}]</p>
             <p><strong>Numbers:</strong> [{response.numbers.join(', ')}]</p>
             <p><strong>Average:</strong> {response.avg.toFixed(2)}</p>
          </div>)
            }
        </div>
    )
}

export default AvgCalculator;