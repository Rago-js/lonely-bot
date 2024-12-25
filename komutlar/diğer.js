const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/941759205977772114/942111517397098556/xddx.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`\`\`\`Lonely Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`

🐦 \`${client.ayarlar.prefix}av\`
**Kullanıcının profilinde ki fotoğrafı gösterir**

📖 \`${client.ayarlar.prefix}duyuru\`
**Yazı içeriğini oluşturabilirsin**

🐱 \`${client.ayarlar.prefix}afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

☁️ \`${client.ayarlar.prefix}davet\`
**Lonely bağlantılarını gönderir**

📋 \`${client.ayarlar.prefix}kurallar\`
**Lonely hazır tema ile kurallarınızı yerleştirir**

🌟 \`${client.ayarlar.prefix}yavaş-mod\`
**Lonely üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

:innocent: \`${client.ayarlar.prefix}emote\`
**Emoji URL veya Emoji girerek eğlenceli emojinin çizilimini atar**

🐝 \`${client.ayarlar.prefix}emoji\`
**Lonely sunucunda ki emoji ismini yaz sana indirme bağlantısı verir**

🔞 \`${client.ayarlar.prefix}nsfw\`
**Cinsel içerikler içeride seni bekliyor**

🎲 \`${client.ayarlar.prefix}oyunlar\`
**Eğlenceye kendini kaptırma**

🔐 \`${client.ayarlar.prefix}kanal-kilit\` **&** \`${client.ayarlar.prefix}kilit-aç\`
**Kanalı kilitlemenize yarar**

❕ \`${client.ayarlar.prefix}çek [@etiket]\` **|** \`${client.ayarlar.prefix}kes [@etiket]\` **|** \`${client.ayarlar.prefix}git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

💐 \`${client.ayarlar.prefix}rol-renk\`
**Lonely Telefon kullananlar için Rol Renk değiştirme**

🗑 \`${client.ayarlar.prefix}sil [100]\`
**Lonely bot kanaldaki mesajları siler**

\`${client.ayarlar.prefix}sunucudan-ayrıl\`
**Lonely ile kurmuş olduğunuz ayarlarınızı sıfırlayarak sunucundan çıkar**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['other'],
  permLevel: 0
}

exports.help = {
  name: 'diğer'
};