const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Lonely Kısıtlı Koruma')
.addField('Selam karşılama için', `\`\`\`${client.ayarlar.prefix}selam aç & ${client.ayarlar.prefix}selam kapat\`\`\``)
.addField('Küfür Kısıtlamak', `\`\`\`${client.ayarlar.prefix}küfür kısıt & ${client.ayarlar.prefix}küfür kapat\`\`\``)
.addField('Reklam Kısıtlamak', `\`\`\`${client.ayarlar.prefix}reklam kısıt & ${client.ayarlar.prefix}reklam kapat\`\`\``)
.addField('Büyük Harf Kısıtlamak', `\`\`\`${client.ayarlar.prefix}caps kısıt & ${client.ayarlar.prefix}caps kapat\`\`\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.pnghttps://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kısıtlamalar'
};