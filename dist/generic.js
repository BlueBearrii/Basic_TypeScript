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
function useState() {
    // set dynamic type :: can use string, bool, num, etc.
    var state;
    function getState() {
        return state;
    }
    function setState(val) {
        state = val;
        return state;
    }
    return { getState: getState, setState: setState };
}
//
// ─── RUN ────────────────────────────────────────────────────────────────────────
//
var useState1 = useState();
var useState2 = useState();
//let test1 = useState1.getState(); // return undefine
//let test2 = useState2.getState(); // return undefine
var test1 = useState1.setState("IS AUTHENTICATED");
var test2 = useState2.setState(true);
console.log(test1);
console.log(test2);
