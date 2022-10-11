// ALL Teams
const Team = require("../models/Team");
const getAllTeams = async (req, res) => {
  try {
    const team = await Team.find();
    res.status(200).json(team);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// Team BY ID
const getSingleTeam = async (req, res) => {
  const { id } = Number(req.params);
  try {
    const team = await Team.findById(id);
    res.status(200).json(team);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
// CREATE Team
const createTeam = async (req, res) => {
  const { team, sport, createdAt, isActive } = req.body;
  console.log(req.body);
  try {
    const found = await Team.findOne({ team });
    if (found) return res.status(400).send("Team Name already exists");
    const newTeam = await Team.create({
      team,
      sport,
      isActive,
      createdAt,
    });

    res.status(201).json(newTeam);
    console.log(newTeam);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { getAllTeams, getSingleTeam, createTeam };
