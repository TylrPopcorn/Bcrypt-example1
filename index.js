//BCRYPT: https://github.com/kelektiv/node.bcrypt.js

//DEPENDENCIES
// npm i bcrypt
// npm init -y

//HOW TO START: node index.js

const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  // https://github.com/kelektiv/node.bcrypt.js?tab=readme-ov-file#usage
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(salt, hash);
};

const login = async (password, hashedPw) => {
  const result = bcrypt.compare(password, hashedPw);
  if (result) {
    console.log("SUCCESS");
  } else {
    console.log("INCORRECT");
  }
};

hashPassword("password123");
login("monkey", "mSoX8HhTim2ePk5ZCAi.O4t7XraWbT51pAsLYMCju3//6l.2MtK");
