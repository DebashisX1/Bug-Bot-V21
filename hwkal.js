	// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = ''
global.ig = 'Debashis_12321' // ubah aja
global.ytname = "No channel"
global.socialm = "Github: Debashis121212"
global.location = "Nalhati, Birbhum, WB, India"
global.email = 'phoenixn.2k5@gmail.com' //serah
global.region = 'India' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Debashis' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['919339619072','14437095780','15203694731','15203570258','12249933352'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.autoRecording = false //auto recording 
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story
//====================BY Hw Mods=============================//

global.botname = 'DD-Bug-bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Bot' // ubah aja ini nama sticker
global.author = 'Sticker' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '📌' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
