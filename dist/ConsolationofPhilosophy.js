const apConsolationofPhilosophy = new APlayer({
    container: document.getElementById('aplayerConsolationofPhilosophy'),
    fixed: false,
    listFolded: false,
    mutex: true,
    listMaxHeight: 90,
    audio: [
	{
        name: "哲学的安慰",
        artist: '倪湛舸',        
        url: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/TheConsolationofPhilosophy.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/CenYee/House/articleimage/TheConsolationofPhilosophy.png'
      }
      ]
});