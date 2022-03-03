'use strict'
class THashStorage {
    constructor() {
        this.hash = {};
    }
    AddValue(key, value) {
        this.hash[key] = value;
        console.log(this.hash);
    }
    GetValue(key) {
        return this.hash[key];
    }
    DeleteValue(key) {
        if (key in this.hash) {
            delete this.hash[key];
        }
    }
    GetKeys() {
        var keys = [];
        var i = 0;
        for (var key in this.hash) {
            keys[i] = key;
            i++;
        }
        return keys;
    }
}

