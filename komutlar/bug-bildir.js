const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **Bug Söyler misin ?**`)
  .setColor("#00ff88")
  .setFooter(`Bug Sistemi.`)
  if(!bug) return message.channel.send(sebep2);
let user = message.author.tag;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("idnizi girin")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Bug Rapor")
.addField("Bug", bug)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.setColor("RED")
   message.react("👍");

message.channel.send(":white_check_mark:  **| Bug Raporu Başarı İle İletildi. Teşekkür Ederiz. | :heart:**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
