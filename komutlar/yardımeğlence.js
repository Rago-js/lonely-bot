const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let images = ['https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2F2ivyan7.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudup-oyular.gif', 'https://cdn.glitch.com/4ea1e74d-1c99-490a-9c13-d46ec11bc464%2Fcloudupp-oyunn.gif']
message.channel.send(new Discord.MessageEmbed().setAuthor(client.user.username+' Oyunlar Menüsü', message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png').setThumbnail(images.random())
.setColor('#cbfd54').setDescription(`🎮 \`${client.ayarlar.prefix}kaçcm\`

🎮 \`${client.ayarlar.prefix}karıştır\`

🎮 \`${client.ayarlar.prefix}öp\`

🎮 \`${client.ayarlar.prefix}kare\`

🎮 \`${client.ayarlar.prefix}tokat\`

🎮 \`${client.ayarlar.prefix}soda\`

🎮 \`${client.ayarlar.prefix}aşk\`

🎮 \`${client.ayarlar.prefix}fal\`
`).addField('❕ Yavaş kullanım!', '**Oyun komutlarının bazıların da yavaş kullanım vardır.**'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'eğlence'
};