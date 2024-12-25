const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}unban \` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!args[0]) return message.reply('Yasak kaldırmak için lütfen doğru kullanıcı **ID** girin.')

  message.guild.fetchBans().then(bans => {
  if(bans.has(args[0])) {
  return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription('**ID** göre kullanıcı bulunamadı. **ID** doğru olduğundan emin ol, Ve ya kullanıcı yasaklı değil.')); }
  message.guild.ban(args[0], sebeb).then(async (member) => {
      
  let user;
  if (member instanceof Discord.GuildMember) { user = member.user; }
  else if (member instanceof Discord.User) { user = member;
  } else { user = await client.users.fetch(member); }
  if(!user) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription('**ID** göre kullanıcı bulunamadı. **ID** doğru olduğundan emin ol, Ve ya kullanıcı yasaklı değil.'));
  message.guild.members.unban(user.id);
  message.channel.send(`${user.tag} kullanıcısının banı açıldı.`);
  })});

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'unban'
};