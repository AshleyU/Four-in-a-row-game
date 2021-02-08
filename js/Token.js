class Token {
	constructor(index, owner) {
		this.owner = owner;
		this.id = `token-${index}-${owner.id}`;
		this.dropped = false;
	}

	/** 
	 * Gets left offset of html element.
	 * @return  {number}   Left offset of token object's htmlToken.
	 */
	 get offsetLeft() {
	 	return this.htmlToken.offsetLeft;
	 }

	/**
	*	Draws new HTML Token.
	*/
	drawHTMLToken(){
		const token = document.createElement('div');
		document.getElementById('game-board-underlay').appendChild(token);
		token.setAttribute('id', this.id);
		token.setAttribute('class', 'token');
		token.style.backgroundColor = this.owner.color;
	}
}