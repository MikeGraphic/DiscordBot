const { EmbedBuilder } = require('discord.js');
const fs = require("fs");

module.exports.run = async (client,message,args) => {
		let sms = args.join(" ");
	    message.channel.bulkDelete(1);
		message.channel.send(sms);
		console.log(`Пользователь ${message.author.username} отправил через say: ${args.join(" ")}`); 
		const adminerr2 = new EmbedBuilder()
            .setColor('#fc5184')
            .setTitle(`${message.author.username}, вы не имеете прав на эту команду!`)
            .setAuthor(message.guild.name)
            .setFooter('Amy<3 © 2023')
        message.channel.send(adminerr2)

};
module.exports.help = {
    name: "say"
};