const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('Lonely Komut Mesaj Sistem')
.setDescription(`\`${client.ayarlar.prefix}komut ekle\`
**Oluşturmak istediğin komut ismini ve cevabı girmen gerekir**

\`${client.ayarlar.prefix}komut tablo\`
**Oluşturulan komutları buradan görebilirsiniz**

\`${client.ayarlar.prefix}komut sil\`
**Komut ismini girerek istediğiniz komutunuzu silebilirsiniz**`)
.setImage('https://cdn.discordapp.com/attachments/942132842954104842/942133110584270909/ezgif-3-d3e9500b06.gif')
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'komut-mesaj-sistem'
};