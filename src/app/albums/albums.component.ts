import { Component, OnInit } from "@angular/core";
import { AlbumsService } from "./albums.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
    const matchAlbums = this.albums.filter(
      album => album.userId === +this.route.snapshot.params["id"]
    );
    this.albums = matchAlbums;
  }
}
