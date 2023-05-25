const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const saltRounds = Number(process.env.SALT_ROUNDS);
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const initVector = Buffer.from(process.env.INIT_VECTOR); //These two values being random causes server updates to refresh these values, thus making all current
const Securitykey = Buffer.from(process.env.SECURITY_KEY); //logins / requests, invalid

async function hash(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

async function validateUser(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);

    return isMatch;
  } catch (error) {
    throw new Error("Error validating user");
  }
}

function validID(id) {
  return id.length == 24 ? true : false;
}

function encryptToken(token) {
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(token, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
}

function processToken(token) {
  const tokenString = token.substring(7);
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(tokenString, "hex", "utf-8");
  decryptedData += decipher.final("utf8");

  return jwt.verify(decryptedData, process.env.TOKEN_PASSWORD);
}

module.exports = { hash, validateUser, validID, encryptToken, processToken };
