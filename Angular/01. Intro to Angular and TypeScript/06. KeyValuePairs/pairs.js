var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (inputKey, inputVal) {
        this.key = inputKey;
        this.val = inputVal;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.val));
    };
    return KeyValuePair;
}());
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
