//
// ─── GENERATED CONSTANT AND VARIABLE DATA ────────────────────────────────────────────────────
//
var user = {
    name: "THANANAN",
    id: 0
};
var user2 = {
    name: "BlueBearrii",
    id: 1
};
var rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
};
var genToken = function () {
    return rand() + rand(); // to make it longer
};
//
// ─── FUNCTIONS ───────────────────────────────────────────────────────────────────
//
function boolInput(boolInput) {
    console.log(boolInput);
}
function userFunction(data) {
    // clone to new data
    var newData = data;
    // try to change data
    newData.id += 2;
    console.log(newData);
}
function setAuthentication(config) {
    var dataResponse = {
        token: config.token,
        username: config.username,
        id: config.id,
        status: config.status
    };
    return dataResponse;
}
//
// ─── RUN ────────────────────────────────────────────────────────────────────────
//
//console.log(user);
//boolInput(false);
//userFunction(user2);
var data = {
    token: "" + genToken(),
    username: "bluebearrii",
    id: 0,
    status: true
};
console.log(setAuthentication(data));
// ────────────────────────────────────────────────────────────────────────────────
