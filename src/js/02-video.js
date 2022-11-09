import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player.on('timeupdate', throttle(function (date) {
// 	localStorage.setItem("videoplayer-current-time", date.seconds);
// }, 1000));
// const currentTime = Number(localStorage.getItem("videoplayer-current-time"))

// player.setCurrentTime(currentTime).then(function (seconds) {}).catch(function (error) {
// 	switch (error.name) {
// 		case 'RangeError':
// 			break;
// 		default:	
// 			break;
// 	}
// });
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(data) {
       localStorage.setItem("videoplayer-current-time",data.seconds)
    },1000));
	const currentTime = Number(localStorage.getItem("videoplayer-current-time"))

    player.setCurrentTime(currentTime).then(function(seconds) {}).catch(function(error) {
		switch (error.name) {
			case 'RangeError':
				
				break;
	
			default:
				
				break;
		}
	});;
