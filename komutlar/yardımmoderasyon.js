const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/941759205977772114/942118793075888148/standard_5.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Moderasyon Menüsüne Hoş Geldiniz 😇**
\`\`\`${client.user.username} Kullanırken @Lonely rolünü en üstte tutunuz.\`\`\`

🔇**\`${client.ayarlar.prefix}mute-sistem\`
Chat ve Seste mute için güzel sistem

🔒 \`${client.ayarlar.prefix}jail-sistem\`
Etiketlediğiniz Üyeyi karantina altına al

❌ \`${client.ayarlar.prefix}ban-sistem\`
Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız

🌹 \`${client.ayarlar.prefix}toplu-rol-sistem\`
Toplu rol ile hem alıp hem de verebileceğiniz sistem

🌊 \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç** hem de **otomatik rol** aynı anda çalıştır

🛎️ **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf,** içerikler vardır
**
**
**Müzik botu arıyorsan, Lonely Music tam senin istediğin gibi hizmetinde! » **[Tıkla](https://discord.com/oauth2/authorize?client_id=933838376237420654&scope=bot&permissions=0) 
`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mod'],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon'
};