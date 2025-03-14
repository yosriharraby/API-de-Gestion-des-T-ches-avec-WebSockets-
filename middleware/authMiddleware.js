
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Accès refusé, token manquant ou mal formé.' });
  }

  // Extraire uniquement la partie du token après 'Bearer '
  const token = authHeader.split(' ')[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Ajouter l'utilisateur vérifié à l'objet req
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token invalide' });
  }
};

module.exports = authenticate;
