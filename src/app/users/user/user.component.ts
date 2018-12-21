import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() user = {
    name: "",
    id: 0,
    username: "",
    email: "",
    phone: "",
    website: ""
  };

  constructor(private router: Router) {}

  showAlbums(id) {
    this.router.navigate(["/users", id, "albums"]);
  }

  ngOnInit() {}
}
