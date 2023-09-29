PRAGMA foreign_keys = ON;
INSERT INTO category (name) VALUES
    ('Electronique'),
    ('Vêtements'),
    ('Livres'),
    ('Meubles'),
    ('Immobilier'),
    ('Véhicules');

PRAGMA foreign_keys = ON;
INSERT INTO sub_category (name, picture, category) VALUES
    ('Carte graphique', 'subCategory_carteGraphique.png', 1),
    ('Souris', 'subCategory_souris.png', 1),
    ('Polo', 'subCategory_polo.png', 2),
    ('Chemise', 'subCategory_chemise.jpg', 2),
    ('Science Fiction', 'subCategory_sf.png', 3),
    ('Heroic Fantaisy', 'subCategory_heroic.png', 3),
    ('Table basse', 'subCategory_table.png', 4),
    ('Lit', 'subCategory_lit.png', 4),
    ('Maison', 'subCategory_maison.png', 5),
    ('Appartement', 'subCategory_appartement.png', 5),
    ('Voiture', 'subCategory_voiture.png', 6),
    ('Vélo', 'subCategory_velo.png', 6);

PRAGMA foreign_keys = ON;
INSERT INTO Tag (name) VALUES
    ('class'),
    ('cute'),
    ('tip top'),
    ('pratique'),
    ('super'),
    ('économique'),
    ('écologique');

PRAGMA foreign_keys = ON;
INSERT INTO Ad (title, description, user, price, createdDate, updateDate, picture, location, subCategory ) VALUES
    ('Carte Graphique Evga GTX980Ti Hydro Copper', 'Superbe carte graphique', 2, 250, '2023-9-1','2023-9-1', 'https://media.topachat.com/media/s1000/630de00d033120593446ae0a.webp', 'Nantes', 1 ),
    ('T-shirt mauve', 'Superbe T-shirt mauve', 2, 15, '2023-9-1', '2023-9-1', 'https://www.monproduitdecom.com/images/produits/tshirt-10409.jpg', 'Bordeaux', 2 ),
    ('Le Silmarillon', 'Superbe livre', 2, 19, '2023-9-1', '2023-9-1', 'https://m.media-amazon.com/images/I/91vOYLA7beL._SL1500_.jpg', 'Lyon', 3 ),
    ('Table basse IKEA', 'Superbe table basse', 2, 8, '2023-9-1', '2023-9-1', 'https://m.media-amazon.com/images/I/41vM9+epqJL._AC_SL1500_.jpg', 'Nantes',  4),
    ('Maison de campagne', 'Superbe maison', 2, 1259000, '2023-9-1', '2023-9-1', 'https://i.f1g.fr/media/eidos/805x604_crop/2020/04/27/XVM6fdd6896-8650-11ea-bef4-6835ce68601a-805x604.jpg', 'Bordeaux', 5 ),
    ('Mercedes ClasseB 2013', 'Superbe voiture', 2, 2500, '2023-9-1', '2023-9-1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqSpgKAUecjumNfdUNFlCGk7gJ6tJXy4-Cw&usqp=CAU', 'Lyon', 6 ),
    ('CG Evga GTX2080Ti', 'Superbe carte graphique', 2, 549, '2023-9-1', '2023-9-1', 'https://media.topachat.com/media/s1000/630de00d033120593446ae0a.webp', 'Nantes', 1 ),
    ('T-shirt vert', 'Superbe T-shirt vert', 2, 12, '2023-9-1', '2023-9-1', 'https://www.monproduitdecom.com/images/produits/tshirt-10409.jpg', 'Bordeaux', 2 ),
    ('Terre et mer Tome1', 'Superbe livre', 2, 8, '2023-9-1', '2023-9-1', 'https://m.media-amazon.com/images/I/91vOYLA7beL._SL1500_.jpg', 'Lyon', 3 ),
    ('Table basse BUT', 'Superbe table basse', 2, 49, '2023-9-1', '2023-9-1', 'https://m.media-amazon.com/images/I/41vM9+epqJL._AC_SL1500_.jpg', 'Nantes',  4),
    ('Maison de ville', 'Superbe maison', 2, 775000, '2023-9-1', '2023-9-1', 'https://i.f1g.fr/media/eidos/805x604_crop/2020/04/27/XVM6fdd6896-8650-11ea-bef4-6835ce68601a-805x604.jpg', 'Bordeaux', 5 ),
    ('Twingo 2009', 'Superbe voiture', 2, 1300, '2023-9-1', '2023-9-1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqSpgKAUecjumNfdUNFlCGk7gJ6tJXy4-Cw&usqp=CAU', 'Lyon', 6 ),
    ('CG Evga GTX4080Ti', 'Superbe carte graphique', 1, 1049, '2023-9-1', '2023-9-1', 'https://media.topachat.com/media/s1000/630de00d033120593446ae0a.webp', 'Nantes', 1 ),
    ('T-shirt noir', 'Superbe T-shirt noir', 2, 18, '2023-9-1', '2023-9-1', 'https://www.monproduitdecom.com/images/produits/tshirt-10409.jpg', 'Bordeaux', 2 ),
    ('Terre et mer Tome2', 'Superbe livre', 2, 8, '2023-9-1', '2023-9-1', 'https://m.media-amazon.com/images/I/91vOYLA7beL._SL1500_.jpg', 'Lyon', 3 ),
    ('Table basse INCONNUE', 'Superbe table basse', 2, 254, '2023-9-1', '2023-9-1', 'https://m.media-amazon.com/images/I/41vM9+epqJL._AC_SL1500_.jpg', 'Nantes',  4),
    ('Maison de mer', 'Superbe maison', 2, 985000, '2023-9-1', '2023-9-1', 'https://i.f1g.fr/media/eidos/805x604_crop/2020/04/27/XVM6fdd6896-8650-11ea-bef4-6835ce68601a-805x604.jpg', 'Bordeaux', 5 ),
    ('Peugeot 307 2015', 'Superbe voiture', 2, 8500, '2023-9-1', '2023-9-1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqSpgKAUecjumNfdUNFlCGk7gJ6tJXy4-Cw&usqp=CAU', 'Lyon', 6 ),
    ('CG Evga GTX9080Ti', 'Superbe carte graphique', 2, 1680, '2023-9-1', '2023-9-1', 'https://media.topachat.com/media/s1000/630de00d033120593446ae0a.webp', 'Nantes', 1 ),
    ('T-shirt treillis', 'Superbe T-shirt treillis', 2, 22, '2023-9-1', '2023-9-1', 'https://www.monproduitdecom.com/images/produits/tshirt-10409.jpg', 'Bordeaux', 2 );

DELETE FROM Ad;

SELECT * FROM Ad WHERE location='Nantes';