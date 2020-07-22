// @ts-ignore
import { expect } from 'chai';

import temp from "./temp";

// @ts-ignore
describe('temp.ts', () => {
    // @ts-ignore
    it('should just work', () => {
        expect(temp('tags')).to.deep.equal('tags-');
    });
});
