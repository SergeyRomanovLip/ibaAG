import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ButtonComponent } from './components/toolbar/button/button.component'
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component'
import { SearchComponent } from './components/page/search/search.component'
import { LeftIerarchyComponent } from './components/page/left-ierarchy/left-ierarchy.component'
import { UserProfileComponent } from './components/page/userMeta/user-profile/user-profile.component'
import { UserPermissionsComponent } from './components/page/userMeta/user-permissions/user-permissions.component'
import { EffectivePermissionsComponent } from './components/page/userMeta/effective-permissions/effective-permissions.component'
import { ApiService } from 'src/app/services/api.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { PageComponent } from './components/page/page/page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    ToolbarComponent,
    SearchComponent,
    LeftIerarchyComponent,
    UserProfileComponent,
    UserPermissionsComponent,
    EffectivePermissionsComponent,
    PageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, BrowserAnimationsModule],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
