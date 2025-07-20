import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists." });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const createUser = new User({ fullName, email, password: hashPassword });
    await createUser.save();
    res
      .status(200)
      .json({
        message: "Account Created Successfully",
        user: {
          fullName: createUser.fullName,
          email: createUser.email,
          _id: createUser._id,
        },
      });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Invalid Credentials" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Name or Password" });
    } else {
      return res.status(200).json({
        message: "Login Successfull",
        user: { fullName: user.fullName, email: user.email, _id: user._id },
      });
    }
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Invalid credentials" });
  }
};
