/* Copyright (C) 2021 jinusir.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

jinusir by-jinu

*/

const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'jinusir', fromMe: true, desc: 'random jinusir video' }, (async (message, match) => {

    var r_text = new Array ();

      r_text[0] = "https://i.ibb.co/8X1zZZG/Pics-Art-11-16-05-50-00.jpg";
      r_text[0] = "https://i.ibb.co/ph7q7w8/Pics-Art-10-01-06-55.png";
      r_text[0] = "https://i.ibb.co/wMm12js/Pics-Art-10-02-02-56.jpg";
      
      
      var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by Pikachu'})

    }));

}
