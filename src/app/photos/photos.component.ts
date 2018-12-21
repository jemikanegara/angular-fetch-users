import { Component, OnInit } from "@angular/core";
import { PhotosService } from "./photos.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private photosService: PhotosService,
    private location: Location
  ) {}

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(data => {
      this.photos = data.slice(0, 5);
    });

    // this.photos = this.photosService.photos.slice(0, 5);
  }
}
