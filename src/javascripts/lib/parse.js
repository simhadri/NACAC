// Tweet Parse!
// http://www.simonwhatley.co.uk/examples/twitter/prototype/

const TweetParse = function() {
	this.parseUrl = function(n_string) {
			return n_string.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
				return url.link(url);
			});
		},
		this.parseUsername = function(n_string) {
			return n_string.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
				let username = u.replace('@', '')
				return u.link('http://twitter.com/' + username);
			});
		},
		this.parseHashtag = function(n_string) {
			return n_string.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
				let tag = t.replace('#', '%23')
				return t.link('https://twitter.com/search?q=' + tag);
			});
		},
		this.parseTimeAgo = function(n_string) {
			let K = function() {
				let a = navigator.userAgent;
				return {
					ie: a.match(/MSIE\s([^;]*)/)
				}
			}();
			let system_date = new Date(Date.parse(n_string));
			let user_date = new Date();
			if (K.ie) {
				system_date = Date.parse(n_string.replace(/( \+)/, ' UTC$1'))
			}
			let diff = Math.floor((user_date - system_date) / 1000);
			if (diff <= 1) {
				return "just now";
			}
			if (diff < 20) {
				return diff + " seconds ago";
			}
			if (diff < 40) {
				return "half a minute ago";
			}
			if (diff < 60) {
				return "less than a minute ago";
			}
			if (diff <= 90) {
				return "one minute ago";
			}
			if (diff <= 3540) {
				return Math.round(diff / 60) + " minutes ago";
			}
			if (diff <= 5400) {
				return "1 hour ago";
			}
			if (diff <= 86400) {
				return Math.round(diff / 3600) + " hours ago";
			}
			if (diff <= 129600) {
				return "1 day ago";
			}
			if (diff < 604800) {
				return Math.round(diff / 86400) + " days ago";
			}
			if (diff <= 777600) {
				return "1 week ago";
			}
			return "on " + system_date;
		}
}
module.exports = TweetParse;
