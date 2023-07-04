const { EmbedBuilder } = require('discord.js');
const fs = require("fs");

module.exports.run = async (client,message,args,prefix) => {

	const exampleEmbed = new EmbedBuilder() 
		.setColor('#43e2f7') 
		.setTitle('Приветик :>') 
		.setAuthor(message.guild.name) 
		.setDescription(':^Мы любим вас!^:') 
		.setTimestamp() 
		.setFooter('Amy<3 © 2023');

	message.channel.send(exampleEmbed); 

};
module.exports.help = {
    name: "hi"
};