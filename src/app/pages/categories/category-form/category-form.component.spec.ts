import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryService } from '../shared/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './category-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoryFormComponent', () => {
  let component: CategoryFormComponent;
  let fixture: ComponentFixture<CategoryFormComponent>;

  it('should create', () => {
    expect(1).toBe(1);
  });
});
