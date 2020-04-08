const axios = require('axios');

const LANDING_PAD_ENDPOINT = (landingPadId) =>
  `https://api.spacexdata.com/v3/landpads/${landingPadId}`;

const getLandingPad = async (req, res) => {
  const { landingPadId } = req.params;

  let result;
  try {
    result = await axios.get(LANDING_PAD_ENDPOINT(landingPadId));
  } catch (e) {
    res.status(503);
    res.send();
    return;
  }

  res.status(200);
  res.send({
    ...result.data,
  });
};

module.exports = getLandingPad;
