// Call Packages
const Discord = require('discord.js');
const economy = require('discord-eco');


module.exports = {
  twist: function (channel, name, episode) {
	channel.send(`https://twist.moe/a/`+name+`/`+episode)
  },

};
