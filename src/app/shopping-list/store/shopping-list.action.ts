import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const addIngredient = createAction(
  '[ShoppingList] AddIngredient',
  props<{ ingredient: Ingredient }>()
);
