class MyString {
    reverse(str) {
        return str.split('').reverse().join('')
    }
    ucFirst(str) {
        let str1 = str.charAt(0).toUpperCase();
        for (let i = 1; i < str.length; i++) {
            str1 += str.charAt(i).toLowerCase()
        }

        return str1;
    }
    ucWords(str) {
        return str.toLowerCase().split(' ').map(function (i) {
            if (i.length > 2) {
                return i.charAt(0).toUpperCase() + i.substr(1);
            } else {
                return i;
            }
        }).join(' ');
    }
}
let str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));