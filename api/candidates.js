// Vercel Serverless Function: /api/candidates
// Retrieves candidate list and current vote counts

let inMemoryCandidates = [
  {
    id: 1,
    category: "الأمين العام",
    name: "م. أنس العبدالله",
    university: "جامعة سلجوق - كلية الهندسة المعمارية والتصميم",
    votes: 184,
    colorClass: "from-[#ea7a24] to-[#d93829]"
  },
  {
    id: 2,
    category: "الأمين العام",
    name: "مرح الخالد",
    university: "جامعة نجم الدين أربكان - كلية الطب البشري",
    votes: 156,
    colorClass: "from-[#f5a623] to-[#ea7a24]"
  },
  {
    id: 3,
    category: "الهيئة الرقابية",
    name: "عمر النجار",
    university: "جامعة قونيا التقنية - هندسة مدنية",
    votes: 112,
    colorClass: "from-[#0e7c86] to-[#1b9aaa]"
  },
  {
    id: 4,
    category: "الهيئة الرقابية",
    name: "ريم القدور",
    university: "جامعة كاراتاي - كلية إدارة الأعمال",
    votes: 94,
    colorClass: "from-[#1a2f4c] to-[#0e7c86]"
  },
  {
    id: 5,
    category: "الهيئة الرقابية",
    name: "طارق الحلبي",
    university: "جامعة سلجوق - كلية الحقوق والعلوم السياسية",
    votes: 78,
    colorClass: "from-[#0e7c86] to-[#166380]"
  }
];

export default function handler(req, res) {
  // Set CORS headers
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
    const assignedColor = category === "الأمين العام" 
      ? "from-[#ea7a24] to-[#d93829]" 
      : "from-[#0e7c86] to-[#1b9aaa]";

    const newCandidate = {
      id: newId,
      category,
      name,
      university,
      votes: 0,
      colorClass: assignedColor
    };

    inMemoryCandidates.unshift(newCandidate);
    return res.status(201).json({ success: true, candidate: newCandidate, candidates: inMemoryCandidates });
  }

  return res.status(200).json({ success: true, candidates: inMemoryCandidates });
}
