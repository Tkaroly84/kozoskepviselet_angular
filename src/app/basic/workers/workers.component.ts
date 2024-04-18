import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.scss'
})
export class WorkersComponent {

  workerName!: string;
  post!: string;
  description!: string;
  image!: string;
  phone!: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.workerName = params['name'];
      this.displayWorker(this.workerName);
    });
  }
  displayWorker(workerName: string) {
    const workers: { [key: string]: { name: string, image: string, description: string, post: string, phone: number } } = {
      'Farkas Gábor': { name: 'Farkas Gábor', image: '/assets/images/Gábor_Közösképviselő.jpg', description: 'Leírás Farkas Gáborról', post: 'Ügyvezető', phone: +36709057322 },
      'Prepok Tibor': { name: 'Prepok Tibor', image: '/assets/images/Tibi_1_társasházkezelő.jpg', description: 'Leírás Prepok Tiborról', post: 'Társasházkezelő', phone: +36709057322 },
      'Schlosser János': { name: 'Schlosser János', image: '/assets/images/János_társasházkezelő.jpg', description: 'Leírás Schlosser Jánosról', post: 'Társasházkezelő', phone: +36709057322 },
      'Farkasné Vancza Ágnes': { name: 'Farkasné Vancza Ágnes', image: '/assets/images/Farkas Ági_könyvelő.jpg', description: 'Leírás Farkasné Vancza Ágnes', post: 'Könyvelő', phone: +36709057322 },
      'Borsányiné Szabó Ágnes': { name: 'Borsányiné Szabó Ágnes', image: '/assets/images/Ági_könyvelő.jpg', description: 'Borsányiné Szabó Ágnes', post: 'Könyvelő', phone: +36709057322 },
      'Varga Rezső': { name: 'Varga Rezső', image: '/assets/images/Rezső_Szoftverfejlesztő.jpg', description: 'Leírás Varga Rezsőről', post: 'Szoftverfejlesztő', phone: +36709057322 },
  };

    const selectedWorker = workers[workerName];
    if (selectedWorker) {
      this.post = selectedWorker.post;
      this.description = selectedWorker.description;
      this.image = selectedWorker.image;
      this.phone = selectedWorker.phone
    }
  }
}
