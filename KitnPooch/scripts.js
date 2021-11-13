function updateWishlist() { // loads the text area with the wish list items
	if (localStorage.getItem('wishes') != null) {
		document.getElementById('wishlist').innerHTML = JSON.parse(localStorage.getItem('wishes'));
	}
}

function addToWishlist() {
	// if there are no wishes, set the first wish
	if (localStorage.getItem('wishes') == null) {
		var firstWish = document.getElementById('wishitem').value;
		localStorage.setItem('wishes', '[\"' + firstWish + '\"]');
	} else { // or if at least 1 wish already exists, add to the wishes
		var newWish = '\n' + document.getElementById('wishitem').value;
		var oldWishes = JSON.parse(localStorage.getItem('wishes'));
		oldWishes.push(newWish);
		
		localStorage.setItem('wishes', JSON.stringify(oldWishes));
	}
	
	//location.reload();
	
	updateWishlist(); //loads the wish list again
}

function removeFromList() {
	if (localStorage.getItem('wishes') != null) {
		var wishes = JSON.parse(localStorage.getItem('wishes'));
		wishes.pop();
		
		localStorage.setItem('wishes', JSON.stringify(wishes));
	}
	
	updateWishlist(); //loads the wish list again
}

function clearWishlist() {
	if (localStorage.getItem('wishes') != null) {
		document.getElementById('wishlist').value = "";
		localStorage.removeItem('wishes');
	}
	
	document.getElementById('wishitem').value = "";
	
	//location.reload();
	
	updateWishlist(); //loads the wish list again
}