export interface MenuItem {
  id: string;
  name: string;
  price: number;
  time: string;
  rating: number;
  category: string;
  image: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    name: "Fluffy Pancakes",
    price: 12.99,
    time: "15 min",
    rating: 4.8,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1629583141681-44593c79f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnJlYWtmYXN0JTIwcGFuY2FrZXN8ZW58MXx8fHwxNzc1MjAxNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Stack of three fluffy buttermilk pancakes served with maple syrup, fresh berries, and whipped cream."
  },
  {
    id: "2",
    name: "Avocado Toast",
    price: 10.50,
    time: "10 min",
    rating: 4.6,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1551244952-fab4c6c3a571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGF2b2NhZG8lMjB0b2FzdHxlbnwxfHx8fDE3NzUyMDE3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fresh smashed avocado on sourdough toast topped with cherry tomatoes, feta cheese, and a poached egg."
  },
  {
    id: "3",
    name: "Eggs Benedict",
    price: 14.99,
    time: "20 min",
    rating: 4.9,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1638062401890-54c826f3efe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwYmVuZWRpY3QlMjBicnVuY2h8ZW58MXx8fHwxNzc1MjAxNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Perfectly poached eggs and Canadian bacon on an English muffin, topped with rich hollandaise sauce."
  },
  // Lunch
  {
    id: "4",
    name: "Gourmet Burger",
    price: 16.99,
    time: "25 min",
    rating: 4.7,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1761315413892-e657595928ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwbWVhbHxlbnwxfHx8fDE3NzUyMDE3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Juicy beef patty with aged cheddar, caramelized onions, crispy bacon, and our signature sauce on a brioche bun."
  },
  {
    id: "5",
    name: "Grilled Salmon",
    price: 22.99,
    time: "30 min",
    rating: 4.9,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1773969423899-01812e1537f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwZGlubmVyfGVufDF8fHx8MTc3NTE2MTU2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fresh Atlantic salmon fillet grilled to perfection, served with seasonal vegetables and lemon butter sauce."
  },
  {
    id: "6",
    name: "Pasta Carbonara",
    price: 18.50,
    time: "20 min",
    rating: 4.8,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1574885014162-92e4f12928db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGZvb2R8ZW58MXx8fHwxNzc1MjAxNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic Italian pasta with crispy pancetta, egg yolk, parmesan cheese, and black pepper."
  },
  // Desserts
  {
    id: "7",
    name: "Chocolate Cake",
    price: 8.99,
    time: "5 min",
    rating: 4.9,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzUxNTIzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rich, moist chocolate cake layered with dark chocolate ganache and topped with chocolate shavings."
  },
  {
    id: "8",
    name: "Classic Tiramisu",
    price: 9.50,
    time: "5 min",
    rating: 4.8,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1681564334698-8c85a9b4b1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBlbGVnYW50fGVufDF8fHx8MTc3NTEzNjQ3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Traditional Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa powder."
  },
  {
    id: "9",
    name: "French Macarons",
    price: 7.99,
    time: "2 min",
    rating: 4.7,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1657503872279-fdfd448b23a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMGZyZW5jaCUyMHBhc3RyeXxlbnwxfHx8fDE3NzUyMDE3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Box of six delicate French macarons in assorted flavors including vanilla, chocolate, and raspberry."
  },
  // Drinks
  {
    id: "10",
    name: "Berry Smoothie",
    price: 6.99,
    time: "5 min",
    rating: 4.6,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1630445493225-0f46770f0a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNtb290aGllJTIwZHJpbmt8ZW58MXx8fHwxNzc1MjAxNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Refreshing blend of mixed berries, banana, Greek yogurt, and honey for a healthy boost."
  },
  {
    id: "11",
    name: "Iced Coffee",
    price: 4.50,
    time: "3 min",
    rating: 4.5,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1684439670717-b1147a7e7534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwYmV2ZXJhZ2V8ZW58MXx8fHwxNzc1MTE4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Cold brew coffee served over ice with your choice of milk and sweetener."
  },
  {
    id: "12",
    name: "Mojito Mocktail",
    price: 5.99,
    time: "5 min",
    rating: 4.7,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1724155331840-263a0454d8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbCUyMGRyaW5rfGVufDF8fHx8MTc3NTIwMTczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fresh lime, mint leaves, and sparkling water create this refreshing non-alcoholic mojito."
  }
];
