const audioFiles = {
  "Yeat - Out thë way": "./assets/Yeat-Out-th-way-(HiphopKit.com).mp3",
  "Metro Boomin - Space Cadet": "./assets/Metro Boomin Space Cadet Ft Gunna.mp3",
  "Money Man - 24 feat Lil Baby": "./assets/Money-Man---24-(feat.-Lil-Baby).mp3",
  "Gunna - Who You Foolin": "./assets/Gunna Who You Foolin.mp3",
  "Lil Uzi Vert - Just Wanna Rock": "./assets/Lil-Uzi-Vert Just Wanna Rock.mp3",
};

const app = Vue.createApp({
  data() {
    return {
      current: {},
      index: 0,
      songs: Object.entries(audioFiles).map(([title, src]) => ({ title, artist: "", src })),
      player: new Audio(),
      isPlaying: false,
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }

      this.player.play();
      this.isPlaying = true;

      this.player.addEventListener("ended", () => {
        this.index++;

        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }

        this.current = this.songs[this.index];
        this.play(this.current);
      });
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;

      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;

      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
});

app.mount("#app");
