const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('Lonely Fake Hesap Sistem').setDescription(`
\`${client.ayarlar.prefix}yeni-üye-role [@rolEtiket]\`
**Sunucunuza giren kullanıcılara verilen rolü etiketle**

\`${client.ayarlar.prefix}fake-cezalı-role [@rolEtiket]\`
**Sunucunuz içerisinde ki cezalı rolünü etiketle**

\`\`\`Kapatmak istediğin komutlar aşağıda\`\`\`

\`${client.ayarlar.prefix}yeni-üye-role-kapat\`
**Ayarlı olan kayıtsız rol kapatır**

\`${client.ayarlar.prefix}fake-cezalı-role-kapat\`
**Ayarlı olan fake cezalı rol kapatır**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/941759205977772114/942128313420353556/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'fake-hesap-sistem'
};