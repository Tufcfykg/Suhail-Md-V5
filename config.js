I'mconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="iamvictorade@gmail.com"
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


global.devs = "2348029544386" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348029544386";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_49_02_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiME9lNWN4dzRLUDFOUUVGWURDZ3BWZTBlaU5OcURPSmRKVjNFM1lzM2Q5az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUxfdzQ5RzhUYmFmTUprZ3dPelNiUVwiLFxuICBcInBob25lSWRcIjogXCIzODI1ZjRhMS1mNDIwLTQ3ZjAtODNjZC00MDU5MDRjOTc0ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMjE0LFxuICAgICAgMjUzLFxuICAgICAgMjM2LFxuICAgICAgMjgsXG4gICAgICA1OCxcbiAgICAgIDE5NixcbiAgICAgIDExMyxcbiAgICAgIDksXG4gICAgICA2MyxcbiAgICAgIDg0LFxuICAgICAgMTcxLFxuICAgICAgMjM0LFxuICAgICAgMzYsXG4gICAgICAyMixcbiAgICAgIDIwMixcbiAgICAgIDEzNCxcbiAgICAgIDE5MSxcbiAgICAgIDExOSxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAyNyxcbiAgICAgIDE2LFxuICAgICAgMTQ4LFxuICAgICAgNDgsXG4gICAgICAxNjksXG4gICAgICAyMDgsXG4gICAgICA4MCxcbiAgICAgIDI2LFxuICAgICAgMixcbiAgICAgIDIyMyxcbiAgICAgIDE4MyxcbiAgICAgIDE4MSxcbiAgICAgIDExNCxcbiAgICAgIDU3LFxuICAgICAgMjA4LFxuICAgICAgNDYsXG4gICAgICAxMDUsXG4gICAgICAxNDQsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGVDdYNVFRS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyOTU0NDM4NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlVjaGloYSBpdGFjaGlcIixcbiAgICBcImxpZFwiOiBcIjkyMjM5MDAyOTEwODA5OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6SzE2a0NFSnljdDcwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSVVHNWp2ekRjYnF3NXllNkI0VFhDZGNLWlNub2E2emFGeW9zczJnUC9rQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4NWRWZExlOE5kbkZtb04xUU94Sk5DSnYrS1VPQU5peEp2bVZFWkQ3TDZxelVtU01jR1dzbkpLYjBmMlkvOFB6alBnc0lBTzVQajRtakpIMktyT0NBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3c2VEWGpyQitnMlJCOVk5VThnZlVNVmxUOG1JdW5LWS9GWDI1NnNtaEtYYlU5OGxraHoxTUJFd3BkdXJ4bk9QTG8zQW1jNlBZYmp5UXMra2o3K3dBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDI5NTQ0Mzg2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTQ0Mzc0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlHZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdnLmpzb24iOiAie1wia2V5RGF0YVwiOlwicXNJbGJHS05MeXFMa0lndSt5T3hFZitsRXkzcDlGVmIzOHNmanhhKzA1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjQyODkwNTEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk0NDM3MDQ0NDZcIn0iCn0=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "VICTORMD",
  packname: process.env.PACK_NAME || "VICTOR_MD",
  botname : process.env.BOT_NAME  || "VICTOR_MD",
  ownername:process.env.OWNER_NAME|| "ITACHI",


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
