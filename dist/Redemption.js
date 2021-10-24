const apRedemption = new APlayer({
    container: document.getElementById('aplayerRedemption'),
    fixed: false,
    listFolded: false,
    listMaxHeight: 90,
    autoplay: false,
    lrcType: 1,
    audio: [
	{
        name: "Redemption",
        artist: 'CHROMA',        
        url: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/RedemptionSong.mka',
        cover: 'https://cdn.jsdelivr.net/gh/CenYee/House/articleimage/RedemptionSong.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/RedemptionSong.lrc'
      }
      ]
});