import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,
  MatInputModule, MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,
    MatInputModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,
    MatInputModule, MatIconModule],
})
export class MaterialModule { }
