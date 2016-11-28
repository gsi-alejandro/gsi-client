/**
 * Created by cervantes on 25/11/16.
 */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });
    it ('should work', () => {
        expect(2+2).toBe(4, 'sum result');
    });
});
