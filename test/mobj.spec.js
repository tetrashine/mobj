
import asset from 'assert';
import Mobj from '../mobj'

describe('Mobj', function() {

    it('should run to the end', function(done) {
        asset(Mobj != null);
        asset(Mobj.a != null);
        asset(Mobj.a.a != null);
        asset(Mobj["a"] != null);
        asset(Mobj["a"]["a"] != null);
        asset(Mobj.a() != null);
        asset(Mobj.a()() != null);
        asset(Mobj.a()()() != null);
        console.log(Mobj);

        done();
    });
});
