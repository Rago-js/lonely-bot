const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

const erkekroleID = await data.fetch(`erkek.${message.guild.id}`);
const yetkiliroleID = await data.fetch(`yetkili.${message.guild.id}`);
const kayıtsızroleID = await data.fetch(`kayıtsız.${message.guild.id}`);

const nn = new Discord.MessageEmbed().setThumbnail();
if(!args[0] || !message.mentions.members.first()) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#000001').setDescription(`Kullanıcı Etiketleyerek dener misin?

**Örnek:**
\`\`\`${client.ayarlar.prefix}erkek @etiket
${client.ayarlar.prefix}erkek @etiket isim 321

${client.ayarlar.prefix}erkek 686185592899633200
${client.ayarlar.prefix}erkek 686185592899633200 isim 321\`\`\``)).then(a => a.delete({timeout: 10000}));


let member = message.mentions.members.first();
let erkek = message.guild.roles.cache.get(erkekroleID);
let yetkili = message.guild.roles.cache.get(yetkiliroleID);
let kayıtsız = message.guild.roles.cache.get(kayıtsızroleID);


let isim;
if(args[1]) {
isim = args.slice(1).join(' ');
} else {
isim = member.user.username;
}

if(!message.member.roles.cache.has(yetkiliroleID)) return message.channel.send(nn.setDescription(`${yetkili} | Rolüne sahip olman gerekiyor.`));
if(!member.roles.cache.has(kayıtsızroleID)) return message.channel.send(nn.setColor('#000001').setDescription(`${kayıtsız} | Bu Rol kayıt edilecek üyenin üzerinde bulunması gerekiyor.`));
const n = await data.fetch(`tag.${message.guild.id}`);

member.roles.add(erkek.id);
member.roles.remove(kayıtsız.id);
data.add(`say.erkek.${message.author.id}.${message.guild.id}`, 1);
if(isim && nn) member.setNickname(n+isim); 
if(isim && !nn) member.setNickname(isim);
if(!isim && nn) member.setNickname(nn+member.user.username);

message.channel.send(nn.setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/941759205977772114/942128313420353556/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png').setTitle(`İşte bu kadar! [ Kayıt Başarılı. ]`)
.setDescription(`${member} **Kullanıcısına ${erkek} rolü verildi.**

${message.author} **Kayıt sayın:** \`${client.ayarlar.prefix}profil yazarak görebilirsin!\`
\`\`\`${isim} isim olarak kayıt edildi! \`\`\`
`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['e', 'E', 'Erkek', 'man', 'Man'],
  permLevel: 0
}

exports.help = {
  name: 'erkek'
};