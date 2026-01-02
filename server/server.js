const express = require("express");
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/steam/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "Missing Steam ID" });

  try {
    const body = new URLSearchParams();
    body.append("itemcount", "1");
    body.append("publishedfileids[0]", id);

    const response = await fetch(
      "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/",
      { method: "POST", body }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Steam API error" });
    }

    const data = await response.json();
    const modData = data.response.publishedfiledetails[0];

    // Add preview image as a field
    const result = {
      ...modData,
      preview: modData.preview_url, // Steam preview image
    };

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Steam stats" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
