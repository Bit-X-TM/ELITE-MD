

const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "question",
            desc: "Random Question.",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "truth",
            desc: "truth and dare(truth game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "dare",
            desc: "truth and dare(dare game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "fact",
        desc: "Sends fact in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*Fact:* ${data.fact}\n\n*Powered by IZUKU*`)   
    }

)


//-------------------------------------------------------

    //---------------------------------------------------------------------------
    cmd({
        pattern: "quotes",
        desc: "Sends quotes in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
✻ ═════ •❅• ═════ ✼
║ *🗂Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║    
✻ ═════ •❅• ═════ ✼ `
return citel.reply(replyf)
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "define",
        desc: "urban dictionary.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`www.ebox.free.nf`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
//------------------------------------------------------------------
cmd({
  pattern: 'chatgpt',
  desc: 'Ask the AI a question',
  category: "AI",
  
},
async (Void, citel, text) => {
  let question = encodeURIComponent(text.trim());

  if (!question) {
    return citel.reply('Please provide a question to ask the AI.');
  }

  try {
    let response = await axios.get(`https://rest-api.akuari.my.id/ai/gbard?chat=${question}`);
    let data = response.data;

    if (!data.respon) {
      return citel.reply('Sorry, I couldn\'t retrieve a response from the AI.');
    }

    await Void.sendMessage(citel.chat, { text: data.respon }, { quoted: citel });
  } catch (error) {
    citel.reply(`Error: ${error.message || error}`);
  }
});
//----------------------------------COPY AND GIVE CREDIT-------
cmd({
  pattern: 'rizz',
  category: "fun",
  desc: 'Get a random pickup line',
  react: '🙈',
},
async (Void, citel) => {
  try {
    let response = await axios.get('https://vinuxd.vercel.app/api/pickup');
    let data = response.data;

    if (!data || !data.pickup) {
      return citel.reply('Unable to retrieve a pickup line. Please try again later.');
    }

    let pickupLine = data.pickup;

    return citel.reply(`*Pickup Line:* ${pickupLine}`);
  } catch (error) {
    citel.reply(`Error: ${error.message || error}`);
  }
});
//--------------------COPY AND GIVE  CREDIT------------
cmd({
  pattern: 'bible',
  desc: 'Get a Bible verse',
  category: "RELIGION",
  react: '🧎‍♂️',
},
async (Void, citel, text) => {
  let verseReference = text.trim();

  if (!verseReference) {
    return citel.reply('Please provide a valid Bible verse reference.');
  }

  try {
    let response = await axios.get(`https://bible-api.com/${encodeURIComponent(verseReference)}`);
    let data = response.data;

    if (!data || !data.verses || data.verses.length === 0) {
      return citel.reply('Unable to retrieve the Bible verse. Please check the reference and try again.');
    }

    let verseText = data.verses[0].text;
    let translationName = data.translation_name;

    return citel.reply(`*${verseReference} (${translationName}):*\n${verseText}`);
  } catch (error) {
    citel.reply(`Error: ${error.message || error}`);
  }
});
//-----------------COPY AND GIVE CREDIT------------------//
cmd({
  pattern: 'insult',
  desc: 'Get a random insult',
  category: "fun",
  react: '🤥',
},
async (Void, citel) => {
  try {
    let response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    let data = response.data;

    if (!data || !data.insult) {
      return citel.reply('Unable to retrieve an insult. Please try again later.');
    }

    let insult = data.insult;
    return citel.reply(`*Insult:* ${insult}`);
  } catch (error) {
    citel.reply(`Error: ${error.message || error}`);
  }
});
//-----------------------------------_---------------------#

cmd({
  pattern: "wouldyourather",
  alias: "wyr",
  desc: "Would You Rather question",
  category: "fun",
  filename: __filename
},
async (Void, citel, match) => {
  try {
    let apiUrl = 'https://api.popcat.xyz/wyr';
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data && data.ops1 && data.ops2) {
      let { ops1, ops2 } = data;
      let imageUrl = 'https://telegra.ph/file/b7861f3b2d9136fb78295.jpg';

      await Void.sendMessage(citel.chat, {
        text: `*Would You Rather:*\n1. ${ops1}\n2. ${ops2}`,
        contextInfo: {
          externalAdReply: {
            title: "Would You Rather",
            body: 'Powered by IZUKU-MD',
            renderLargerThumbnail: true,
            thumbnail: { url: imageUrl },
            mediaType: 1,
            mediaUrl: '',
            sourceUrl: ''
          }
        }
      });
    } else {
      await Void.sendMessage(citel.chat, { text: '*No question found.*', options: { isBold: true } });
    }
  } catch (error) {
    await Void.sendMessage(citel.chat, { text: `*An error occurred:* ${error.message || error}`, options: { isBold: true } });
  }
});
