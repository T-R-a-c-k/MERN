const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const saltRounds = Number(process.env.SALT_ROUNDS);

async function encrypt(password) {
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

module.exports = { encrypt, validateUser, validID };
