const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Lonely Giriş & Sayaç Sistem').setDescription(`\`${client.ayarlar.prefix}sayaç [#kanalEtiket 1000]\` 
**Sunucun için toplam bir rakam tut**

\`${client.ayarlar.prefix}sayaç-kapat\` 
**Kurulu olan sayaç sistemi kapatır**

\`${client.ayarlar.prefix}sayaç-kapat\` 
**Kurulu olan sayaç sistemi kapatır**


📢 Auto rol verir mi?
**Sunucunuza giren kullanıcıya vermesi için:** \`${client.ayarlar.prefix}oto-role [@rolEtiket]\` **&** \`${client.ayarlar.prefix}oto-role-kapat\` **ayarlamalısın.**`)
.setImage('https://media.giphy.com/media/XAwzAPJLnmZH7Vta24/giphy.gif?width=400&height=155').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-sistem'
};