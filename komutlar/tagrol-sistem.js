const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#000001')
.setTitle('Lonely Tag Rol & Kanal')
.setDescription(`\`${client.ayarlar.prefix}rol-tag 🚀\`
**Lütfen tag ayarlayınız başlamadan önce**

\`${client.ayarlar.prefix}tag-role [@rolEtiket]\`
Sunucunuz da **tag** alan üyeye verilecek rolü etiketle

\`${client.ayarlar.prefix}tag-log [#kanalEtiket]\`
**Tag** alan & çıkaran üyeleri kanala bilgi olarak gönderir

\`\`\`Sıfırlama Komutları\`\`\`
\`${client.ayarlar.prefix}tagrole-sil\`
**Tagın ayarlı olan rolü siler**

\`${client.ayarlar.prefix}tag-log-kapat\`
**Ayarladığınız tag kanalı sıfırlar**

📢 Sistem Nasıl Çalışır?
**Buradaki herşeyi kurduktan sonra, \`Tag\` alan veya cıkartanın sunucunuz da herhangi bir kanala msj yazması durumunda alıp vermektedir.**
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tagrol-sistem'
};