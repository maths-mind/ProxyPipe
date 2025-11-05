import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.send("Use ?url=https://example.com");
  try {
    const r = await fetch(url);
    const text = await r.text();
    res.send(text);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.listen(10000);
