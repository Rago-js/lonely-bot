const Discord = require('discord.js');
const data = require('quick.db');

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
  }
  
exports.run = async (client, message, args) => {

const datas = await data.fetch(`erkek.${message.guild.id}`);
const datass = await data.fetch(`kadın.${message.guild.id}`);
if(!datas) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`**${client.ayarlar.prefix}erkek-role @roleetiket** olarak erkek rolünü aktif etmelisin!`).setFooter('Erkek rolü aktif değil', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'))
if(!datass) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`**${client.ayarlar.prefix}kadın-role @roleetiket** olarak erkek rolünü aktif etmelisin!`).setFooter('Kadın rolü aktif değil', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png'))

let images = [
'https://media.giphy.com/media/2kW2UcfY5fhXY3ybX5/giphy.gif',
'https://media.giphy.com/media/8vIEv5JZmO1RRU0Wmz/giphy.gif',
'https://media.giphy.com/media/l41lLPD1qV9jXpv56/giphy.gif',
'https://media.giphy.com/media/VGVxd48QjP1sdXi0Jx/giphy.gif',
'https://i.gifer.com/fxac.gif',
'https://media.giphy.com/media/l0HlAw20GtU0mbUeQ/giphy.gif',
'https://i.gifer.com/ASV.gif'
];

let toplamüye = message.guild.members.cache.size.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');
let aktifüye = message.guild.members.cache.filter(a => a.presence.status !== 'offline').size.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');
let sesaktif = message.guild.members.cache.filter(a => a.voice.channel).size.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');
let boost = message.guild.premiumSubscriptionCount.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');
let kadınüyesayısı = message.guild.members.cache.filter(a => a.roles.cache.has(datass)).size.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');
let erkeknüyesayısı = message.guild.members.cache.filter(a => a.roles.cache.has(datas)).size.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');

let tag;
if(!data.fetch(`tag.${message.guild.id}`)) {
tag = '0️⃣';
} else {
tag = message.guild.members.cache.filter(a => a.user.username.includes(data.fetch(`tag.${message.guild.id}`))).size.toString().replace('0', '0️⃣').replace('1', '1️⃣').replace('2', '2️⃣').replace('3', '3️⃣').replace('4', '4️⃣').replace('5', '5️⃣').replace('6', '6️⃣').replace('7', '7️⃣').replace('8', '8️⃣').replace('9', '9️⃣');
}

message.channel.send(new Discord.MessageEmbed()
.setAuthor(`Sunucu durumunu istedi: ${message.author.tag}`, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png')
.setThumbnail(images.random())
.setDescription(`\`\`\`[${client.ayarlar.prefix}tag] ile taglı sayını ayarlayabilirsin.\`\`\`
**Toplam Üye** ${toplamüye}
**Aktif Üye** ${aktifüye}
**Seslide ki Üye Sayısı** ${sesaktif}
**Taglı Üye Sayısı** ${tag}
**Boost Sayısı** ${boost}
**Kadın Üye Sayısı** ${kadınüyesayısı}
**Erkek Üye Sayısı** ${erkeknüyesayısı}`));




};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'say'
};