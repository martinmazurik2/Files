import { TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { DataService } from './data.service';


describe("Hello world", () => {
  it("says hello", function (){
            console.log(3);
         });
});

// describe('DataServiceTest', () => {
//     beforeEach(()=> {
//         TestBed.configureTestingModule({
//           providers: [DataService]
//         })
//       });

//     TestBed.compileComponents().then(() => {
//         const fixture = TestBed.createComponent(DataService);
//         const app = fixture.componentInstance;

//         expect(app.getRepos[0].name).toBe('java-api'); 
//     });
// });
