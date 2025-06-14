import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [engagements, setEngagements] = useState<any[]>([]);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/api/engagement')
      .then(res => setEngagements(res.data))
      .catch(err => console.error("Error fetching engagement:", err));

    axios.get('http://localhost:3001/api/ai_summary')
      .then(res => setSummary(res.data.summary))
      .catch(err => console.error("Error fetching summary:", err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>User Engagements</h1>
      <ul>
        {engagements.map((e, i) => (
          <li key={i}><strong>{e.user}</strong>: {e.actions}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: '2rem' }}>AI Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default App;
