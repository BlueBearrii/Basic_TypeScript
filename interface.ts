//
// ─── INTERFACE IN TYPESCRIPT ────────────────────────────────────────────────────
//
interface User {
  name: string;
  id: number;
}

interface Config {
  token: string;
  username: string;
  id: number;
  status: boolean;
}

//
// ─── GENERATED CONSTANT AND VARIABLE DATA ────────────────────────────────────────────────────
//
const user: User = {
  name: "THANANAN",
  id: 0,
};

const user2: User = {
  name: "BlueBearrii",
  id: 1,
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

function boolInput(boolInput: boolean) {
  console.log(boolInput);
}

function userFunction(data: User) {
  // clone to new data
  let newData = data;
  // try to change data
  newData.id += 2;
  console.log(newData);
}

function setAuthentication(
  config: Config
): {
  token: string;
  username: string;
  id: number;
  status: boolean;
} {
  let dataResponse = {
    token: config.token,
    username: config.username,
    id: config.id,
    status: config.status,
  };

  return dataResponse;
}

//
// ─── RUN ────────────────────────────────────────────────────────────────────────
//
//console.log(user);
//boolInput(false);
//userFunction(user2);

const data = {
  token: `${genToken()}`,
  username: "bluebearrii",
  id: 0,
  status: true,
};
console.log(setAuthentication(data));

// ────────────────────────────────────────────────────────────────────────────────
