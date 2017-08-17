
    var text = 
        {
        'i1': 'Här kan du bland annat redigera namn på postboxen och entrédisplayen, och bjuda in ytterligare användare',
        i2: 'Kopplat till service och restauranger i ditt närområde. Boka/beställ direkt i appen.',
        i3: 'Lås eller lås upp privata eller publika dörrar',
        i4: 'Jämför din förbrukning av elektricitet, kallvatten och varmvatten med dig själv och dina grannar.',
        i5: 'Din digitala bopärm. Dokument som rör bostaden, fastigheten och föreningen.',
        i6: 'Boka resurser som finns tillgängliga i din fastighet eller lägg upp resurser du vill dela.',
        i7: 'Hantera belysning, dörrlås, värme, ljudanläggning, larm och så vidare - på ett enda ställe.',
        i8: 'Ditt kommunikativa verktyg för ditt boende.',
        i9: 'Användbara kontakter till din hjälp',
        i10: 'Här kan du göra en felanmälan direkt i appen. Ansvarig person tar emot ditt ärende.'
    }
    
    var coordinate = {
        i1: 900, 
        i2: 310,
        i3: 590,
        i4: 590,
        i5: 400,
        i6: 400,
        i7: 590,
        i8: 310,
        i9: 400,
        i10: 310,

    }



    var showText = function  (id) {

        leftSide = -1010; 
        rightSide = -100; 

        document.getElementById("textbox").innerHTML = this.text[id];
        document.getElementById("textbox").style.top = this.coordinate[id] + 'px';
        switch(id) {
            case 'i1': 
                document.getElementById("textbox").style.left = leftSide + 'px';
                break;
            case 'i5':
                document.getElementById("textbox").style.left = leftSide + 'px';
                break;
            case 'i7':
                document.getElementById("textbox").style.left = leftSide + 'px';
                break;
            case 'i8':
                document.getElementById("textbox").style.left = leftSide + 'px';
                break;  
            default: 
                document.getElementById("textbox").style.left = rightSide + 'px';
        } 


        console.log(this.text[id]);
        console.log(id);

    }

    var hidetext = function () {
        document.getElementById("textbox").innerHTML = 'Hover on the icon to see the instruction' ;

    }

