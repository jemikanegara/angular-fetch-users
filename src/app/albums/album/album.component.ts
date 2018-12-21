import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"]
})
export class AlbumComponent implements OnInit {
  @Input() album = { id: 0, userId: 0, title: "" };
  constructor(private router: Router) {}

  showPhotos(id) {
    this.router.navigate(["/albums", id, "photos"]);
  }

  ngOnInit() {}
}
