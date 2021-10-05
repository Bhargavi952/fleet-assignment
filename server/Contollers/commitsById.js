import CommitsById from "../models/commitsbyId.js";

export const createCommitsId = async (req, res) => {
  const commitsId = req.body;

  const newCommitId = new CommitsById(commitsId);

  try {
    await newCommitId.save();

    res.status(201).json(newCommitId);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
