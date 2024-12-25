const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}koruma\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(message.author.id !== message.guild.owner.id) return message.channel.send(nn.setImage('https://cdn.discordapp.com/attachments/942132842954104842/942134151660838962/dddddd.png').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}koruma\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.

Sunucu Sahibi**
${message.guild.owner.user.tag}`))

if(!args[0]) return message.channel.send(nn.setColor('#00001').setTitle('Bir hata oldu!').setDescription(`Koruma açmak istersen **${client.ayarlar.prefix}koruma aç** yazmalısın!`))
if(args[0] === 'aç') {
data.set(`korumalar.${message.guild.id}`, 'codare');
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setColor('#000001').setDescription(`Koruma sistem başarıyla kuruldu.
Kapatmak isterseniz, \`${client.ayarlar.prefix}koruma kapat\` yazarak kapatabilirsiniz.

**Açılan korumalar**:
\`\`\`• Rol silme koruma,
• Rol yöneticilik koruma,
• Sağ tık yasaklama koruma,
• Kanal koruma & Kanal Geri Açma,
• Emoji koruma,
• Bot Koruma\`\`\``)).then(a => a.delete({timeout: 10000}));
} else if(args[0] === 'kapat') {
data.delete(`korumalar.${message.guild.id}`);
return message.channel.send(nn.setTitle(`İşte bu kadar!`).setColor('#000001').setDescription(`Koruma sistem başarıyla kapatıldı.
Açmak isterseniz, \`${client.ayarlar.prefix}koruma aç\` yazarak kapatabilirsiniz.

**Kapatılan korumalar**:
\`\`\`• Rol silme koruma,
• Rol yöneticilik koruma,
• Sağ tık yasaklama koruma,
• Kanal koruma & Kanal Geri Açma,
• Emoji koruma,
• Bot Koruma\`\`\``)).then(a => a.delete({timeout: 10000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'koruma'
};