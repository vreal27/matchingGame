$(document).ready(function(){
	var container = document.querySelector("#pics")
	var cardTemplate = ""
	var cardsArray = [
	{pic:"https://image.flaticon.com/icons/svg/235/235405.svg"}, { pic: "https://image.flaticon.com/icons/svg/235/235349.svg"}, {pic:"https://image.flaticon.com/icons/svg/1303/1303576.svg"}, {pic:"https://image.flaticon.com/icons/svg/235/235349.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235405.svg"},{pic:"https://image.flaticon.com/icons/svg/1303/1303576.svg"},{pic:"https://image.flaticon.com/icons/svg/578/578372.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235361.svg"},{pic:"https://image.flaticon.com/icons/svg/578/578372.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235361.svg"},{pic:"https://image.flaticon.com/icons/svg/1198/1198062.svg"},{pic:"https://image.flaticon.com/icons/svg/1363/1363376.svg"},{pic:"https://image.flaticon.com/icons/svg/1198/1198062.svg"},{pic:"https://image.flaticon.com/icons/svg/235/235396.svg"},{pic:"https://image.flaticon.com/icons/png/512/523/523445.png"},{pic:"https://image.flaticon.com/icons/svg/235/235396.svg"},{pic:"https://image.flaticon.com/icons/svg/1363/1363376.svg"},{pic:"https://image.flaticon.com/icons/png/512/523/523445.png"}]

	cardsArray.forEach(function(card){
	
		cardTemplate += `
		<div class="randomPic">
			<p><img src="${card.pic}"/></p>
		</div>

		`	
	})

container.innerHTML = cardTemplate
})




// picturesTemplates 
// 	${pictures.name}