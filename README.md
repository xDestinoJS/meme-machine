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

# How do  I get a Discord Bot Token?
1. Go to the [Discord Developer Portal](https://discord.com/developers)) and Click on the “New Application” button. Then, give the application a name and click “Create”:

![Image](https://i.imgur.com/PCiPgqU.png)

2. Then, create a Bot User by navigating to the “Bot” tab under settings and clicking “Add Bot”:
![Image](https://i.imgur.com/P49mTj5.png)<br>
Click “Yes, do it!” to continue.
3. Disable public bot if you dont want other people to invite your bot:<br>
![image](https://user-images.githubusercontent.com/39455804/111617285-33b8b100-87e3-11eb-8514-ffea2b106444.png)
4. Then, copy your bot token:<br>
![image](https://user-images.githubusercontent.com/39455804/111616751-8d6cab80-87e2-11eb-983a-b7656f3d7654.png)
> ⚠️ **Don't give your bot token to anyone. If someone gets your token they can do absolutely anything with your bot.**

# How do invite my bot to my server?
https://discord.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot&permissions=3072



# Credits
TimeTicks, xDestino and the authors of socket.io, discord.js and express

# ⚠️ Disclaimer
Users of Meme Machine have the ability to post any image, including NSFW images. I'm _**not**_ responsible for any ban on any social media for any NSFW content being displayed.
