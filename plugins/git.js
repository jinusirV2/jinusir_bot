const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/hWQ83gj/20211117-202942.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*THIS BOT CREATED BY JINUSIR*
─────────────────────────────────────────────────────────────────
*GITHUB LINK: https://github.com/jinusirV2/jinusir_bot*

*CREATER INSTA: https://instagram.com/jinu__777?utm_medium=copy_link*

*CREATER WA NUMBER:    http://wa.me/+917356624702*

*JINUSIR WA GROUP:   https://chat.whatsapp.com/BXmi7So4IbDKyvV3WaB7iI*

*JINUSIR MOVIE WEBSITE: www.jinmovies.ga*

       *JINUSIR BOT V.3 COMING SOON*


`}) 

}));
