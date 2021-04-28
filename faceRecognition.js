const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://feeylixypghiumtqiuco.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDg5OTM4OSwiZXhwIjoxOTMwNDc1Mzg5fQ.-s5U5KCAkc-WaWAzjD3qZoSxCNOpxYZ7vjQ_HaGfF3Q"
);

const SupabasePipe = async ({ data, error }) => {
  if (error && error.code) {
    throw new Error(error.message);
  }
  return data;
};

const updateImages = async (images, accountId) => {
  return await supabase
    .from("Profile")
    .update({ images: images })
    .eq("id", accountId)
    .then(SupabasePipe);
};

router.post("/face", async (req, res) => {
  const images = req.body.array;
  const accountId = req.body.accountId;
  try {
    console.log({ images, accountId });
    const data = await updateImages(images, accountId);
    console.log({ data });
    if (data) {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
