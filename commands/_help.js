const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
const commands = require('../lib').commands;
const moment = require('moment-timezone');
const os = require('os');
const sck1 = require('some-module'); // Placeholder for the actual module

Secktor['help']({
  'pattern': 'help',
  'alias': ['cmd'],
  'desc': 'help cmd_name to know more about a specific command.\n*Eg:* _',
  'category': 'general',
  'react': '📡',
  'filename': __filename
}, async (sck, msg, args) => {
  const prefix = '!'; // Placeholder for the actual prefix
  if (args['split'](' ')[0]) {
    let response = [];
    const command = commands.find(cmd => cmd['pattern'] === args['split'](' ')[0].toLowerCase());
    if (!command) {
      return await msg['reply']('😔No Such commands.');
    } else {
      response.push('*🍁Command:* ' + command['pattern']);
      if (command['category']) response.push('*✨Category:* ' + command['category']);
      if (command['alias']) response.push('*⚡️Alias:* ' + command['alias']);
      if (command['desc']) response.push('*🗂Description:* ' + command['desc']);
      if (command['use']) response.push('*📡Usage:*\n ```' + prefix + command['pattern'] + ' ' + command['use'] + '```');
      return await msg['reply'](response['join']('\n'));
    }
  } else {
    const commandList = {};
    commands.forEach(async (cmd) => {
      if (!cmd['dontAddCommandList'] && cmd['pattern'] !== undefined) {
        if (!commandList[cmd['category']]) commandList[cmd['category']] = [];
        commandList[cmd['category']]['push'](cmd['pattern']);
      }
    });
    const currentTime = moment(moment())['format']('HH:mm:ss');
    moment.tz['setDefault']('Africa/Lagos')['locale']('id');
    const currentDate = moment.tz('Africa/Lagos')['format']('DD/MM/YYYY');
    let uptime = await sck1['uptime']();
    let responseText = '┏━━⟪ ' + fancytext(Config['ownername']['split'](' ')[0], 58) + ' ⟫━━☬\n';
    responseText += '╭─────────────╮\n│ User: ' + msg['pushName'] + '\n│ Theme: ' + tlang()['title'] + '\n│ Prefix: [ ' + prefix + ' ]\n│ Owner: ' + Config['ownername'] + '\n│ Plugins: ' + commands['countDocuments']() + '\n│ Users: ' + sck1['uptime']() + '\n│ Uptime: ' + runtime(process['uptime']()) + '\n│ Mem: ' + formatp(os['totalmem']() - os['freemem']()) + '/' + formatp(os['totalmem']()) + '\n│ Time: ' + currentTime + '\n│ Date: ' + currentDate + '\n╰─────────────╯\n\n';
    for (const category in commandList) {
      responseText += '┌── *' + tiny(category) + '* ──┐\n';
      for (const command of commandList[category]) {
        responseText += '│ ' + fancytext(command, 1) + '\n';
      }
      responseText += '└─────────────┘\n';
    }
    responseText += '└─────────────┘\n' + prefix + 'help cmd_name to know more about a specific command.\n*Eg:* ' + prefix + 'attp_\n*Made by Nethindu ☬*';
    let response = { 'image': { 'url': await botpic() }, 'caption': responseText };
    return await sck['sendMessage'](msg['chat'], response);
  }
});

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
┏━━━━━•❃ 𝙴𝙻𝙸𝚃𝙴-𝚖𝚍 〙❃•━━━━━┓`
            str += `
┃ ⛥┏━━━━━•❃°•°•━━━━━•❃°•°•      
•͙͙✧⃝•͙ User: ${citel.pushName}
•͙͙✧⃝•͙ Theme: ${tlang().title}
•͙͙✧⃝•͙│ Prefix: ${prefix}
•͙͙✧⃝•͙ Owner: ${Config.ownername}
•͙͙✧⃝•͙ Commands: ${commands.length}
•͙͙✧⃝•͙ Uptime: ${runtime(process.uptime())}
•͙͙✧⃝•͙ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
•͙͙✧⃝•͙  
•͙͙✧⃝┗━━━━━•❃°•°•━━━━━•❃°•°•
┗━━━━━•❃°•°•━━━━━•❃°•°•\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `✰ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
      if (commands[i].desc === undefined) commands[i].desc = "";
      str += `✰ ${fancytext(commands[i].desc, 1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "👾",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "🥷",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*😔No Such commands.*");
        else arr.push(`*📡Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})

Secktor.cmd({
  pattern: "time", 
  desc: "Get the current time in a specified location.",
  react:"⏱",
  catergory:"watsusi",
}, async (Void, citel, text) => {
  try {
    let location = text.slice(5).trim(); 

    if (!location) { 
      throw new Error("Please specify a location after the command.");
    }
    moment.tz.setDefault("Africa/Lagos");

    let formattedTime = moment().format('MMMM Do YYYY, h:mm:ss a z');
    let targetTime;

    try {
      targetTime = moment.tz(location).format('MMMM Do YYYY, h:mm:ss a z');
    } catch (timezoneError) {
      throw new Error(`Invalid timezone: ${location}`);
    }

    let message = `
╭─────── Time Check! ⏱️ ───────╮
│                               │
│ ⏱️ Your Local Time: ${formattedTime} │
│ ${location} Time: ${targetTime} │
│                               │
│ **Stay in sync with the world's clocks! **│
╰─────── Time Travel Now? ⏳ ───────╯
 © 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ᳆⃞⃚🇱🇰ʀͥᴇᷧᴀͫʟ⃟   𝙴𝙻𝙸𝚃𝙴-𝚖𝚍
    `;

    await citel.reply(message);
  } catch (error) {
    console.error(error);
    await citel.reply(`
⚠️ **Oops! Time travel error!** ⏳
│                                       │
│ ${error.message}                       │
│ Please check your input and try again. │
╰───────────────────────────────────────╯
    `);
  }
});

