interface Recipe {
  id?: string; // Not needed when posting ;-)
  recipeName: string;
  recipeDescription: string;
  totalSecondsToPrepare: number;
  vegetarian: boolean;
  userInfo: string;
  categoryName: string;
}
