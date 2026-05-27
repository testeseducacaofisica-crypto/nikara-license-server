exports.handler = async (event) => {

  const { user, password } = JSON.parse(event.body);

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

  if (licenca) {

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        user: licenca.user,
        licenseName: licenca.licenseName,
        expires: licenca.expires
      })
    };

  }

  return {
    statusCode: 401,
    body: JSON.stringify({
      ok: false,
      message: "Login inválido"
    })
  };

};
