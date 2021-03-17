const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Discord = require('discord.js');
const client = new Discord.Client();
const token = "" //get your bot token at https://discord.com/developers
const url = ""
var selectedImage = ""

client.on('message', function(message){
  if (message.content == "!meme") {
      (message.attachments).array().forEach(function(attachment) {
      selectedImage = attachment.url
        
      message.channel.send(
        new Discord.MessageEmbed()
        .setColor("f2dd9c")
        .setDescription("Visit " + url + " to see your post.")
        .setFooter("Post created by: " + message.author.username + ".")
      )
      
      })
    
      io.emit('chat message', selectedImage); //send the URL of the image (or meme) to the user
    }
    
    if (message.content == "!help") {
        message.author.send(
          new Discord.MessageEmbed()
          .setTitle("Help")
          .setDescription("Type the command '!meme' along with an image!")
          .setFooter("Note: as URLs aren't permitted, please use an attachment to send your image to the website.")
          .setColor("f2dd9c")
        )

        message.channel.send(
          new Discord.MessageEmbed()
          .setDescription("Check your DM's!")
          .setColor("f2dd9c")
        )
    }
});

client.login(token);

io.on('connection', (socket) => {
  console.log('a user connected'); //log that a user has connected
  
  socket.on('disconnect', () => {
    console.log('user disconnected'); //log that a user has disconnected
  });
  
});

 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); //replace with your index.html directory
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});


