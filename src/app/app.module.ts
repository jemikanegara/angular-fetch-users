import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";
import { UserComponent } from "./users/user/user.component";
import { PhotoComponent } from "./photos/photo/photo.component";
import { AlbumComponent } from "./albums/album/album.component";
import { AlbumsService } from "./albums/albums.service";
import { PhotosService } from "./photos/photos.service";
import { UsersService } from "./users/users.service";
import { RouterModule, Routes, Router } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: UsersComponent },
  { path: "users/:id/albums", component: AlbumsComponent },
  { path: "albums/:id/photos", component: PhotosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    UserComponent,
    PhotoComponent,
    AlbumComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlbumsService, PhotosService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
