$(document).ready(function(){
	var container = document.querySelector("#pics")
	var cardTemplate = ""
	var matchedArray = []
	var cardsArray = [
	{pic:"https://image.flaticon.com/icons/svg/235/235405.svg"}, { pic: "https://image.flaticon.com/icons/svg/235/235349.svg"}, {pic:"https://image.flaticon.com/icons/svg/1303/1303576.svg"}, {pic:"https://image.flaticon.com/icons/svg/235/235349.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235405.svg"},{pic:"https://image.flaticon.com/icons/svg/1303/1303576.svg"},{pic:"https://image.flaticon.com/icons/svg/578/578372.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235361.svg"},{pic:"https://image.flaticon.com/icons/svg/578/578372.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235361.svg"},{pic:"https://image.flaticon.com/icons/svg/1198/1198062.svg"},{pic:"https://image.flaticon.com/icons/svg/1363/1363376.svg"},{pic:"https://image.flaticon.com/icons/svg/1198/1198062.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235396.svg"},{pic:"https://image.flaticon.com/icons/png/512/523/523445.png"},{pic:"https://image.flaticon.com/icons/svg/235/235396.svg"},{pic:"https://image.flaticon.com/icons/svg/1363/1363376.svg"},{pic:"https://image.flaticon.com/icons/png/512/523/523445.png"}].sort( ()=> Math.random() - 0.5 );


	

	cardsArray.forEach(function(card){
	
		cardTemplate += `
		<div class='card'>
			<div class="frontcolor front">
			</div>
			<div class="randomPic back">
				<img src="${card.pic}"/>
			</div>
		</div>
		`	
	})

	container.innerHTML = cardTemplate


	$("#startButton").on('click', function(){
		$('#startScreen').hide();
		$('.card').show();
		$('#attempts').show();

//Timer code isn't working

		// var second = 0, minute = 0;
		// var timer = document.querySelector("#timer");
		// var interval;
		
		// interval = setInterval(function(){
	        
	 //        timer.innerHTML = minute+"mins "+second+"secs";
	        
	 //        second++;
	        
	 //        if(second == 60){
	 //            minute++;
	 //            second = 0;
	 //        }

	 //        if(minute == 10){
	 //        	$(".card").hide()
		// 		$("#loseScreen").show()
		// 		timer.innerHTML = "Time ran out, you lose!"
	 //        }
	 //    })
	})



	var attempt = 9

	var attemptIn = document.querySelector("#lifecounter")

		attemptIn.innerHTML = attempt

	$(".card").flip({
			
			trigger:'manual'

		});
	

	var compareArray = []

	if(!$(".card").hasClass('flipped') && !$(".card").hasClass('match')){
		
		$(".card").on('click', function(e){
		
			$(this).flip(true)
			
			compareArray.push($(this).html())

			$(this).addClass('flipped')

			var counter = compareArray.length

			if(counter === 2){

				if(compareArray[0] ===  compareArray[1]){

				console.log('match')
				matchedArray.push($(compareArray[0]), $(compareArray[1]));
				$(".flipped").addClass('match')
				$(".match").removeClass('flipped')
				$(".match").off('.flip')

				if(matchedArray.length === 18){
					$(".card").hide()
					$("#attempts").hide()
					$("#winScreen").show()
					$('.refresh').on('click', function(){
							location.reload();
						})
					clearInterval(interval)
				}
				compareArray = []

				} else {
					attempt--

					var lives = document.querySelector("#lifecounter")

					lives.innerHTML = attempt

					setTimeout(function(){
						console.log('no match')

					$(".flipped").flip(false)

					$('.flipped').removeClass("flipped")

					if( attempt === 8){
							$("#lifebar").css("width", "325")
					} else if (attempt === 7){
						$("#lifebar").css("width", "284")
					} else if (attempt === 6){
						$("#lifebar").css("width", "244")
					} else if (attempt === 5){
						$("#lifebar").css("width", "204")
					} else if (attempt === 4){
						$("#lifebar").css("width", "165")
					} else if (attempt === 3){
						$("#lifebar").css("width", "124")
					} else if (attempt === 2){
						$("#lifebar").css("width", "85")
					} else if (attempt === 1){
						$("#lifebar").css("width", "44")
					} else if (attempt === 0){
						$("#lifebar").css("width","5")
						$('#startScreen').hide();
						$('#pics').hide();
						$('#attempts').hide();
						$('#loseScreen').show();
						$('.refresh').on('click', function(){
							location.reload();
						});

					}
				}, 1000)

				compareArray = []
					

				}
			}
		})
	}
})






