import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UserComponent } from './users/user/user.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { AlbumComponent } from './albums/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent,
    UserComponent,
    PhotoComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
