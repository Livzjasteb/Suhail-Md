const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lifjyxd@gmail.com@gmail.com"
global.location="Banten,Indonesia."


global.mongodb= process.env.MONGODB_URI || "mongodb+svr://DARKSHAN:
3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "6283176793414" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6283176793414";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "Zyxx,6283176793414";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "6283176793414";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "6283176793414,6283176793414";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_09_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiU2R5YTZNMnN1NWJJcEI3WTYyVURFNnpQMFFFTFQwd21OQlYxZittYzQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODMxNzY3OTM0MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBCMEFGMEFFRjMyMTI0MUZCMzJGRkFDODA4RkI3NkFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkyNjk0NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODMxNzY3OTM0MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBOUI4QUI2MkY2QzdDMzY3QjY0Nzg1NTZBMkYxOTU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkyNjk0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtU1BZYUt1MlNXcVpxYk55Q0VGQk93XCIsXG4gIFwicGhvbmVJZFwiOiBcImY4MDdiMmNjLTY4ODAtNGE0My04YTZmLTQyYWFkNThkYTEwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICA1MSxcbiAgICAgIDY1LFxuICAgICAgMTczLFxuICAgICAgMjYsXG4gICAgICAxMjcsXG4gICAgICAxODIsXG4gICAgICAyMzEsXG4gICAgICAxNDcsXG4gICAgICA0MSxcbiAgICAgIDIxNyxcbiAgICAgIDE3LFxuICAgICAgMjI0LFxuICAgICAgMTEzLFxuICAgICAgMTQyLFxuICAgICAgMTksXG4gICAgICAyMzYsXG4gICAgICAzNyxcbiAgICAgIDIyNixcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNzgsXG4gICAgICA3OCxcbiAgICAgIDEyMixcbiAgICAgIDg2LFxuICAgICAgODEsXG4gICAgICA1MyxcbiAgICAgIDIwMSxcbiAgICAgIDk4LFxuICAgICAgOTksXG4gICAgICAxNzksXG4gICAgICAxOTYsXG4gICAgICAxMjMsXG4gICAgICAyOSxcbiAgICAgIDIxLFxuICAgICAgMTQyLFxuICAgICAgMzIsXG4gICAgICAxMTksXG4gICAgICA2LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm51aG93R0VObnoyTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCSDJHcG5vNGtZRnkyS0ZCaGJKY29UY3dFUlplaUgyYWw1NGsvVktyQVFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhKVEQvUlZFb3hmWXUvekp1bXBxbklrU3h1ZXVaZVNEYzRQc2xSalRqdlNSc0NMcjFEbUhTNElGdnhnQ1p0VzBtb05JR2dXWWJzQVZRVUJCWTgvQ0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInEzRi8rcmFRTW1jOVcvMFlnU1g0TW8wbGlDTk40Tk15ZXVGdmNoZzliWUM1OG9MdzhrVUZFNEdwMnpnUTFja2U4RUhnWXE4YTJPYzJ2djFiY3RPTENBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4MzE3Njc5MzQxNDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjQ0MjUwMjk1NzA2NDI6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWnl4SGlnaHQhIVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4MzE3Njc5MzQxNDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTI2OTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQU5iXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBTmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsUm50Vm12cFp2dmc5VVFNQ0MreUpNWGdxUERwM2trWTQxaHZoc3NhYlFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzU4OTEwMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFOYi5qc29uIjogIntcImtleURhdGFcIjpcIjltQytFQktGRVUrVTNJS1Uwc3NiN1hWbTFrcFdhUXlwbDFwdVBJUVlxcHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzNTg5MTAzMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE2OTI2NjE5OTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DARK ZYXX",
  packname: process.env.PACK_NAME || "Zyxx-Botz",
  botname : process.env.BOT_NAME  || "Zyx-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Zyxmalesin",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
