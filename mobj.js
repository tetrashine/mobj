

// a == Nobj (done)
// a.a == Nobj (done)
// a.a.a == Nobj (done)
// a["a"] == Nobj (done)
// a["a"]["a"] == Nobj (done)
// a.a() = nobj
// a.a()() = nobj
// a.a !== a.a //true
// a.a !== a.a() //true

let Mobj = (() => {
    let _obj;
    let _sub = function() {
        return _obj;
    };

    _sub.prototype = new Function();

    _obj = new Proxy(_sub, {
        get: function(target, propKey) {
            if (propKey === Symbol.toPrimitive || propKey === "toString") {
                return (hint) => {
                    return "Mobj";
                };
            }

            return _obj;
        }
    });

    return {
        getInstance: () => {
            return _obj;
        }
    };
})();

export default Mobj.getInstance();
