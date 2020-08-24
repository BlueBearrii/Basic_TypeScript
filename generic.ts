//
// ─── CONCEPT FROM HOOK ──────────────────────────────────────────────────────────
//

// function useState() {
//   let state: any;

//   function getState() {
//     return state;
//   }

//   function setState(val: any): void {
//     state = val;
//   }

//   return { getState, setState };
// }

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── USE GENERIC TYPE FOR DYNAMIC TYPING WHEN NEED TO CREATE DYNAMIC FUNCTION ───
//
// <> generic symbol
function useState<S>() {
  // set dynamic type :: can use string, bool, num, etc.
  let state: S;

  function getState() {
    return state;
  }

  function setState(val: S): S {
    state = val;
    return state;
  }

  return { getState, setState };
}

//
// ─── RUN ────────────────────────────────────────────────────────────────────────
//

let useState1 = useState<string>();
let useState2 = useState<boolean>();

//let test1 = useState1.getState(); // return undefine
//let test2 = useState2.getState(); // return undefine

let test1 = useState1.setState("IS AUTHENTICATED");
let test2 = useState2.setState(true);

console.log(test1);
console.log(test2);
