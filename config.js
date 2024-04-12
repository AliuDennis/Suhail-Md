const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="aliuyusuf641@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_12_04_11_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV0lxaXgvUjdYdnlJTlNIN2w4eUhtMzJpWURlWW0zL3h3RVplZEI0UDVtST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInJJM053bDIzc0ltUmhuOGN1UHhjTFNIVk4ySDFob1FjeGVQM0xBcHI4Mlk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0pUOWdnMUhHQ1dkMXBGUVNIZWFxOGlXeGZvT0FhVkhTNm5pb1h2a2ptaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZiNDZMRlgydm5RRVVWd1dRckx0WlVTbGVGMnlMK21YS3J5cVNCdHFtSDQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0s2RThJQmw5VVhPMUg1TEFUc0xKZGYxK3RuNVhwR01LR21QMElCR01uOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInlaRm5laTZSd3FCM3hQdEdGbjFFR3JDQXJ5ZjhCN0RpbHNXLytKdVgxRm89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxR01PaDJySVVUbzIzSFJ3N2tmRHJaTE5wb1pZZzR2YVpDTGdNZ2FzeG00PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNWVzeW5KSTkyRVlBT1JSTFphR293ZFVQMWRrQW1DZkdTWklTYnJSQTZ5Yz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJGRm04N1NZZzBYcW9BVFN2d1preno3Smx6c0g0RUVlRENCYUgzc1I3K3c0RDhvcmdraUQxOGFyeGpWU0lNbHdzdlRIUnVBMDRDQm9rUXRpWWRjTkFnUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjA1LFwiYWR2U2VjcmV0S2V5XCI6XCJIcVdrOUhkTHl0Y2VkQ2NlNllRODgrQ1ZRK1hIcktwMkRWNm1aODB0RndnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiWVFqYUFHTmxUczY0ZWUxSmE2NHAzUVwiLFwicGhvbmVJZFwiOlwiZjNlM2MxNjctZDNlMS00ZjFmLWI3ZmUtYTBiMDNjMzM2YjUyXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpVHh5RWdPN2tiNXlwWGJqTTNLRGh0YWIxT009XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlBQRTA4aXNqT3hEelZ2VW5MS09VRGdqazAvYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTnZHbmJvQ0VKcUk0YkFHR0FnZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInVRY1Q5T2lnTWwvOG8weVFUc0RrVlpUenhHSy9scTBNWU1lNVpRSWIybms9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJSblExVW8xV0JCSWYrVFgyYkpBeGM4S0t1MllFbFM2ZW9VbnFWTHpjNm5iNWExTGlCOHBTQXFlRTBEaXVhQ25jVk4vYmIzeGpUWmUvSmhSRFl6VzdEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjhJYm5IaENZMkNKU1FUVVVOWXhNWWgzSmptQlpTYnIxMS9jMmh5dkxsRGtiM3J0cEtZekxNejFuOHBIZTBUR0dsaDVab0hxZGRNdU0xbndhQjl1Nml3PT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ3MDI2NDk2ODQ0OjExQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIyMTQ1MDM1OTcyNzMzOjExQGxpZFwiLFwibmFtZVwiOlwiQVswz4DCo+KdpO+4j/CfjITwn46uXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0NzAyNjQ5Njg0NDoxMUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJia0hFL1Rvb0RKZi9LTk1rRTdBNUZXVTg4Uml2NWF0REdESHVXVUNHOXA1XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjg2NjMzNSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFCYXVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYXIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzTjJzMWFleC9zNUx1TW1HRjcvUHoxY1l3eWRzQTY0OVRqeDZMSy9DUGYwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1ODk4OTkxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA1OTI1MjQyNjc2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU3FZMHBLNURrcnVUZ3NZT21BY1M2Q0E0SWlFOTQ0NXNwYmppNFNCQ1NLMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTg5ODk5MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODUxOTAyMjM1N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJhdC5qc29uIjogIntcImtleURhdGFcIjpcImFZb0ZkZS9HSUlmZmQ2ZXUrV0tMZjlnZlBDYUlzL1lyTjNPUU9NRmI5VTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU4OTg5OTE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTExMTExMzI3NDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHOVhoZWhzR1VtVHd2S0FFK0VFVzBhV3BEdmtybnpsQ215a2V2U0R3Y3VFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1ODk4OTkxNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkakpZNnVMV3FqRTFML1R5TUluOGNnUEhmc0NURkE2TUx1d3loVmdHSllJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1ODk4OTkxNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI0MzEwMzkxNDhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBRjEzS1JIaXh4aTNVektXdXBIUllocEJ1WHo1NWVTQmVYWXVJeE51ZnJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1ODk4OTkxNSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyNDMyMDY3NjY4XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©Alone_Bot(•_•)" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Alone_Bot",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Alone•Bot",
  ownername:process.env.OWNER_NAME|| "Alone Tv",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Alone"  ).toUpperCase(),



};

























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
