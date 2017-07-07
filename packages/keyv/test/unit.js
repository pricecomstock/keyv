import test from 'ava';
import Keyv from '../';

test('Keyv is a function', t => {
	t.is(typeof Keyv, 'function');
});

test('Keyv cannot be invoked without \'new\'', t => {
	t.throws(() => Keyv()); // eslint-disable-line new-cap
	t.notThrows(() => new Keyv());
});

test('Keyv is an instance of Keyv', t => {
	t.true(new Keyv() instanceof Keyv);
});

test('.set(key, value) returns a Promise', t => {
	const store = new Keyv();
	t.true(store.set('foo', 'bar') instanceof Promise);
});

test('.set(key, value) resolves to value', async t => {
	const store = new Keyv();
	t.is(await store.set('foo', 'bar'), 'bar');
});