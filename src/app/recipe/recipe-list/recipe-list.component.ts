import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pav-Bhaji',
      'Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread. Vegetables in the curry may commonly include potatoes, onions, carrots, chillies, peas, bell peppers and tomatoes. Street sellers usually cook the curry on a flat griddle (tava) and serve the dish hot. A soft white bread roll is the usual accompaniment to the curry, but this does not preclude the use of other bread varieties such as chapati, roti or brown bread.',
      'https://www.rajbhog.com/wp-content/uploads/2021/02/Pav-Bhaji-870x635.jpg'
    ),
    new Recipe(
      'Biryani',
      'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent.It is made with Indian spices, rice, and meat usually that of chicken, goat, lamb, prawn, fish, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties.Biryani is popular throughout the Indian subcontinent, as well as among the diaspora from the region. It has gained popularity in South India especially in Tamil Nadu, Andhra Pradesh and Telangana. It is also prepared in other regions such as Iraqi Kurdistan.Biryani is the single most-ordered dish on Indian online food ordering and delivery services.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/330px-Biryani_Home.jpg'
    ),
    new Recipe(
      'Manchow soup',
      'Manchow soup is a soup popular in Indian Chinese cuisine due to its easy preparation and hot spicy taste. It is available in many restaurants and street food carts alike. Although the soup is named after Manchuria it does not resemble any that is normally found in the cuisines of the region. The origin of Manchow soup is Meghalaya.It is a dark brown soup prepared with various vegetables, scallions, and chicken, thickened with broth and corn flour, and flavored with generous doses of soy sauce, salt, garlic, chili peppers and, predominantly, ginger. It may be either vegetarian or non-vegetarian. It is garnished with chopped spring onions and is served with crispy fried noodles.',
      'https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg'
    ),
    new Recipe(
      'Butter chicken',
      'Butter chicken or murgh makhani is a curry of chicken in a spiced tomato, butter and cream sauce. It originated in the Indian subcontinent as a curry.Butter chicken is cooked in a traditional clay oven or tandoor. It’s first marinated in a mix of spices including cumin, turmeric, garlic and ginger, along with yogurt and lemon juice. A tomato sauce with butter and cream is then poured over it. Time and experimentation have inspired many different versions of the recipe which can be found online, many using a variety of different spices.',
      'http://shafali.com/wp-content/uploads/2015/06/butter-chicken4-640x350.jpg'
    ),
    new Recipe(
      'Chole bhature',
      'Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent.It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida.Although it is known as a typical Punjabi dish,there are varied claims around the origin of dish.Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi. It can also be street food or a complete meal and may be accompanied with onions, pickled carrots, green chutney or achaar.',
      'https://t3.ftcdn.net/jpg/01/65/57/48/360_F_165574887_PDccXmFfVe9bKgMoHjdCnfR7cnJRbVGq.jpg'
    ),
    new Recipe(
      'Gajar ka halwa',
      'Gajar ka halwa, also known as gajorer halua, gajrela, gajar pak, and carrot halwa is a carrot-based sweet dessert pudding from the Indian subcontinent.It is made by placing grated carrots in a pot containing a specific amount of water, milk and sugar, cardamom and then cooking while stirring regularly. It is often served with a garnish of almonds and pistachios.The nuts and other items used are first sautéed in ghee, a type of clarified butter from the Indian subcontinent.The dessert is traditionally eaten during all of the festivals in India, mainly on the occasion of Diwali, Holi, Eid al-Fitr and Raksha Bandhan.It is served hot during the winter.',
      'https://static.toiimg.com/thumb/80332213.cms?width=680&height=512'
    ),
    new Recipe(
      'Kheer',
      'Kheer (kheeri, payesh, payox, payasam or phirni) is a sweet dish and a type of wet pudding popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery, and rice, although rice is sometimes substituted with one of the following: daals, bulgur wheat, millet, tapioca, vermicelli, or sweet corn. It is typically flavoured with desiccated coconut, cardamom, raisins, saffron, cashews, pistachios, almonds, or other dry fruits and nuts, and recently pseudograins are also gaining popularity. It is typically served as a dessert.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/450px-Kheer.jpg'
    ),
    new Recipe(
      'Panipuri',
      'Panipuri or gupchup or golgappa or Pani ke Patake is a type of snack that originated in the Indian subcontinent, and is one of the most common street foods in Indian subcontinent.Panipuri consists of a round or ball-shaped, hollow puri (a deep-fried crisp flatbread), filled with a mixture of flavored water (known as imli pani), tamarind chutney, chili powder, chaat masala, potato mash, onion or chickpeas.',
      'https://static.toiimg.com/photo/75107900.cms'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
