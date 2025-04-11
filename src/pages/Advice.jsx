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
        <section className="page-wrapper" style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Advice / Suggestions?</h1>
            <p>I’d love to hear your feedback!</p>

            <form onSubmit={handleSubmit} style={{ margin: '2rem auto', maxWidth: '500px' }}>
                <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    rows="5"
                    placeholder="Type your suggestion here..."
                    style={{ width: '200%', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
                    required
                />
                <br />
                <button className="button" type="submit" style={{ marginTop: '2rem' }}>
                    Submit
                </button>
            </form>

            {submitted && <p style={{ color: 'green' }}>Thank you for your suggestion!</p>}

        </section>
    );
}

export default Advice;
