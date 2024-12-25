const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Lonely Bot ©️ | Oy Ver yükleniyor.").then(message => {

    var matador = [
 
      "**Buyur Dostum İşte Oy Ver;** \n https://top.gg/bot/773539215098249246/vote"
    ];

    var matador = matador[Math.floor(Math.random() * matador.length)];

    message.edit(`${matador}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyver"],
  permLevel: 0
};

exports.help = {
  name: "oyver",
  description: "Oy Verirsiniz.",
  usage: "oyver"
};