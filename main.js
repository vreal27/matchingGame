$(document).ready(function(){
	var container = document.querySelector("#pics")
	var cardTemplate = ""
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
	})

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

				$(".flipped").addClass('match')
				$(".match").removeClass('flipped')
				$(".match").off('.flip')
				console.log(compareArray)
				compareArray = []
				console.log(compareArray)
				} else {

					setTimeout(function(){
						console.log('no match')

					$(".flipped").flip(false)

					$('.flipped').removeClass("flipped")

				}, 1000)

				compareArray = []
					

				}
			}
		})
	}
})






