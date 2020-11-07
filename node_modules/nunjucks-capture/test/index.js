import test from 'ava';
import nunjucks from 'nunjucks';
import CaptureTag from '../index.js';

test('constructor', t => {
    const newTag = new CaptureTag();
    const expectedKeys = [
        'tags',
        'parse',
        'run',
    ];

    t.same(
        Object.keys(newTag),
        expectedKeys,
        'object has keys'
    );
});

test('init env', t => {
    const env = new nunjucks.Environment();
    const extName = 'Capture';
    env.addExtension(extName, new CaptureTag());

    t.ok(env.extensions[extName], 'env has extension');
});

test('render template', t => {
    const env = new nunjucks.Environment();
    env.addExtension('Capture', new CaptureTag());

    t.is(env.renderString('{% capture as="test" %}test{% endcapture %}{{ test }}'), 'test');
});

test('fails without "as"', t => {
    const env = new nunjucks.Environment();
    env.addExtension('Capture', new CaptureTag());

    t.throws(() => {
        env.renderString.call(env, '{% capture %}test{% endcapture %}{{ test }}');
    });
});
