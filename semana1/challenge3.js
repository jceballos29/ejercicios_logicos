const capitalizeLetters = (str) => {
    //Implementación
    s =  str
    s = s.split(' ');
    for(let i = 0; i < s.length; i++){
        let helper = s[i].split('');
        helper[0] = helper[0].toUpperCase();
        helper = helper.join('')
        s[i] = helper;
    }
    return s.join(' ')
}

module.exports = {
    capitalizeLetters
}