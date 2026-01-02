import fetch from "node-fetch";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) return res.status(400).json({ error: "Missing Steam ID" });

  // Prepare POST body
  const body = new URLSearchParams();
  body.append("itemcount", "1");
  body.append("publishedfileids[0]", id);

  try {
    const response = await fetch(
      "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/",
      { method: "POST", body }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Steam API error" });
    }

    const data = await response.json();
    res.status(200).json(data.response.publishedfiledetails[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Steam stats" });
  }
}
