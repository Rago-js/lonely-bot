const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  message.channel.send(new Discord.MessageEmbed().setTitle('Lonely Mesaj Tag Sistem').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png')
  .setDescription(`\`${client.ayarlar.prefix}tag\`
  **Tagınızı yada simgenizi koyarak aktif edersiniz**
  
  \`${client.ayarlar.prefix}tag kapat\`
  **Tag mesaj sisteminin kapatırsınısz**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'mesaj-tag'
};