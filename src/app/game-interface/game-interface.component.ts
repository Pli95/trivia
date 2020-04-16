import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-game-interface',
	templateUrl: './game-interface.component.html',
	styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent implements OnInit {
	answers: string[] = ["a", "b", "c", "d"]
	constructor() { }

	ngOnInit(): void {
	}

}
