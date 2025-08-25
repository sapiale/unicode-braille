 document.addEventListener('DOMContentLoaded', function() {
    const charList = [  
        {letter:'a', bcode:'2801'},
        {letter:'b', bcode:'2803'},
        {letter:'c', bcode:'2809'},
        {letter:'d', bcode:'2819'},
        {letter:'e', bcode:'2811'},
        {letter:'f', bcode:'2816'},
        {letter:'g', bcode:'281B'},
        {letter:'h', bcode:'2826'},
        {letter:'i', bcode:'280A'},
        {letter:'j', bcode:'281A'},
        {letter:'k', bcode:'2805'},
        {letter:'l', bcode:'2807'},
        {letter:'m', bcode:'280D'},
        {letter:'n', bcode:'281D'},
        {letter:'o', bcode:'2815'},
        {letter:'p', bcode:'2856'},
        {letter:'q', bcode:'281F'},
        {letter:'r', bcode:'2817'},
        {letter:'s', bcode:'280E'},
        {letter:'t', bcode:'281E'},
        {letter:'u', bcode:'2825'},
        {letter:'v', bcode:'2827'},
        {letter:'w', bcode:'283A'},
        {letter:'x', bcode:'282D'},
        {letter:'y', bcode:'283D'},
        {letter:'z', bcode:'2835'}
    ];
    
    document.addEventListener('keydown', function(event) {
        let pressedKey = event.key;
        const found = charList.find(obj => obj.letter === pressedKey);
        let toprint = `&#x${found.bcode}`;

        document.getElementById('english').innerHTML = pressedKey;
        document.getElementById('braille').innerHTML = toprint;
    })

    document.addEventListener('keyup', function(event) {
         //myInput.value = '';
    })
})

            
            
