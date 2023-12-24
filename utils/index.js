const cookieOptions = {
  httpOnly: true,
  secure: true,
  path: "/",
  Partitioned:true,
  SameSite:'Lax'
};

exports.setCookie = (res, token) => {
  res.cookie("token", token, cookieOptions);
};
exports.DeleteCookie = (res, token) => {
  res.cookie("token", " ", { maxAge: 1 });
};
