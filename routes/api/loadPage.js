const express = require("express");
const router = express.Router();

// @route GET api/loadPage
// @desc Load and process a page

router.post("/", async (req, res) => {
  try {
    const res = await axios.get(req.body.url);
    dispatch({
      type: LOAD_PAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
});
