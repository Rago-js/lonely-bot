const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Lonely Yasaklı Tag Sistem').setDescription(`
\`${client.ayarlar.prefix}yasaklı-tag 🚀\`
Yasaklı **tagınızı** yada **simgenizi** koyarak aktif edersiniz

\`${client.ayarlar.prefix}yasaklı-tag-role [@rolEtiket]\`
**Yasaklı tag da bulunan kullanıcıya rolü verir**

\`${client.ayarlar.prefix}yasaklı-yeni-üye-role [@rolEtiket]\`
**Sunucunuza katılan yeni üye rolünü ayarlayınız**
\`\`\`Sıfırlama Komutları\`\`\`
\`${client.ayarlar.prefix}yasaklı-tag-role-sil \`
Ayarlamış olduğunuz **yasaklı tag** rolünü siler

\`${client.ayarlar.prefix}yasaklı-tag-kapat\`
**Ayarlı bulunan yasaklı tagınızı kapatır**

\`${client.ayarlar.prefix}yasaklı-yeni-üye-role-sil\`
**Ayarlı olan yeni üye rolünü kapatır**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yasak-tag-sistem'
};