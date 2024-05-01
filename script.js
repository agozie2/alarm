
const alarm = {
         hour: 12,
         minute: 30,
         session: 'am',
         isRing: false,
         songs: 0
}

let songs = ['1.mp3','2.mp3','3.mp3','4.mp3','5.mp3'];

const audio = document.querySelector('audio')

function alarm_time() {
         let date = new Date();
         let hour = date.getHours();
         let minute = date.getMinutes()
         let song =  songs[alarm.songs];
         if (alarm.hour == hour && alarm.minute == minute) {
                  if(alarm.isRing == false){
                           audio.src = `./music/${song}`
                           console.log(audio);
                           audio.autoplay = 'true';
                           audio.play()
                           alarm.isRing = true;
                  }   
         } else {
                  audio.pause()
         }
}

setInterval(alarm_time,1000)