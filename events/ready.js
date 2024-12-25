const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
module.exports = async client => {

client.on('message', message => {
    client.user.setActivity(`🛠️ | .yardım `, {
      status: "online",
      type: "WATCHING",
      url: "https://github.com/Rago-js"
    })
})
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 