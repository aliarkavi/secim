// Vercel Serverless Function: /api/candidates
// Handles candidate endpoints with clean initial state

let inMemoryCandidates = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { name, category, university } = req.body || {};
    if (!name || !category || !university) {
      return res.status(400).json({ error: 'Missing required candidate fields' });
    }

    const newId = inMemoryCandidates.length > 0 ? Math.max(...inMemoryCandidates.map(c => c.id)) + 1 : 1;

    const newCandidate = {
      id: newId,
      category,
      name,
      university,
      votes: 0
    };

    inMemoryCandidates.unshift(newCandidate);
    return res.status(201).json({ success: true, candidate: newCandidate, candidates: inMemoryCandidates });
  }

  return res.status(200).json({ success: true, candidates: inMemoryCandidates });
}
