function watchform() {
	let sub = document.getElementById("submit");
	
	sub.addEventListener( "click" , ( event ) => {
		event.preventDefault();
		let name = document.getElementById("name");
		let comment = document.getElementById("userComment");
		let hc = document.getElementsByClassName("secctionComments");
		
		if (name.value == "" || comment.value == "")
		{
			name.value = "vacio";
		}
		else{
			hc.innerHTML = `<label value= ` + name.value + " " + comment.value + `> </label>`;
		}
	});
	
}

watchform();