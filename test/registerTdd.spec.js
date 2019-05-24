import {registryEmail, registerInput, loginInput} from '../src/assets/js/registerTdd.js';
import { isTSAnyKeyword } from '@babel/types';

descreibe('registryEmail', () => {
    it('Should return false, if the mail is not valid', () => {
        expect(registryEmail('hello@valecom'))
    })
})