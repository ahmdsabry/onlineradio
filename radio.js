class PLAYER {
 constructor() {
var height=document.getElementById("player");
height.style.height=screen.height + "px";
if (screen.width<500) {
    height.style.width=screen.width + "px";
}
var height1=document.getElementById("content");
height1.style.height=screen.height-300 + "px";

 }
}
onload=new PLAYER();

class Audios {
    constructor() {
        this.audiofile=document.getElementById("audiofile");
        this.titlefile=document.getElementById("titlefile");
        this.plays=document.getElementById("plays");
        this.isplayed;
        this.plays.addEventListener("click",()=> {
this.playpause();
        });
this.playpause();

this.names_songs=[];
this.names_songs[0]="Song1 'my life is going on'";
this.names_songs[1]="Song2 'friday im in love'";
this.names_songs[2]="Song3 'bella ciao'";
this.source_audio=[];
this.source_audio[0]="case.mp4";
this.source_audio[1]="lacase1.mp4";
this.source_audio[2]="bella ciao.mp4";
this.server=0;
this.setrecources();

document.getElementById("next").addEventListener("click",()=> {
if (this.server<this.source_audio.length-1) {
    ++this.server;
this.isplayed=false;
}
else {
    this.server=0;
    this.isplayed=false;
}
this.setrecources();
});

document.getElementById("backs").addEventListener("click",()=> {
if (this.server>0) {
    --this.server;
this.isplayed=false;
}
else {
    this.server=this.source_audio.length-1;
    this.isplayed=false;
}
this.setrecources();
});
}
setrecources() {
this.audiofile.src=this.source_audio[this.server];
this.titlefile.innerHTML=this.names_songs[this.server];
this.playpause();

}


playpause() {
    if (this.isplayed==false) {
        this.plays.src="pause.png";
        this.audiofile.play();
        this.isplayed=true;
    }
    else {
        this.plays.src="play.png";
        this.audiofile.pause();

        this.isplayed=false;
    }

    }
}

onload=new Audios();