console.log("Hello from Demo Three");
var CPerson = /** @class */ (function () {
    function CPerson(name) {
        this._name = name;
    }
    CPerson.prototype.getName = function () {
        return this._name;
    };
    CPerson.prototype.setName = function (value) {
        this._name = value;
    };
    return CPerson;
}());
var p1 = new CPerson("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());
var p2 = new CPerson("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());
console.log(p1);
console.log(p2);
