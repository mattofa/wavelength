    setTimeout(replacePosts, 2000);
    function replacePosts () {
    	//container.removeChild(container.childNodes[0]);
    	container.replaceChild(loadPost(),container.childNodes[0])
    	container.replaceChild(loadPost(),container.childNodes[1])
    }