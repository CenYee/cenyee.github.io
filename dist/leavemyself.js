const apleavemyself = new APlayer({
    container: document.getElementById('aplayerleavemyself'),
    fixed: false,
    listFolded: false,
    listMaxHeight: 90,
    autoplay: false,
    lrcType: 3,
    audio: [
	{
        name: "把悲伤留给自己",
        artist: '左小祖咒 / 钟欣潼',        
        url: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/leavemyself.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/CenYee/House/articleimage/leavemyself.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/CenYee/House/files/leavemyself.lrc'
      }
      ]
});