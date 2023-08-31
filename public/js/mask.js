function formatPhoneNumber(value){
    if( !value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumber < 7) {
        return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0,2)}) ${phoneNumber.slice(2,7)}-${phoneNumber.slice(7,10)}`;
}

function phoneNumberFormatter(){
    const inputFild = document.getElementById('telefone');
    const formattedInputValue = formatPhoneNumber(inputFild.value);
    inputFild.value = formattedInputValue;

}

