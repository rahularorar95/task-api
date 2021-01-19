const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) throw new Error();
      req.token = token;
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ error: "Please log in first." });
  }
};

module.exports = authMiddleware;
