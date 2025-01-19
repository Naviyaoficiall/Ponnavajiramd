const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
   SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=7ZcxhZZY#j6atsWt7dTosjqBkRLm-TgQE2Hw3OccL9uF605RBbgU' : process.env.SESSION_ID, 
   DATABASE_URL: process.env.DATABASE_URL === undefined ? 'postgres://movie_my_user:BDXztL7cmv1gV26b9eCsAseSMp7tqyvW@dpg-co1n7jvsc6pc73ctrku0-a.oregon-postgres.render.com/movie_my' : process.env.DATABASE_URL,
   PREFIX: process.env.PREFIX || '.' ,
   JID: process.env.JID || `94768043844@s.whatsapp.net` , 
   FOOTER: process.env.FOOTER === undefined ? 'TC TEAM MOVIE DL' : process.env.FOOTER

};
