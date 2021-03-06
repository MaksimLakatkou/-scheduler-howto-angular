import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let events = [
			{ id: 1, start_date: "2017-09-01 02:00", end_date: "2017-09-01 13:00", text: "Event 1" },
			{ id: 2, start_date: "2017-09-03 02:00", end_date: "2017-09-03 13:00", text: "Event 2" }
		];
		return { events };
	}
}
