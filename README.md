![Meme Machine](https://user-images.githubusercontent.com/39455804/111539053-be5ec900-876d-11eb-8089-51066504c854.png)

![Last Commit](https://img.shields.io/github/last-commit/xDestinoJS/meme-machine?style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/xDestinoJS/meme-machine?color=%231E90ff&style=for-the-badge)
<br><img src="https://i.imgur.com/G8v8KQC.gif" style="border-radius:5px;"><br>
A project created to display images sent in a Discord chat to a website using [discord.js](https://discord.js.org) and [socket.io](https://socket.io)!

# Requirements
Node.JS, text editor (e.g. VSCode)

# Why?
Meme Machine can be used to display memes on your social media (e.g. YouTube Videos & Twitch Streams) using [OBS](https://obsproject.com/)'s or [Slobs](https://streamlabs.com/)'s Browser Source.

# Setup
1. Run `git clone https://github.com/xDestinoJS/meme-machine` in your terminal
2. Run `cd meme-machine`
3. Run `npm install discord.js socket.io express`
4. Open `index.js` with your text editor and replace the variables "token" and "url":
    - replace `token` with your Discord bot token (you can get one at the [Discord Developer Portal](https://discord.com/developers))
    - replace `url` with the url of your website (not required)
5. Run `node .` 
6. Point your browser to `http://localhost:3000`
