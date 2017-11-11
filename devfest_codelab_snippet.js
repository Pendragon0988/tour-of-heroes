/* Setting environment configurations */
	// 1. Open terminal window and direct your path on your desktop
	// 2. Press shift+right click on desktop and choose "Open Command Prompt Here"
	// 3. Check if nodejs is installed by typing the command "node -v" to check if version is available
	// 4. Check if angular-cli is installed on your machine by typing "ng --version", if not enter "npm install -g @angular/cli"
	// 5. Now check if typescript is installed by typing "tsc -v". If it is not, install it by typing
	//    "npm install -g typescript"
	// 6. If angular-cli and typescript is already installed, now it is time to get awesome!

/* Initial Setup */
	// 1. Open your code editor (Visual Studio Code Editor)
	// 2. On your terminal type "ng new tour-of-heroes" and wait for some extra awesomesauce web crawling
	// 3. Then after installation type "cd tour-of-heroes"
	// 4. Now try to run your freshly installed angular boilerplate by typing "ng serve --open"
	// 5. After the angular-cli does its bundling, compressing and optimizing it will open your browser
	//    to check that your "App Works"

/* Property Binding */
	// 1. Change the value of "title property to Let the force awaken!"
				title = 'Let the force awaken'

/* Create your first component */
	// 1. Install John Papa's angular snippet plugin to speedup building our components
	// 2. After installing, go inside the src/app and create a "heroes" folder
	// 3. Inside the "heroes" folder create a file called "heroes.component.ts"
	// 4. Then type "a-", to choose the snippet for making and angular component
	      import { Component, OnInit } from '@angular/core';

				@Component({
				  selector: 'selector-name',
				  templateUrl: 'name.component.html'
				})

				export class NameComponent implements OnInit {
				  constructor() { }

				  ngOnInit() {}
				}
	// 5. Update "selector-name", "templateUrl", and the export component name (NameComponent)
				import { Component, OnInit } from '@angular/core';

				@Component({
					moduleId: module.id,
				  selector: 'tour-of-heroes',
				  templateUrl: 'heroes.component.html'
				})

				export class HeroesComponent implements OnInit {
				  constructor() { }

				  ngOnInit() {}
				}
	// 6. Then make a heroes property binding with a type Hero
				heroes: Hero[]
	// 7. Now assign an array of heroes to this property
	      ngOnInit() {
	      	this.heroes = [
		       { "id": 11, "name": "Chewbacca", "twitter": "@im_chewy" },
		       { "id": 12, "name": "Rey", "twitter": "@rey" },
		       { "id": 13, "name": "Finn (FN2187)", "twitter": "@finn" },
		       { "id": 14, "name": "Han Solo", "twitter": "@i_know" },
		       { "id": 15, "name": "Leia Organa", "twitter": "@organa" }
		    	]
	      }
  // 8. Let us make a blue print model of our property here. Make a file and name it "hero.model.ts"
        export class Hero {
				  id: number
				  name: string
				  twitter: string
				}
	// 9. Now import the model of our type "Hero"			
 				import { Hero } from './hero.model';

/* Create HeroesComponent Template */
	// 1. Create a file called "heroes.component.html"
	// 2. Now we are going to bind our property "heroes" and iterate to its values using *ngFor directive
			`	
			  <ul class="heroes">
				  <li *ngFor="let hero of heroes">
				    <span class="badge">{{hero.id}}</span>{{hero.name}}
				  </li>
				</ul>
			
			`
	// 3. Now we need to introduce our newly created component in app.module.ts
				import { HeroesComponent } from './heroes/heroes.component';

				...
				  declarations: [
				    AppComponent,
				    HeroesComponent,
				  ],
				...
	// 4. Now Add the component on the root component template app.component.html
				`
					<h1>
					  {{title}}
					</h1>
					<toh-heroes></toh-heroes>
				`

/* Add css styling */
	// 1. Create a file called heroes.component.css then paste the css styling into it.
	// 2. Update our component metadata
     		@Component({
				  moduleId: module.id,
				  selector: 'toh-heroes',
				  templateUrl: 'heroes.component.html',
				  styleUrls: ['heroes.component.css']
				})

