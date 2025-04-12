import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Advice() {
    const [suggestion, setSuggestion] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted suggestion:', suggestion); 
        setSubmitted(true);
        setSuggestion('');
    };

    return (
        <section
            className="page-wrapper"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '2rem',
                textAlign: 'center',
            }}
        >
            <h2 style={{ marginBottom: '1rem' }}>Advice / Suggestions</h2>
            <p style={{ maxWidth: '500px' }}>I’d love to hear your feedback!</p>

            <form onSubmit={handleSubmit} style={{ marginTop: '2rem', width: '100%', maxWidth: '500px' }}>
                <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    rows="5"
                    placeholder="Type your suggestion here..."
                    style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box',
                    }}
                    required
                />
                <button
                    className="button"
                    type="submit"
                    style={{ marginTop: '1.5rem' }}
                >
                    Submit
                </button>
            </form>

            {submitted && <p style={{ color: 'green', marginTop: '1rem' }}>Thank you for your submission!</p>}
        </section>
    );
}

export default Advice;
