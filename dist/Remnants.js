const apRemnants = new APlayer({
    container: document.getElementById('aplayerRemnants'),
    fixed: false,
    listFolded: false,
    mutex: true,
    listMaxHeight: 90,
    autoplay: true,
    audio: [
	{
        name: "Remnants",
        artist: 'Kazukii',        
        url: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/Remnants.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/CenYee/House/articleimage/Remnants.jpg'
      }
      ]
});