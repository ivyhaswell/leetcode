import { assert } from 'chai'
import { LRUCache } from './solution'
import { LRUCache as LRUCache2 } from './solution2'

describe('Basic Test', function () {

    function run_test(cache) {
        cache.put(1, 1);
        cache.put(2, 2);
        assert.equal(cache.get(1), 1)

        cache.put(3, 3);
        assert.equal(cache.get(2), -1)

        cache.put(4, 4);    // 该操作会使得密钥 1 作废
        assert.equal(cache.get(1), -1)
        assert.equal(cache.get(3), 3)
        assert.equal(cache.get(4), 4)
    }

    let cache = new LRUCache(2)
    run_test(cache)

    let cache2 = new LRUCache2(2)
    run_test(cache2)
})