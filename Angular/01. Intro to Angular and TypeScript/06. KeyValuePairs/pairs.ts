class KeyValuePair<T, U>{
    private key: T;
    private val: U;

    setKeyValue(inputKey: T, inputVal: U) {
        this.key = inputKey;
        this.val = inputVal;
    }

    display() {
        console.log(`key = ${this.key}, value = ${this.val}`);
        
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();