/* Directives, Property Binding and Event Binding */
	// 1. Update our "heroes.component.html"
			`	
			  <ul class="heroes">
				  <li 
				    *ngFor="let hero of heroes" 
				    (click)="onSelect(hero)"
				    [class.selected]="hero==selectedHero">
				    <span class="badge">{{hero.id}}</span>{{hero.name}}
				  </li>
				</ul>
			`
	// 2. Add the event binding to our component and create a "selectedHero" property
	      selectedHero : Hero
	      
	      ...
			  
			  onSelect(hero: Hero) {
			    this.selectedHero = hero
			  }

/* Component Communication and Two-Way Data Binding */
	//	1. Create a file name "hero.component.ts"
					import { Component, OnInit, Input } from '@angular/core';
					import { Hero } from './hero.model'; //import type Hero model

					@Component({
					  selector: 'toh-hero',
					  templateUrl: 'hero.component.html'
					})

					export class HeroComponent implements OnInit {
					  @Input() hero : Hero //receive a binding update from the HeroesComponent

					  constructor() { }

					  ngOnInit() { }
					}
	//	2. 	Now create the hero.component.html
					`
						<div *ngIf="hero">
						  We selected <input type="text" [(ngModel)]="hero.name">
						</div>
					`	
	//	3.	Now call the HeroComponent on the heroes.component.html
					`
			      <toh-hero [hero]="selectedHero"></toh-hero>
					`
	//	4.	Now we need to declare and introduce our HeroComponent
  				import { HeroComponent } from './heroes/hero.component';

					...
					  declarations: [
					    AppComponent,
					    HeroesComponent,
					    HeroComponent,
					  ],
					...

/* Services and Dependency Injection */
	//	1.	Create a "hero.services.ts" inside the "heroes" folder
					import { Injectable } from '@angular/core';
					import { Hero } from './hero.model';

					@Injectable()
					export class HeroService {
						heroes : Hero[]
					  
					    constructor() { }
					  
					    getHeroes() {
					      return [
									 { "id": 11, "name": "Chewbacca", "twitter": "@im_chewy" },
									 { "id": 12, "name": "Rey", "twitter": "@rey" },
									 { "id": 13, "name": "Finn (FN2187)", "twitter": "@finn" },
									 { "id": 14, "name": "Han Solo", "twitter": "@i_know" },
					 				{ "id": 15, "name": "Leia Organa", "twitter": "@organa" }
					      ]
					    }
					}
	//	2.	Now let us update our app.module.ts and provide and inject the service globally to our application
					import { HeroService } from './heroes/hero.service';
					
					...
					  providers: [HeroService]
					...
	//	3.	Inject our hero.service.ts to our HeroesComponent
					import { HeroService } from './hero.service';
					...
					constructor(private heroService : HeroService) { }				
						ngOnInit() {
					   	this.heroes = this.heroService.getHeroes()
					   	...
					  }

/* Http and Observable */
	//	1.	Create now a "heroes.json" file in the app folder and paste in the static json data
					[
						{ "id": 11, "name": "Chewbacca", "twitter": "@im_chewy" },
						{ "id": 12, "name": "Rey", "twitter": "@rey" },
						{ "id": 13, "name": "Finn (FN2187)", "twitter": "@finn" },
						{ "id": 14, "name": "Han Solo", "twitter": "@i_know" },
		 				{ "id": 15, "name": "Leia Organa", "twitter": "@organa" }
		      ]
  //	2.	Update "hero.service.ts"
 					import { Http, Response } from "@angular/http";
					import 'rxjs/Rx';

					...
					constructor(private http : Http) { }

					getHeroes() {
			      return this.http.get('src/app/heroes.json')
			        .map((response: Response) => response.json());
			      ...
			    }
  //  3.  We need to subscribe to our service now on the HeroesComponent
      		...
      		ngOnInit() {
				    this.heroService.getHeroes()
				    .subscribe(heroes => this.heroes = heroes);
				  }
				  ...








