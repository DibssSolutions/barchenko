const video = $('.js-video');
video.each((i,el) => {
  const parent = $(el);
  const videoContiner = parent.find('video');
  const btn = parent.find('.js-video-play');
  const classPlay = 'is-play';
  const playPause = () => {
    if (videoContiner[0].paused) { 
    	videoContiner[0].play();
    	parent.addClass(classPlay);
    } 
    // else {
    // 	videoContiner[0].pause();
    // 	parent.removeClass(classPlay);
    // }
  };
  btn.on('click', playPause);
});
