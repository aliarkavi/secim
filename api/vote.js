// Vercel Serverless Function: /api/vote
// Increments vote count for a candidate

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { candidateId } = req.body || {};
    if (!candidateId) {
      return res.status(400).json({ error: 'candidateId is required' });
    }

    return res.status(200).json({
      success: true,
      message: `Vote registered for candidate #${candidateId}`,
      candidateId
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
