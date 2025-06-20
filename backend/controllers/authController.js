const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// Register Controller
const registerUser = async (req, res) => {
  const { name, dob, email, password } = req.body;

  if (!name || !dob || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    dob,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user);
  res
    .cookie("token", token, { httpOnly: true })
    .status(201)
    .json({ message: "User registered", token, user });
};

// Login Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid email or password" });

  const token = generateToken(user);
  res
    .cookie("token", token, { httpOnly: true })
    .status(200)
    .json({ message: "Login successful", token, user });
};


const getProtectedData = (req, res) => {
  res.json({ message: "This is protected data", user: req.user });
};

module.exports = {
  registerUser,
  loginUser,
  getProtectedData,
};
