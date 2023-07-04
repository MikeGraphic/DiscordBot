const { AttachmentBuilder,EmbedBuilder } = require('discord.js');
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (!message.mentions.users.size) {
		let link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png'})}` 
		const attachmentt = new AttachmentBuilder(link, 'triggered.gif');
		const embed = new EmbedBuilder()
			.setTitle(`${message.author.username} ПОТРАЧЕНО!`)
		    .attachFiles(attachmentt)
		    .setImage('attachment://triggered.gif')
		return message.channel.send(embed);
	}
	const WastedList = message.mentions.users.map(user => {
		let link = `https://some-random-api.ml/canvas/wasted/?avatar=${user.avatarURL({ format: 'png'})}`
		const attachmentt = new AttachmentBuilder(link, 'triggered.gif');
		const embed = new EmbedBuilder()
		    .setTitle(`${user.username} ПОТРАЧЕНО!`)
		    .attachFiles(attachmentt)
		    .setImage('attachment://triggered.gif')

		return embed
	});
	message.channel.send(WastedList);
	return
};
module.exports.help = {
    name: "wasted"
};