// ----------------------exp.51(1)
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
let ex1 = formatter.format(34000);
console.log(ex1);
// ----------------------exp.51(2)
const number1 = 1200.012;
let ex2 = "$" + number1.toFixed(2);
console.log(ex2);
// ----------------------exp.51(3)
const ex3 = (4500).toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(ex3);
// ----------------------exp.51(4)
const ex4 = (1234.5678).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
console.warn("$ " + ex4);
// ----------------------exp.52(1)
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(length) {
  let ex5 = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    ex5 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return ex5;
}
console.log(generateString(6));
// ----------------------exp.52(2)
const ex6 = Math.random().toString(36).substring(2, 7);
console.log(ex6);
// ----------------------exp.53(1)
const string1 = "my name is negin";
const string2 = "my";
if (string1.startsWith(string2))
  console.log(`${string1} start with ${string2}`);
else console.log(`${string1} do not start with ${string2}`);
// ----------------------exp.53(2)
let ex7 = string1.lastIndexOf(string2, 0) === 0;
if (ex7) console.log(`${string1} start with ${string2}`);
else console.log(`${string1} do not start with ${string2}`);
// ----------------------exp.53(3)
const pattern = /^he/;
let ex8 = pattern.test(string1);
if (ex8) console.log(`${string1} start with ${pattern}`);
else console.log(`${string1} do not start with ${pattern}`);
// ----------------------exp.54(1)
const string3 = "               hello world!         ";
let ex9 = string3.trim();
console.log(ex9);
// ----------------------exp.54(2)
function trimString(x) {
  let trimValue = x.replace(/^\s+|\s+$/g, "");
  return trimValue;
}
const ex10 = trimString("    Hello world    ");
console.log(ex10);
// ----------------------exp.55(1)
const person = {
  name: "Jack",
  age: 27,
};
const ex11 = JSON.stringify(person);
console.log(ex11);
console.log(typeof ex11);
// ----------------------exp.55(2)
const ex12 = String(person);
const ex13 = String(person["name"]);
console.log(ex12);
console.log(ex13);
console.log(typeof ex12);
// ----------------------exp.56(1)
const str = prompt("Enter a string:");
const checkString = prompt("Enter a string that you want to check:");
if (str.includes(checkString)) {
  console.log(`The string contains ${checkString}`);
} else {
  console.log(`The string does not contain ${checkString}`);
}
// ----------------------exp.56(2)
if (str.indexOf(checkString) !== -1) {
  console.log(`The string contains ${checkString}`);
} else {
  console.log(`The string does not contain ${checkString}`);
}
// ----------------------exp.57(1)
const string4 = "JavaScript Program";
const string5 = "javascript program";
const ex14 = string4.toUpperCase() === string5.toUpperCase();
if (ex14) {
  console.log("The strings are similar.");
} else {
  console.log("The strings are not similar.");
}
// ----------------------exp.57(2)
const pattern1 = new RegExp(string4, "gi");
const ex15 = pattern1.test(string5);
if (ex15) {
  console.log("The strings are similar.");
} else {
  console.log("The strings are not similar.");
}
// ----------------------exp.57(3)
const ex16 = string4.localeCompare(string5, undefined, { sensitivity: "base" });
if (ex16 == 0) {
  console.log("The strings are similar.");
} else {
  console.log("The strings are not similar.");
}
// ----------------------exp.58(1)
const str1 = "Learning JavaScript";
const ex17 = window.btoa(str1);
console.log(ex17);
const ex18 = window.atob(ex17);
console.log(ex18);
// ----------------------exp.58(2)
const Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (input) {
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output =
        output +
        Base64._keyStr.charAt(enc1) +
        Base64._keyStr.charAt(enc2) +
        Base64._keyStr.charAt(enc3) +
        Base64._keyStr.charAt(enc4);
    }

    return output;
  },

  // public method for decoding
  decode: function (input) {
    let output = "";
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = Base64._keyStr.indexOf(input.charAt(i++));
      enc2 = Base64._keyStr.indexOf(input.charAt(i++));
      enc3 = Base64._keyStr.indexOf(input.charAt(i++));
      enc4 = Base64._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = Base64._utf8_decode(output);

    return output;
  },

  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, "\n");
    let utftext = "";

    for (let n = 0; n < string.length; n++) {
      let c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    let string = "";
    let i = 0;
    let c = (c1 = c2 = 0);

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(
          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        i += 3;
      }
    }
    return string;
  },
};

// define the string
const string = "Learning JavaScript";

// encode the String
const encodedString = Base64.encode(string);
console.log(encodedString);

// decode the String
const decodedString = Base64.decode(encodedString);
console.log(decodedString);
// ----------------------exp.59(1)
const string6 = "Learning JavaScript Program";
const ex19 = string6.replace(/a/g, "A");
console.log(ex19);
// ----------------------exp.59(2)
const splitString = string6.split("a");
const ex20 = splitString.join("A");
console.log(ex20);
// ----------------------exp.60(1)
const string7 = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;
const ex21 = string7.replace(/(\r\n|\r|\n)/g, "<br>");
console.log(ex21);
// ----------------------exp.60(2)
const ex22 = string7.split("\n").join("<br>");
console.log(ex22);
