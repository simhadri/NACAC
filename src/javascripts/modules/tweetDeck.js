// This is dummy Local Data
// will look something like:
// https://api.twitter.com/1.1/statuses/user_timeline.json? <- queries
// screen_name=NACACFairs&count=6
// Note count is completed first, if we filter out replies/rt
// our for loop will have to accomidate for i ... if i > 6 etc
// More info at https://dev.twitter.com/rest/reference/get/statuses/user_timeline

// IMPORTS
import TweetParse from 'lib/tweetParse.js';
import EnvVar from 'lib/envVar.js';

// FUNCTION
(function() {
	const tweetDeck = document.getElementById('tweetDeck');
	if (document.getElementById('tweetDeck')) {
		const handle = tweetDeck.dataset.feed;
		const cleanHandle = handle.replace('@', '');
		const tweetParse = new TweetParse;
		// DEV/PROD consts
		const TweetController = EnvVar({development:`/javascripts/data/twitter-${cleanHandle}.json`,production:`/Static/JS/twitter-${cleanHandle}.json`});
		
		$.ajax({
			url: TweetController,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				for (let i = 0; i < data.length; i++) {
					let tweetText = data[i].text;
					// Clean up tweet, add links
					tweetText = tweetParse.UrlUserHashtag(tweetText);
					tweetDeck.innerHTML = tweetDeck.innerHTML +
						'<div class="col-sm col-xs-12">' +
							'<div class="tweet-wrap">' +
								'<div class="tweet">' + tweetText +
									'<div class="tweet-meta">' +
										'<a href="'+data[i].user.url+'"><img class="tweet__profile-pic" src="' + data[i].user.profile_image_url + '"></a>' +
										'<a href="'+data[i].user.url+'">'+data[i].user.screen_name+'</a><br>' +
										'<a href="#">' + tweetParse.parseTimeAgo(data[i].created_at) + '</a>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>'
				}
			}
		})
	}
})();
