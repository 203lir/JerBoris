const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Logged in as ${client.user.tag}!');
});

client.on('message', message => {
	if (message.author === client.user) {
		return
	}
	if (message.content === ';;jerboa') {
		message.channel.send({files: ['https://www.zsl.org/sites/default/files/image/2014-02/Long-eared-jerboa.jpg']});
	}
	if ((message.content.search(/shriven/i)) != -1) {
		message.react('766315936667271168');
	}
	if ((message.content.search(/trajan/i)) != -1) {
		message.react('637432815377448971');
	}
	if ((message.content.search(/rome/i)) != -1) {
		message.react('637435059087081513');
	}
	if ((message.content.search(/soulmate/i)) != -1) {
		message.react('662859001993756672');
	}
	if ((message.content.search(/spiderus/i)) != -1) {
		message.react('662859001993756672');
	}
	if ((message.content.search(/zoom/i)) != -1) {
		message.react('719660062720917544');
	}
	if ((message.content.search(/sh/i)) != -1) {
		if ((message.content.search(/han/i) != -1) {
			message.react('662847131794669586');
		}
	}
	if ((message.content.search(/roma invicta/i)) != -1) {
		message.react('662458725734285340');
	}
	if ((message.content.search(/richard/i)) != -1) {
		message.react('662844367647539261');
	}
	if ((message.content.search(/neel/i)) != -1) {
		message.react('658504011745460225');
	}
	if ((message.content.search(/boris/i)) != -1) {
		message.react('662452815695708191');
	}
	if ((message.content.search(/jerboa/i)) != -1) {
		message.react('767917162496262176');
	}
	if ((message.content.search(/illuminati/i)) != -1) {
		message.react('662457691494547506');
	}
	if ((message.content.search(/jerboris/i)) != -1) {
		message.react('655251664449699844');
	}
	if ((message.content.search(/webassign/i)) != -1) {
		message.react('660659550491508747');
	}
	if ((message.content.search(/hell/i)) != -1) {
		message.react('660659550491508747');
	}
	if ((message.content.search(/get/i)) != -1) {
		if ((message.content.search(/naed/i)) != -1) {
			message.react('656348880383770645');
		}
	}
	if ((message.content.search(/wtf/i)) != -1) {
		message.react('656350900025163777');
	}
	if ((message.content.search(/emoji_8/i)) != -1) {
		message.react('760301005589184592');
	}
	if ((message.content.search(/bald/i)) != -1) {
		message.react('711993572064231483');
	}
	if ((message.content.search(/bald/i)) != -1) {
		message.react('711993572064231483');
	}
	if ((message.content.search(/caecili/i)) != -1) {
		message.react('637429743511273472');
	}

});

client.login('removedforsecurity');
