module.exports.run = async (client, message) => {


  const radio = {
        "pop": "https://ic.imusicaradios.com.br/brasil.stream.http",
        "pp": "http://ice.paineldj3.com.br:8004/stream",
        "sertanejo": "http://live.hunteunrfm.com/cotry",
        "skyrock": "http://icecast.skyrock.net/s/natio_mp3_128k?tvr_name=tunein16&tvr_section1=128mp3",
        "rfm": "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3",
        "fun": "http://streaming.radio.funradio.fr/fun-1-44-128",
        "virgin": "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3",
        "funk": "http://paineldj4.com.br:8306/",
        "teste": "https://live.hunter.fm/pop2k" 
  }

    if (!message.member.voiceChannel) return message.channel.send(`Você deve estar conectado em uma sala de estar!`)

    if(!message.member.voiceChannel.joinable) return message.channel.send(`Eu não tenho permissão para entrar nesta sala!`);

    if(!message.member.voiceChannel.speakable) return message.channel.send(`Eu não tenho permissão para falar nesta sala!`);

    let args = message.content.split(" ").slice(1).join(" ").toLowerCase();

    if (!args) return message.channel.send('Por favor, especifique um nome de rádio, aqui está a lista de rádios disponíveis:\n • **nrj,**\n • **rtl2,**\n • **skyrock,**\n • **rfm,**\n • **radio,**\n • **virgin.**')

    if (!radio[args]) return message.channel.send('Rádio inválido, aqui está a lista de rádios disponíveis:\n • **nrj,**\n • **rtl2,**\n • **skyrock,**\n • **rfm,**\n • **radio,**\n • **virgin.**')
      
    message.member.voiceChannel.join().then(connection => {

     message.guild.voiceConnection.playStream(radio[args])
      
            message.channel.send(`A radio **${args}** começou!`);
        });

}
