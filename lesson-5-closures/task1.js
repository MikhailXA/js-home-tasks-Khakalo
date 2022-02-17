var Johntip = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    billsTotal: [],
    tipCalculator: function () {
        let tipPercent = 0;
        for (i = 0; i < this.bills.length; i++) {
            if ( this.bills[i] < 50 ) {
                tipPercent = 0.20;
            } else if ( this.bills[i] >= 50 && this.bills[i] <= 200 ) {
                tipPercent = 0.15;
            } else {
                tipPercent = 0.10;
            }
            this.tips.push( this.bills[i] * tipPercent );
            this.billsTotal.push( this.bills[i] + ( this.bills[i] * tipPercent ) );
        }
    }
}
Johntip.tipCalculator();
console.log('Чаевые Джона в каждом ресторане '+ Johntip.tips);
console.log('Счёт Джона включая чаевые ' + Johntip.billsTotal);



var Marktip = {
    bills: [77, 375, 110, 45],
    tips: [],
    billsTotal: [],
    tipCalculator: function () {
        let tipPercent = 0;
        for (i = 0; i < this.bills.length; i++) {
            if ( this.bills[i] < 50 ) {
                tipPercent = 0.20;
            } else if ( this.bills[i] >= 50 && this.bills[i] <= 200 ) {
                tipPercent = 0.15;
            } else {
                tipPercent = 0.10;
            }
            this.tips.push( this.bills[i] * tipPercent );
            this.billsTotal.push( this.bills[i] + ( this.bills[i] * tipPercent ) );
        }
    }
}
Marktip.tipCalculator();
console.log('Чаевые Марка в каждом ресторане '+ Marktip.tips);
console.log('Счёт Марка включая чаевые ' + Marktip.billsTotal);



function averageTips (tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum+= tips[i];
    }
    return sum / tips.length;
}
console.log('Марк в среднем оставлял чаевых ' + averageTips(Marktip.tips));
console.log('Джон в среднем оставлял чаевых ' + averageTips(Johntip.tips));



if (averageTips(Marktip.tips) > averageTips(Johntip.tips)) {
    console.log('Марк платил больше чаевых');
} else if (averageTips(Johntip.tips) > averageTips(Marktip.tips)) {
    console.log('Джон платил больше чаевых');
} else {
    console.log('Джон и Марк оставляли одинаковое количество чаевых');
}