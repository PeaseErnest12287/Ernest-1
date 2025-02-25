const axios = require("axios");
const fileType = require("file-type");

/**
 * Extracts the first URL found in a message.
 * @param {string} message - The text message to scan.
 * @returns {string|null} - The extracted URL or null if none found.
 */
function extractUrlFromMessage(message) {
  const urlRegex = /(https?:\/\/[^\s]+)/;
  const match = message.match(urlRegex);
  return match ? match[0] : null;
}

/**
 * Fetches a file from a URL and determines its type.
 * @param {string} url - The URL of the file.
 * @returns {Object} - An object containing the file type and buffer data.
 */
async function FiletypeFromUrl(url) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);
    const type = await fileType.fromBuffer(buffer);
    return { type: type?.mime.startsWith("image") ? "image" : "video", buffer };
  } catch (error) {
    console.error("Error fetching file:", error);
    return { type: "unknown", buffer: null };
  }
}

/**
 * Extracts WhatsApp JIDs (User Mentions) from a message.
 * @param {string} text - The message text containing mentions.
 * @returns {Array<string>} - Array of extracted JIDs.
 */
function parseJid(text) {
  return (text.match(/@(\d{10,15})/g) || []).map((jid) => jid.replace("@", "") + "@s.whatsapp.net");
}

module.exports = { FiletypeFromUrl, parseJid, extractUrlFromMessage };
