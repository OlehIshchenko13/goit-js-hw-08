import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const load = key => {
	try {
	  return localStorage.getItem(key);
	} catch (error) {
	  console.error('Get state error: ', error.message);
	}
  };

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(data) {
       localStorage.setItem("videoplayer-current-time",data.seconds)
    },1000));
	const currentTime = Number(load("videoplayer-current-time"))

    player.setCurrentTime(currentTime).then(function (seconds) {})
	