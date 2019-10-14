import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,
  MatInputModule, MatIconModule, MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,
    MatInputModule, MatIconModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatFormFieldModule,
    MatInputModule, MatIconModule, MatSnackBarModule],
})
export class MaterialModule { }
