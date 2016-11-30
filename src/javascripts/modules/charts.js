// import raf from 'lib/raf';

const initChart = function() {
	const circleSet = document.querySelectorAll('.js_circle');
	const chartSet = document.querySelectorAll('.js_bars');


	const toggleColor = function(toggle) {
		if (toggle === 0) {
			let color = '#3B488C';
			return color;
		} else {
			let color = '#00ACAD';
			return color;
		}
	}

	const retinaResize = function(canvas, ctx, canvasWidth, canvasHeight) {
		if (window.devicePixelRatio > 1) {
			canvas.width = canvasWidth * window.devicePixelRatio;
			canvas.height = canvasHeight * window.devicePixelRatio;
			canvas.setAttribute("style", `width:${canvasWidth}px;height:${canvasHeight}px`);
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		}
	}

	// For Circle Charts
	if (circleSet) {
		//Will Need for More than one!
		for (let i = 0; i < circleSet.length; i++) {
			// get Params for Circle
			let percent = circleSet[i].dataset.percent;
			let circleSize = circleSet[i].offsetWidth;
			let circleRad = circleSize / 2;
			let circleLineWidth = circleRad / 4;

			// Create Canvas
			let canvas = document.createElement('canvas');

			// Get Chart Metrics, Dictated at charts.scss
			canvas.width = circleSize;
			canvas.height = circleSize;
			circleSet[i].appendChild(canvas);

			// ctx is Canvas Context
			let ctx = canvas.getContext('2d');

			// For Retina
			retinaResize(canvas, ctx, canvas.width, canvas.height);

			// Draw Underlying Circle
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.arc(circleRad, circleRad, circleRad - circleLineWidth, 0, 2 * Math.PI);
			ctx.strokeStyle = '#00ACAD';
			ctx.lineWidth = circleLineWidth;
			ctx.stroke();
			ctx.closePath();

			// Draw Circle Percentage
			ctx.beginPath();
			let startingPoint = Math.PI / 2;
			let percentPoint = percent / 100;
			let step = (Math.PI * percentPoint) * 2;
			ctx.arc(circleRad, circleRad, circleRad - circleLineWidth, startingPoint, startingPoint + step, false);
			ctx.strokeStyle = '#F28700';
			ctx.lineWidth = circleLineWidth;
			ctx.stroke();

			// Add Percent
			let percentText = document.createElement('div');
			percentText.className = 'circle__text';
			percentText.innerHTML = `${percent}<sup>%</sup>`;
			circleSet[i].appendChild(percentText);
		}
		// Add Slider
	}

	// For Bars
	if (chartSet) {
		//Will Need for More than one!
		for (let i = 0; i < chartSet.length; i++) {
			// get Params for bars
			// barset String to Object
			let barSet = chartSet[i].dataset.bars.split(',');
			let barSetLength = barSet.length;

			// Get Chart Metrics, Dictated at charts.scss
			let chartWidth = chartSet[i].offsetWidth;
			let chartHeight = chartSet[i].offsetHeight;

			// Create Canvas
			let canvas = document.createElement('canvas');

			canvas.width = chartWidth;
			canvas.height = chartHeight;
			chartSet[i].appendChild(canvas);

			// ctx is Canvas Context
			let ctx = canvas.getContext('2d');

			// For Retina
			retinaResize(canvas, ctx, canvas.width, canvas.height);

			// Draw Underlying bar
			for (let i = 0; i < barSet.length; i++) {
				let barDatum = barSet[i] / 100;

				// canvas width / number of bars
				let blockWidth = parseInt(chartWidth / barSetLength);
				let blockHeight = parseInt(barDatum * chartHeight);

				let blockX = blockWidth * i;
				let blockY = chartHeight - blockHeight;

				ctx.fillStyle = toggleColor(i % 2);
				ctx.fillRect(blockX, blockY, blockWidth, blockHeight);
				ctx.fillStyle = 'white'
				ctx.font = '16px sans-serif';
				
				// Place the font 20px below top of bar
				let fontY = blockY + 20;

				// If the bar is too small (blockY), place it above
				if (barSet[i] <= 15) {
					fontY = blockY - 10;
				}
				
				ctx.fillText(barSet[i], blockX + (blockWidth / 2) - 8, fontY);
			}
		}
	}

	var cardSlider = document.querySelector('.chartSlider');
	if (cardSlider.childElementCount > 1) {
		$('.chartSlider').lightSlider({
			item: 1,
			loop: false,
			slideMove: 1,
			pager: true,
			easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
			speed: 600
		});
	}
};
document.addEventListener('DOMContentLoaded', initChart);
