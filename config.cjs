const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "Byte;;;Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tTejV4T2NOTXRwRUNmbmpMR2N6R0t1OXVDTmJOZ3NMbHRiR0VpZXNuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDZZZUhXbUpUeGM1MFFzM0dOSnZvZFFSaHhaeEdYZzFSWENDdnJuc1FYZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTS9ocm5mTlN5dENXTW5HRUcwT1NoVElIY2lXV1YyQThwK3FZUWI2WFhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtaWhTN3Y1OUk0ZlZqKzV3OE5UaEpiSll4TWcxcTRWbGVlS2JQWmZuTUI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFeHZqR1FMcTE4MVpUTUFFWmRjTU5DMWZudTRmTnVWNjUxWnRjazVpMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ0bmlKSkx5dmQ5ekJjSU9BeVJXdld5L1dLaU0vU0Z6T2czZXg5YzN6M1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUp1S3poY05GcEJ2K25nbGVKZXY1Zk9wbnBjRllYRFg1MWtpeURpa1QzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVpjSjhWdUNMQlFleWltUjc2cmxGLzhtOGcyMHEvbnd2VmN6MjBMaEZEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ0QzVsVTBPc08zRW9VTlpxMEsyS3ZML0tZODg5M3Q2VGtJbmEyYnNNTVVaS1YzL2JNUEI4c2g1bTFpWkxvVEFZRTcyVmJpdXRyTklPM04vSG40UkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJQeExKa2JFamhxUWgvcENqSU9KL1RiOEkwY1NFZ2dMeVZTaVJ6V01LZ3VNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNTkxMjM0NTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIyODZFNkI0MUZFQjMxQ0I1QUI2QjQ0MzY4N0ExMzgyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDI5NTIwNTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBLVnk2YWE4VFg2bVdaMjNZbkYwQmciLCJwaG9uZUlkIjoiZTk4N2JkZDAtZjFiOC00ZmFjLWIzODAtODRmYmQ1MjM3NWYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii84YktpbmJCQ0pQMGtUblBBUkhSZHJZS1NmRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbFFWOFFqUUk0UDVJa2NvVkJiTlFwaWxyaE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMjZDTlBWRDciLCJtZSI6eyJpZCI6IjIzNTkxMjM0NTY3OjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNFSUdORVVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQRzc5TGdGRU5xc2piOEdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjOW5HbEV6RWdDaXlOaThQUFVyeHhLT0hZY3NDOWFNOGJXcE90eDhReUFZPSIsImFjY291bnRTaWduYXR1cmUiOiJ5dnpTbGV4TTZXVFZTSEw2NTJyVy9rdXY4dGk0ckxmbzNtcmtubzFPWE0zZklML1l2UE5aSjc3UzkydzVSMnZWU3JhL25KVXlSeklqOWhlanFCdUVBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkhXak5MYWVPSXpLUnRvNnYvYlBOZlh0cEFmSG5aRjZIK3NrWFpYOXp3Nyt4M1FIWVZ2QVdKYXdXYXFBQkdBSElIUllma1E1cVRqdy9mRUdrbElRQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzU5MTIzNDU2Nzo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYUFp4cFJNeElBb3NqWXZEejFLOGNTamgySExBdldqUEcxcVRyY2ZFTWdHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyOTUyMDM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJYTiJ9",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "private",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "23591234567",
  "OWNER_NAME": process.env.OWNER_NAME || "azountou",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
