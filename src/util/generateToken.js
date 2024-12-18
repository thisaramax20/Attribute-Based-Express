import jwt from "jsonwebtoken";

const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  role: "admin",
  department: "IT",
  accessLevel: 4,
};

export const generateToken = (req, res) => {
  try {
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
