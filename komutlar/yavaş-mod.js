const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${message.author} \`Mesajları Yönet\` | Yetkiniz yok.`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setThumbnail('https://tenor.com/view/sloth-walking-slow-slow-mo-asi-cuando-gif-9747136').setTitle('Bir hata oldu!').setDescription(`${message.author} Yavaş mod için bir **saniye** belirtmedin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}yavaş-mod 60\`\`\``));
if(args[0] > 21600) return message.channel.send(new MessageEmbed().setColor('9c5cb2').setDescription(`${message.author} Yavaş mod için (\`max.21600\`) saniye girilebilirsin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}yavaş-mod 60\`\`\``)).then(a => a.delete({timeout: 10000}));
message.channel.setRateLimitPerUser(args[0]);
message.channel.send(new Discord.MessageEmbed().setColor('9c5cb2').setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp').setTitle('İşte bu kadar!').setDescription(`${message.author} Yavaş mod için (\`${args[0]}\`) saniye olarak uygulandı!`)).then(a => a.delete({timeout: 10000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yavaş-mod'
};