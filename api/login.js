export default function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { user, password } = req.body;

  const licencas = [
    {
      user: "esen",
      password: "nikaraesen",
      licenseName: "ESEN",
      expires: "2026-12-31"
    }
  ];

  const licenca = licencas.find(
    x => x.user === user && x.password === password
  );

  if (!licenca) {
    return res.status(401).json({
      ok: false,
      message: "Login inválido"
    });
  }

  return res.status(200).json({
    ok: true,
    user: licenca.user,
    licenseName: licenca.licenseName,
    expires: licenca.expires
  });

}
