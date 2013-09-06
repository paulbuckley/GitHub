var app = function(){	
	
    var globals = {

    }
	
 	function init() {
	
		
		
		$.ui.launch();
		
		getData();

    }

	function setEventListeners(){
		
		
	}
	

	function getData(){
		console.log('data called');
		var data = [{"dblOfferPrice":1.97,"dblOriginalPrice":0,"intAvailableFromUnix":1376611200,"intAvailableToUnix":1378425659,"intDiscountPercentage":0,"intLeadDefinitionId":10304,"intPurchasedCount":177,"strDealDescriptionEmail":"Since Apple decided to scrap their old 30-pin connectors, the Lightning cable has stepped up to the mark, re-juicing tired gadgets and transferring files like a pro. This cable is compatible with a range of new Apple products","strDealEmailTitle":"A 1m or 3m Lightning Cable for the iPhone 5","strDealName":"3m Lightning Cable for iPhone 5 ","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1644/headline-5.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1644/List-5.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":0.9,"dblOriginalPrice":0,"intAvailableFromUnix":1377820800,"intAvailableToUnix":1378339259,"intDiscountPercentage":0,"intLeadDefinitionId":11076,"intPurchasedCount":30,"strDealDescriptionEmail":"If you have an iPhone 3G, 3S, 4, 4S or one of the slightly older iPods or iPads, this adaptor will allow you to use a micro USB charger to charge your device! Itâ€™s so small that you can keep it in your bag so whenever you have a charging emergen","strDealEmailTitle":"Micro USB to 30 Pin Data Sync Charger Adaptor","strDealName":"Micro USB to 30 Pin Data Sync Charger Adaptor","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1994/Headline-8630.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1994/List-8630.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":4.99,"dblOriginalPrice":9.98,"intAvailableFromUnix":1377734400,"intAvailableToUnix":1378684800,"intDiscountPercentage":50,"intLeadDefinitionId":11086,"intPurchasedCount":81,"strDealDescriptionEmail":"Ever seen your wallet or phone go flying after braking suddenly or swerving a sharp corner? Belongings have a tendency to jump off the passenger seat and hide themselves while you're driving, which is why we're are stamping out this sticky situa","strDealEmailTitle":"4 In-Car Super Holder Grips - Delivery Included","strDealName":"4 In-Car Super Holder Grips to Hold Coins, Phones and More","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/552/headline-sticky.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/552/List-sticky.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":5.99,"dblOriginalPrice":12.99,"intAvailableFromUnix":1378166400,"intAvailableToUnix":1378684859,"intDiscountPercentage":54,"intLeadDefinitionId":11400,"intPurchasedCount":16,"strDealDescriptionEmail":"Remember when everyone thought the world was flat? Of course not, that was centuries ago! We now live in the age of the iPhone but how can we continue to evolve if weâ€™re continually tangled up in wires? ","strDealEmailTitle":"Coloured Anti-Tangle Charging Cable for iPhone 4 or iPhone 5 â€“ Delivery Included","strDealName":"Coloured Anti-Tangle Charging Cable for iPhone 4 or iPhone 5","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1837/Headline2-8774.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1837/List-purp.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":1.49,"dblOriginalPrice":0,"intAvailableFromUnix":1378166400,"intAvailableToUnix":1378684800,"intDiscountPercentage":0,"intLeadDefinitionId":11075,"intPurchasedCount":5,"strDealDescriptionEmail":"So a lot of companies have now started using micro USB or just USB to charge their devices. Obviously Apple is not in this list of companies, having a somewhat endless compulsion to limit their customers to Apple only products.","strDealEmailTitle":"Micro USB to 8 Pin Adaptor for iPhone 5","strDealName":"Micro USB to 8 Pin Adaptor for iPhone 5","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1994/Headline-8632.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1994/List-8632.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":3.99,"dblOriginalPrice":0,"intAvailableFromUnix":1377820800,"intAvailableToUnix":1378339259,"intDiscountPercentage":0,"intLeadDefinitionId":11074,"intPurchasedCount":4,"strDealDescriptionEmail":"We know that Apple now charge their latest devices via lightening charger but what about all those people who had awesome iPhones already and didnâ€™t feel the crushing, propaganda driven need to get the new one? We still support you guys so hereâ€™","strDealEmailTitle":"2 in 1 USB Data Sync and Charging Cable for iPhone","strDealName":"2 in 1 USB Data Sync and Charging Cable for iPhone","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1994/Headline-8628.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1994/List-8628.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":4.99,"dblOriginalPrice":12.99,"intAvailableFromUnix":1378080000,"intAvailableToUnix":1378512000,"intDiscountPercentage":62,"intLeadDefinitionId":10356,"intPurchasedCount":61,"strDealDescriptionEmail":"Technology is taking over the world and the world is largely water, and what isnâ€™t water is essentially dirt. With this sealed smartphone case you no longer need to worry about splashing it at the beach or getting it grubby","strDealEmailTitle":"Case For Any Smartphone","strDealName":"Ccase for any smartphone","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1264/Headline1-case.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1264/List-case.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":14.99,"dblOriginalPrice":29.99,"intAvailableFromUnix":1378080000,"intAvailableToUnix":1378512000,"intDiscountPercentage":50,"intLeadDefinitionId":11194,"intPurchasedCount":42,"strDealDescriptionEmail":"Since weâ€™ve become so used to having our phones with us every hour of the day, it feel as if weâ€™ve each grown an extra limb and when weâ€™re running low on power, it feels like the word is ending! Ensure your iPhone 5 is always juiced with this Ch","strDealEmailTitle":"iPhone 5 Charger Battery Case","strDealName":"iPhone 5 Charger Battery Case","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/1493/Headline-cha.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/1493/List-cha.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":9.5,"dblOriginalPrice":29.99,"intAvailableFromUnix":1377648000,"intAvailableToUnix":1378339259,"intDiscountPercentage":68,"intLeadDefinitionId":11114,"intPurchasedCount":1581,"strDealDescriptionEmail":"All good things come in small packages, and you may be surprised to find that the expandable hose coils up impressively compactly. But stretch it out and youâ€™ve got a super long, lightweight hose that wonâ€™t be a drag ","strDealEmailTitle":"25ft or 50ft Lightweight Expandable Hose â€“ No Kinks!","strDealName":"25ft Expandable Hose","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/573/Headline-hose.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/573/List-hose.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"},{"dblOfferPrice":0.99,"dblOriginalPrice":25.99,"intAvailableFromUnix":1377820800,"intAvailableToUnix":1378339200,"intDiscountPercentage":96,"intLeadDefinitionId":11235,"intPurchasedCount":480,"strDealDescriptionEmail":"You canâ€™t go wrong buying your dÃ©cor from certain Swedish home furnishing storesâ€¦ But if you fancy making things really personal, create your own interior dÃ©cor yourself! Approximately A4 in size, this customised canvas is a great way to show","strDealEmailTitle":"8 x 12\" Canvas Print, Personalised with Any Picture You Like","strDealName":"8 x 12 Inch Personalised Canvas Print","strImageBigUrl":"http://static.mightydeals.co.uk/images/products/835/headline-2.jpg","strImageListUrl":"http://static.mightydeals.co.uk/images/products/835/List-2.jpg","strImageThumbnailUrl":"http://static.mightydeals.co.uk"}];
		


		loadList(data);

		// var strLeadSellerId;
		// 	var strWSPassword;
		// 	var strPostcodeRegionId;
		// 	var strProductCategoryId;
		// 	var strBestSellers;
		// 	var strNumberOfItems;
		// 	var strPage;
		// 
		// 	$.ajax({
		// 	    type:"GET",
		//  url:"http://webservice.mightydeals.co.uk/mobile/MobileDeal_V1.asmx/GetOnlineDeals?strLeadSellerId=550201736&strWSPassword=08E48E65&strPostcodeRegionId=0&strProductCategoryId=0&strBestSellers=0&strNumberOfItems=20&strPage=0",
		// 	    data:{'foo':'bar'},
		// 	crossDomain: true,
		// 	    success:function(data){
		// 			console.log(data);
		// 		}
		// 	});

		// $.jsonP({			url:'http://webservice.mightydeals.co.uk/mobile/MobileDeal_V1.asmx/GetOnlineDeals?strLeadSellerId=550201736&strWSPassword=08E48E65&strPostcodeRegionId=0&strProductCategoryId=0&strBestSellers=0&strNumberOfItems=20&strPage=0',
		// 			async: true,
		// 			success:function(data){
		// 				console.log(data);
		// 			},
		// 			jsonp: 'jsonp'
		// 		});

	}

	function loadList(data){
		
			$('#data_list').empty();
			// Loop through items and create list
			$.each(data, function(index, data){	
	               	var html = '';
					var itemDescription = '<span class="itemDesc">' + data.strDealName + '</span>';
					// html += '<li id="' + data.strDealName + '"><a href="#"><img src="./img/products/' + index + '.jpg">' + itemDescription + '</a></li>';
	               	html += '<li id="' + data.strDealName + '"><a href="#"><img src="' + data.strImageListUrl + '">' + data.strImageListUrl + ' ' + itemDescription + '</a></li>';
	               	$('#data_list').append(html); //Append list to container
	         });

	}
		
	
	return {
		init: init,
		setEventListeners: setEventListeners,
		getData: getData,
		loadList: loadList
	
    }
	
}();

$(document).ready(function(){
    app.init();
});

