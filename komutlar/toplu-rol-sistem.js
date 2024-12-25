const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Lonely Toplu Rol Sistem').setDescription(`
☀️ \`${client.ayarlar.prefix}Trol-al\`
Sunucunuzda ki üyelerin üzerinde olan **ROL ID** girerek hepsinden rolü kaldırır

☀️ \`${client.ayarlar.prefix}Trol-ver\`
Sunucunuzda ki üyelerinize bir **ROL ID** girerek hepsine o rolü verir`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'toplu-rol-sistem'
};