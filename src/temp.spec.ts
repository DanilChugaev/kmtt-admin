import { expect } from 'chai';

import temp from "./temp";

describe('temp.ts', () => {
    it('should just work', () => {
        expect(temp('tags')).to.deep.equal('tags-');
    });
});
