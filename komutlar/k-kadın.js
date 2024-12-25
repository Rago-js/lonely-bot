const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

const kadınroleID = await data.fetch(`kadın.${message.guild.id}`);
const yetkiliroleID = await data.fetch(`jail.yetkilirole.${message.guild.id}`);
const jailRoleID = await data.fetch(`jail.karantinarole.${message.guild.id}`);
const nn = new Discord.MessageEmbed().setThumbnail();
if(!args[0] || !message.mentions.members.first()) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?`)).then(a => a.delete({timeout: 10000}));


let member = message.mentions.members.first();
let kadın = message.guild.roles.cache.get(kadınroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let jailled = message.guild.roles.cache.get(jailRoleID);
if(!kadın || !yetkili || jailled) return;

if(!message.member.roles.cache.has(yetkiliroleID)) return message.channel.send(nn.setDescription(`${yetkili} | Rolüne sahip olman gerekiyor.`));
member.roles.remove(jailRoleID);
member.roles.add(kadınroleID);
data.add(`say.kadın.${message.author.id}.${message.guild.id}`, 1);
message.channel.send(new Discord.MessageEmbed()

.setDescription(`${member} **Kullanıcısına ${kadın} rolü verilerek karantinadan çıkartıldı.**`)
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/941759205977772114/942128313420353556/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png')
.setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/941759205977772114/942128313420353556/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'k-kadın'
};