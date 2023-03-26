Vue.createApp({
  data() {
    return {
      current: {},
      index: 0,
      songs: [
        {
          title: "Out thë way (Directed by Cole Bennett)",
          artist: "Yeat",
          src: import("./assets/Yeat-Out thë way(Directed by Cole Bennett).mp3"),
        },
        {
          title: "Poppin(Directed by Cole Bennett)",
          artist: "Yeat",
          src: import("./assets/Poppin(Directed by Cole Bennett).mp3"),
        },
        {
          title: "One Dance Ft Wizkid",
          artist: "Drake",
          src: import("./assets/Drake-One Dance Ft Wizkid.mp3"),
        },
        {
          title: "Erase Your Social",
          artist: "Lil Uzi Vert",
          src: import("./assets/Lil-Uzi-Vert Erase Your Social.mp3"),
        },
        {
          title: "Just Wanna Rock",
          artist: "Lil Uzi Vert",
          src: import("./assets/Lil-Uzi-Vert Just Wanna Rock.mp3")
        },
      ],
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

      this.player.addEventListener(
        "ended",
        function () {
          this.index++;

          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }

          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
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
}).mount("#app");
