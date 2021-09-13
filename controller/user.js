const User = require('../model/user');

exports.loginUser = async (req, res) => {
  const { name, email, imageUrl } = req.body;
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    if (userExist.isLoggedIn) {
      return res.status(200).json(userExist);
    } else {
      let query = { isLoggedIn: true };
      await User.updateOne(
        { email: email },
        { $set: query },
        { returnOriginal: true }
      );
      const updatedUser = await User.findOne({ email: email });
      res.status(200).json(updatedUser);
    }
  } else {
    const updatedUser = await User.create({
      name: name,
      email: email,
      image: imageUrl,
      isLoggedIn: true,
    });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json('failed to create user');
    }
  }
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;
  const deletedUser = await User.deleteOne({ email: email });
  if (deletedUser) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json('failed to delete user');
  }
};

exports.checkAlreadyLogin = async (req, res) => {
  const { email } = req.body;
  const userLoggedIn = await User.findOne({ email: email });
  if (userLoggedIn) {
    let query = { isLoggedIn: false };
    const change = await User.updateOne(
      { email: email },
      { $set: query },
      { returnOriginal: true }
    );
    res.status(200).json(change);
  } else {
    res.status(400).json('not found');
  }
};

exports.getUserData = async (req, res) => {
  const { email } = req.body;
  const userData = await User.findOne({ email: email });
  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(400).json('not found');
  }
};
