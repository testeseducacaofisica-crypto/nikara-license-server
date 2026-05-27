exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const { user, password } = JSON.parse(event.body || "{}");

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
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ ok: false, message: "Login inválido" })
    };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      ok: true,
      user: licenca.user,
      licenseName: licenca.licenseName,
      expires: licenca.expires
    })
  };
};
