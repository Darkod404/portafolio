import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from './menu/menu.module';
import { AppComponent } from './app.component';
import { AboutmeModule } from './aboutme/aboutme.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    AboutmeModule,
    ProjectsModule,
    SkillsModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
