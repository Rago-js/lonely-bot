const Discord = require('discord.js');

exports.run = async (client, message, args) => {


  const embed = new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png')
  .setTitle('CloudUP Karşılama Mesaj Sistem')
  .setDescription(`\`${client.ayarlar.prefix}login-yetkili-role [@rolEtiket]\`
  **Kayıt edicek olan yetkili rolü seçmeniz gerekiyor.**
  
  \`${client.ayarlar.prefix}login kur [#kanalEtiket]\` **|** \`${client.ayarlar.prefix}login kapat\`
  **Kanal etiketleyerek aktif edersin. Gelenleri kayıt kanalında karşılar**
  
  \`${client.ayarlar.prefix}login-yetkili-role-kapat [@rolEtiket]\`
  **Karşılama mesaj sisteminin yetkili rolünü kapatırsınız**
  

  Yarı Premium Tema \`${client.ayarlar.prefix}temalar\` **__yazarak bakabilirsin__**`);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-mesaj'
};