const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Lonely Jail Karantina Sistem').setDescription(`
\`${client.ayarlar.prefix}jail-log [#kanalEtiket]\` **|** \`${client.ayarlar.prefix}jail-log-kapat\`
Jail sistemi için gereklidir. **Karantina** kanalını seçmeniz gerekiyor.

\`${client.ayarlar.prefix}jail-yetkili-role [@rolEtiket]\`
Jaili **kullanacak yetkili** rolünü etiketle

\`${client.ayarlar.prefix}jail-karantina-role [@rolEtiket]\`
Jail **karantina rolünü** etiketle`)
.addField('ᅠ', 'ᅠ')
.addField('Jail Komutu', `${client.ayarlar.prefix}cezalı, ${client.ayarlar.prefix}Cezalı, ${client.ayarlar.prefix}jail`)
.addField('Örnek Karantina komut', `\`\`\`${client.ayarlar.prefix}jail @etiket\`\`\``)
.addField('ᅠ', 'ᅠ')// xd
.addField('Jail den çıkarmak isterseniz', `\`${client.ayarlar.prefix}k-erkek\`, \`${client.ayarlar.prefix}k-kadın\`\n**Komutları aktif etmek için:** \`${client.ayarlar.prefix}erkek-role [@roleEtiket]\` **-** \`${client.ayarlar.prefix}kadın-role [@roleEtiket]\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/941759205977772114/942128313420353556/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-sistem'
};