const axios = require('axios');

const UPCOMING_ENDPOINT =
  'http://api.spacexdata.com/v3/launches/upcoming?sort=launch_date_utc&order=asc';

const getCapsules = async (req, res) => {
  let result;
  try {
    result = await axios.get(UPCOMING_ENDPOINT);
  } catch (e) {
    res.status(503);
    res.send();
    return;
  }

  res.header('Access-Control-Allow-Origin', '*');
  res.status(200);
  res.json({
    result: result.data,
  });
};

module.exports = getCapsules;
