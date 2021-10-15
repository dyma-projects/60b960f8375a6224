import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 5;
  public result: number = 0;
  constructor() {}

  ngOnInit() {}
  public incrementResult(result: number) {
    this.result = result;
  }
  public decrementResult(result: number) {
    this.result = result;
  }
}
