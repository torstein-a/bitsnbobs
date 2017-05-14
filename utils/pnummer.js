    var check = function(str) {
        if (!/^\d{11}$/.test(str)) return false;
        var k1 = 11 - ((3*str[0]+7*str[1]+6*str[2]+1*str[3]+8*str[4]+9*str[5]+4*str[6]+5*str[7]+2*str[8]) % 11);
        if (k1 == 11) k1 = 0;
        var k2 = 11 - ((5*str[0]+4*str[1]+3*str[2]+2*str[3]+7*str[4]+6*str[5]+5*str[6]+4*str[7]+3*str[8]+2*k1) % 11);
        if (k2 == 11) k2 = 0;
        return parseInt(str[9],10) === k1 && parseInt(str[10],10) === k2;
    }
