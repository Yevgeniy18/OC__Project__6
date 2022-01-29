function keyBoardHandler(){

    document.onkeydown = function(e){
        var evt = e || window.event
        var keyCode = evt.keyCode

        console.log(keyCode + " was pressed")
    }


}