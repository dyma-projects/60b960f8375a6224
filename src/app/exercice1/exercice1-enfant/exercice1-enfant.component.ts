import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() public compteur;
  @Output() public result: EventEmitter<number> = new EventEmitter();
  //public incrementResult() {
  //  console.log("test");
  //  this.result.emit(this.compteur++);
  //}
  public incrementResult() {
    this.compteur++;
    this.result.emit(this.compteur);
  }
  public decrementResult() {
    this.compteur--;
    this.result.emit(this.compteur);
  }
}
