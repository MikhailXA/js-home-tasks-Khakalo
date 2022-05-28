function localStorage() {
    var self = this,
        pHash = {};

    self.addValue = function(key, value) {
        pHash[key] = value;
    };

    self.getValue = function(key) {
        return pHash[key];
    };

    self.deleteValue = function(key) {
        return delete pHash[key];
    };

    self.getKeys = function() {
        return (Object.keys(pHash));
    };
}

//NEW ----------------------
document.getElementById('message').reset();
var StoredName = window.localStorage.getItem('lsName');
if (StoredName) {
    document.getElementById('IName').value = StoredName;
}

var drinkStorage = function (name, key, value) {
    var existing = localStorage.getItem(name);
    existing = existing ? JSON.parse(existing) : {};
    existing[key] = value;
    localStorage.setItem(name, JSON.stringify(existing));
}
//
