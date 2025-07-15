const SocialData = require('../models/SocialData');

// POST /api/data/upload
exports.uploadData = async (req, res) => {
  try {
    const { platform, data } = req.body;

    const newData = new SocialData({
      user: req.user.id,     // comes from auth middleware
      platform,
      data
    });

    await newData.save();
    res.status(201).json({ msg: "Data uploaded!", newData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/data/:platform
exports.getDataByPlatform = async (req, res) => {
  try {
    const { platform } = req.params;
    const data = await SocialData.findOne({ user: req.user.id, platform });
    if (!data) return res.status(404).json({ msg: "Data not found" });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
