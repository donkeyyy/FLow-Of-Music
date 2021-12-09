const { LOCALE } = require("../util/FlowOfMusicUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    var permissions = 70282305;

    let invite1 = new MessageEmbed()
      .setTitle(`**Here is the Invite Link **`)
      .setDescription(
        `**Then what are you waiting for? Invite me today!** \n\n [Invite Link](https://discord.gg/rbBQjQHkxY)`
      )
      .setURL(
        `https://discord.gg/rbBQjQHkxY`
      )
      .setColor("RANDOM");
    return message.channel.send(invite1);
  }
};
