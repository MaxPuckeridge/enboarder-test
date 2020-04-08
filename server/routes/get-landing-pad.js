const axios = require('axios');
const { readEntry, writeEntry } = require('../db-ops');

const LANDING_PAD_ENDPOINT = (landingPadId) =>
  `https://api.spacexdata.com/v3/landpads/${landingPadId}`;

const getLandingPad = async (req, res) => {
  const { landingPadId } = req.params;

  let document;
  try {
    document = await getLandingPadDocument(landingPadId);
  } catch (e) {
    res.status(503);
    res.send();
    return;
  }

  const { id, full_name, status, location } = document;

  res.header('Access-Control-Allow-Origin', '*');
  res.status(200);
  res.send({
    id,
    full_name,
    status,
    location,
  });
};

const getLandingPadDocument = async (landingPadId) => {
  let record;
  try {
    record = await readEntry(landingPadId);
  } catch (e) {
    console.log(e);
    // let it go and be handled in route handler
    throw e;
  }

  if (!record) {
    let remoteRecord;
    try {
      remoteRecord = await axios.get(LANDING_PAD_ENDPOINT(landingPadId));
    } catch (e) {
      // let it go and be handled in route handler
      throw e;
    }

    record = remoteRecord.data;

    await writeEntry(landingPadId, record);
  }

  return record;
};

module.exports = getLandingPad;
