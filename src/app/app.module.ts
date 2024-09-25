import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserTaskModule } from "./user/user.module";
import { OutputComponent } from "./output/output.component";

@NgModule({
    declarations:[AppComponent,HeaderComponent,OutputComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,UserTaskModule]
})

export class AppModule{}