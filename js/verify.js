function toUnicode(elmnt, content) {
    if (content.length == elmnt.maxLength) {
        let next = elmnt.tabIndex;
        if (next < document.forms[0].elements.length - 1) {
            console.log(document.forms[0].elements.length);
            document.forms[0].elements[next].focus();
        } else {
            document.getElementById('my-submit-id').removeAttribute('disabled');
            document.getElementById('my-submit-id').classList.remove('my-submit-class');
        }
    }
}