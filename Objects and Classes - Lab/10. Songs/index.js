function ExtractAndPrintSongs(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  const songsCount = input.shift();
  const typeList = input.pop();
  const songsArray = new Array();

  for (const song of input) {
    let [type, name, time] = song.split("_");
    songsArray.push(new Song(type, name, time));
  }

  if (typeList === "all") {
    songsArray.forEach((s) => {
      console.log(s.name);
    });
  } else {
    songsArray
      .filter((s) => s.type === typeList)
      .forEach((s) => {
        console.log(s.name);
      });
  }
}

ExtractAndPrintSongs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
