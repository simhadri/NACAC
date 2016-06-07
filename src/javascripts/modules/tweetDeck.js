// IMPORTS
import TweetParse from 'lib/parse.js';

// FUNCTION
(function() {
    'use strict';
    const parse = new TweetParse;
    let TweetController = 'http://localhost:3000/javascripts/data/twitter-feed.json';
    $.ajax({
        url: TweetController,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let tweetDeck = document.getElementById('tweetDeck');
            for (let i = 0; i < data.length; i++) {
                let tweetText = data[i].text;
                // Clean up tweet, add links
	            tweetText = parse.parseUrl(tweetText);
	            tweetText = parse.parseUsername(tweetText);
	            tweetText = parse.parseHashtag(tweetText);
                tweetDeck.innerHTML = tweetDeck.innerHTML +
                    '<div class="col-sm-4 col-xs-12">' +
                    	'<div class="tweet-wrap">' +
                    		'<div class="tweet">'+ tweetText +'</div>' +
                    			'<div class="tweet-meta">' +
                    			'<a href="http://twitter.com/NACACFairs"><img class="tweet__profile-pic" src="' + data[i].user.profile_image_url +'"></a>' +
                    			'<a href="http://twitter.com/NACACFairs">@NACACFairs</a><br>' +
                    			'<a href="#">'+parse.parseTimeAgo(data[i].utc_offset)+'</a>' +
                    		'</div>' +
                    	'</div>' +
                    '</div>'
                tweetText;
            }
        }
    })
})();
