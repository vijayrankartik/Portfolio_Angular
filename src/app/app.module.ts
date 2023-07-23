import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HoverDirective } from './customDirective/hover.directive';
import { HoverAboutDirective } from './customDirective/hover-about.directive';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatDividerModule } from '@angular/material/divider';
// import { NgxTimelineModule } from 'ngx-timeline';
// import { ngx-timeline } from 'ngx-timeline'
// import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './timeline/timeline.component';
// import { from } from 'rxjs';
// import { ConnectService } from './Services/connect.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    HoverDirective,
    HoverAboutDirective,
    ConnectComponent,
    AboutComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule, 
    BrowserAnimationsModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    // NgxTimelineModule,
    // MDBBootstrapModule
  ],
  exports:[RouterModule],
  // providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
