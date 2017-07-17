
    var text = 
        {
        'i1': '11111',
        i2: '2222',
        i3: '33333',
        i4: '44444',
        i5: '5555',
        i6: '6666',
        i7: '77777',
        i8: '888888',
        i9: '99999',
        i10: '1010101'
        }



    function showText (id) {
        document.getElementById("textbox").innerHTML = this.text[id];
        console.log(this.text[id]);
        console.log(id);

    }

