const apRemnants = new APlayer({
    container: document.getElementById('aplayerRemnants'),
    fixed: false,
    listFolded: false,
    listMaxHeight: 90,
    autoplay: false,
    lrcType: 3,
    audio: [
	{
        name: "Remnants",
        artist: 'Kazukii',        
        url: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/Remnants.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/CenYee/House/articleimage/Remnants.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/Remnants.lrc'
      }
      ]
});