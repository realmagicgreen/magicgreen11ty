'use strict';

module.exports = function CaptureTag () {

    this.tags = ['capture'];

    this.parse = function parse (parser, nodes) {
        var tok, args, body;

        tok = parser.nextToken();
        args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        body = parser.parseUntilBlocks('endcapture');
        parser.advanceAfterBlockEnd();
        return new nodes.CallExtension(this, 'run', args, [body]);
    };

    this.run = function run (context, args, body) {
        if (args && 'as' in args) {
            context.ctx[args.as] = body();
        } else {
            throw new Error('Expected an "as" argument in capture tag');
        }
    };
};
