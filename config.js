const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogbangoodluck07@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻" 


global.devs = "2348167893138" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167893138";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_32_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY2wrSytxSC9EZlJ6ckdNL1ZOTFFlaG9sMWZrTFZJa1luWHhtZUFHRXVKbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0kzTmptSjNSSXEwcnA0VndnaW5kUVwiLFxuICBcInBob25lSWRcIjogXCJlYTcyNDhhNy1jMDA0LTRiN2QtOTlkNi1iNGRkOWI2ZGMyZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICA4NCxcbiAgICAgIDI0LFxuICAgICAgMTg1LFxuICAgICAgMjI2LFxuICAgICAgMTI0LFxuICAgICAgMTE2LFxuICAgICAgNjksXG4gICAgICAxNSxcbiAgICAgIDgxLFxuICAgICAgMTYzLFxuICAgICAgNTMsXG4gICAgICAyMCxcbiAgICAgIDg1LFxuICAgICAgMjUzLFxuICAgICAgMjU1LFxuICAgICAgNjIsXG4gICAgICAxODksXG4gICAgICAyMDUsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDQ4LFxuICAgICAgMTAyLFxuICAgICAgMjUzLFxuICAgICAgMjA2LFxuICAgICAgNDUsXG4gICAgICAyMTgsXG4gICAgICAxNzUsXG4gICAgICA4MSxcbiAgICAgIDI0LFxuICAgICAgMjEyLFxuICAgICAgMjI4LFxuICAgICAgNTQsXG4gICAgICAyNDQsXG4gICAgICAyMTQsXG4gICAgICA1MCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NCxcbiAgICAgIDQzLFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllWR05RRUgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI5NTQ0Mzg2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVWNoaWhhIGl0YWNoaVwiLFxuICAgIFwibGlkXCI6IFwiOTIyMzkwMDI5MTA4MDk6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmVjclBjQ0VNR01oYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJja1RGZTMwaC9XaDFnVzJ6VjZSWTJrbHdnaVNVQSsxN1o2WkZlWnVScmtNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFrRDFJNDc4emZOWnFiS2hiM0QyK3ZBbXp4aHZVVE51ZCtFbmhFZTJ1SUNBdzNkMGw2OStacFVML21mMnVjdUNNZmJaMnBuclhHalpkNVRDOHAzd0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjIvcVE5U1F6OEdBblo3T0JBUU9jNzZaZXRBTG5HajJxM3M5NlBxYzVENTJJWitrUGxUZjV1YVdTT0sxUXB6VkU1MEQrNmRSaVh2U3VpcnZCMmM0OURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjk1NDQzODY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDIzMzkyOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸",
  packname: process.env.PACK_NAME || "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻",
  botname : process.env.BOT_NAME  || "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
