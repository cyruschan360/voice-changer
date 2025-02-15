(function(){
    let timer = setInterval(() => {
        let welcomeMsgCheckbox = document.querySelectorAll('#open-starting-notice-dialog-checkbox');
        
        welcomeMsgCheckbox.forEach( (item) => {
            item.checked = false;
        });

        if (welcomeMsgCheckbox.length) {
            clearInterval(timer);
        }
    }, 1000);
})();