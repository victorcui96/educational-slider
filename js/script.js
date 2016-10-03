$(document).ready(function() {
    var slider = $('.my-slider').unslider({
        // active
        animation: 'horizontal',
        arrows: {
            prev: '<i class="fa fa-arrow-circle-left fa-4x unslider-arrow prev" aria-hidden="true"></i>',
            next: '<i class="fa fa-arrow-circle-right fa-4x unslider-arrow next aria-hidden="true"></i>'
        },
        complete: function(el) {
            if (sliderData) {
                sliderData.items.removeClass('active');
                $(sliderData.items[sliderData.current]).addClass('active');
            }
        },
        infinite: true,
        nav: function(index, label) {
            //  $(this) is the current index slide
            //  label is the current label
            //  index is the slide index, starting at 0


            //  Only show the number
            return index + 1;
        }
    });

    var numAudio = 0;
    var pauseAudio = false;

    //  Listen to slide changes
    slider.on('unslider.change', function(event, index, slide) {
        // var activeSlide = $('.unslider-active');
        // var test = activeSlide.find('.image-description');
        // alert(test.children('h3').text());
        numAudio = 0;
       
    });

    $('.audio-controller').on('click', function() {
        // var activeSlide = $('li').not('.unslider-active');
        // var activeSlide = $('li:not([class])');
        var audioController = $(this);
        
        if (numAudio === 0) {
            var audioElement = document.createElement('audio');
            if (audioController.hasClass('twist-and-shout')) {
                audioElement.setAttribute('src', 'audio/twist-and-shout.mp3');
            } else if (audioController.hasClass('misery')) {
                audioElement.setAttribute('src', 'audio/misery.mp3');
            }
            audioElement.className += 'audio-element';
            audioElement.setAttribute('autoplay', 'autoplay');
            $(this).append(audioElement);
            numAudio++;

        }
        console.log(audioElement);
        if (audioElement == undefined) {
            audioElement = $('.audio-element')[0];
        }
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
        // var activeAudioController = $('#audio-player');
        // if (activeAudioController.hasClass('twist-and-shout')) {
        //     console.log('twist');
        // } else if (activeAudioController.hasClass('misery')) {
        //     console.log('misery');
        // }
        // if (activeAudioController.paused) {
        //     activeAudioController.play();
        // } else {
        //     activeAudioController.play();
        //     activeAudioController.currentTime = 0;
        // }
        // console.log(activeSlide);
        // var test = activeSlide.find('.image-description');
        // alert(test.children('h3').text());
    });
    audioPlayer = document.getElementById('audio');

});
