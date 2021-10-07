const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    listFolded: false,
    listMaxHeight: 90,
    autoplay: true,
    lrcType: 3,
    audio: [
	{
        name: "Remnants (Kazukii Remix)",
        artist: 'Kazukii',        
        url: 'https://cdn.jsdelivr.net/gh/CemseLee/House/Remnants%20(Kazukii%20Remix).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/CemseLee/House/avatar.png',
        lrc: 'https://cdn.jsdelivr.net/gh/CemseLee/House/Remnants.lrc'
      }
      ]
});