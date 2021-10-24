const apConsolationofPhilosophy = new APlayer({
    container: document.getElementById('aplayerConsolationofPhilosophy'),
    fixed: false,
    listFolded: false,
    listMaxHeight: 90,
    autoplay: false,
    lrcType: 1,
    audio: [
	{
        name: "哲学的安慰",
        artist: '倪湛舸',        
        url: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/TheConsolationofPhilosophy.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/CenYee/House/articleimage/TheConsolationofPhilosophy.png',
        lrc: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/TheConsolationofPhilosophy.lrc'
      }
      ]
});