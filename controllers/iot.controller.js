const {
  getSensors,
  getChannels,
  getSamples,
} = require("../models/services/iot.mocked");

const iotController = {};

iotController.getIotSensors = async function (req, res, next) {
  try {
    res.json(
      await getSensors(
        { start: new Date(req.query.start), end: new Date(req.query.end) },
        req.query.resolution
      )
    );
  } catch (err) {
    next(err);
  }
};

iotController.getIotChannels = async function (req, res, next) {
  try {
    res.json(
      await getChannels(
        { start: new Date(req.query.start), end: new Date(req.query.end) },
        req.query.resolution
      )
    );
  } catch (err) {
    next(err);
  }
};

iotController.getIotSamples = async function (req, res, next) {
  try {
    res.json(
      await getSamples(
        { start: new Date(req.query.start), end: new Date(req.query.end) },
        req.query.resolution
      )
    );
  } catch (err) {
    next(err);
  }
};

module.exports = iotController;
