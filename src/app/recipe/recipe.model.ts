export class Recipe {
  public name: string;
  public description: string;
  public image: string[] | string;

  constructor(
    recipeName: string,
    recipeDesc: string,
    recipeImage: string[] | string
  ) {
    this.name = recipeName;
    this.description = recipeDesc;
    this.image = recipeImage;
  }
}
