


export const TAGS = {
    MARVEL: {
      name: "Marvel",
      logo: '/Marvel.svg',
      class: "-mb-5 -mt-10"
    },
    DC: {
      name: "DC",
      logo: '/DC.svg',
      class: "-mt-4"
    },
  };


  export const superheroes = [
    {
        id: 5,
        name: 'Wolverine',
        alterEgo: 'James Howlett',
        description: "Wolverine, a Marvel Comics character created by writer Len Wein and artist John Romita Sr., is one of the most popular and enduring members of the X-Men. Born as James Howlett in the 19th century, Wolverine is a mutant with a regenerative healing factor, retractable adamantium claws, and heightened senses. With a gruff demeanor and a troubled past, he struggles with his animalistic instincts while fighting for justice and protecting mutants and humans alike. Wolverine's iconic berserker rage, combined with his sense of honor and loyalty, make him a formidable and complex anti-hero within the Marvel Universe, earning him a devoted fanbase and a lasting legacy.",
        firstApparence: 'The Incredible Hulk #180',
        image: '/Marvel/Wolverine.webp',
        comic: [TAGS.MARVEL]
    },
    {
        id: 16,
        name: 'Robin/Nightwing',
        alterEgo: 'Dick Grayson',
        description: "Robin and Nightwing are iconic characters in the DC Comics universe, both intimately tied to Batman's legacy. Robin, originally known as Dick Grayson, brings youthful energy and acrobatic prowess to his role as Batman's loyal sidekick, embodying hope and optimism in Gotham's shadows. Transitioning into Nightwing, Grayson evolves into a mature and independent hero, carving his own path while still upholding the values instilled by his mentor. Nightwing's journey symbolizes growth, resilience, and the enduring legacy of Batman's influence, showcasing the transformative power of heroism within the DC Universe.",
        firstApparence: 'Detective Comics #38',
        image: '/DC/NightWing.webp',
        comic: [TAGS.DC]
    },
    {
        id: 2,
        name: 'Captain America',
        alterEgo: 'Steve Rogers',
        description: "Captain America, created by Joe Simon and Jack Kirby, is a quintessential Marvel superhero. Steve Rogers, a frail young man transformed by a super-soldier serum during World War II, becomes the patriotic symbol known as Captain America. Armed with his shield, he fights for justice, freedom, and the American way. A symbol of heroism and unwavering determination, Captain America embodies the ideals of bravery, honor, and sacrifice.",
        firstApparence: 'Captain America Comics #1',
        image: '/Marvel/CaptainAmerica.webp',
        comic: [TAGS.MARVEL]
    },
    {
        id: 6,
        name: 'Hulk',
        alterEgo: 'Bruce Banner',
        description: "Hulk, a Marvel Comics character created by Stan Lee and Jack Kirby, is the alter ego of Dr. Bruce Banner. Banner, exposed to gamma radiation, transforms into the Hulk, a colossal, green-skinned behemoth with immense strength and durability. While often misunderstood as a destructive force, Hulk is a hero, battling both villains and his own inner turmoil. His stories delve into themes of power, identity, and the struggle for control. Hulk's iconic catchphrase, 'Hulk smash!', encapsulates his raw power and primal nature, making him one of Marvel's most iconic and enduring characters.",
        firstApparence: 'The Incredible Hulk #1',
        image: '/Marvel/Hulk.webp',
        comic: [TAGS.MARVEL]
    },
    {
        id: 14,
        name: 'Green Arrow',
        alterEgo: 'Oliver Queen',
        description: "Green Arrow, a DC Comics character created by Mort Weisinger and George Papp, is the alter ego of billionaire playboy Oliver Queen. Inspired by the legendary archer Robin Hood, Queen takes up vigilantism to fight crime in Star City. Armed with his bow and arrow, along with his keen intellect and combat skills, Green Arrow battles injustice and corruption. Despite his lack of superpowers, he stands alongside other heroes as a member of the Justice League. Green Arrow is characterized by his strong sense of social justice, often championing the rights of the underprivileged and marginalized. His stories explore themes of redemption, loyalty, and the power of individual determination in the face of adversity.",
        firstApparence: 'More Fun Comics #73',
        image: '/DC/GreenArrow.webp',
        comic: [TAGS.DC]
    },
    {
        id: 1,
        name: 'Spider Man',
        alterEgo: 'Peter Parker',
        description: "Spider-Man, created by Stan Lee and Steve Ditko, is Marvel's iconic superhero. High school student Peter Parker gains superpowers after a radioactive spider bite, fighting crime in New York City with agility and strength while balancing personal struggles.",
        firstApparence: 'Amazing Fantasy #15',
        image: '/Marvel/SpiderMan.webp',
        comic: [TAGS.MARVEL]
    },
    {
        id: 13,
        name: 'Flash',
        alterEgo: 'Jay Garrick',
        description: "Flash, a DC Comics character created by writer Gardner Fox and artist Harry Lampert, is the alter ego of several individuals who have possessed the Speed Force. The most iconic among them is Barry Allen, a forensic scientist who gains superhuman speed after a lightning strike and a chemical accident. As the Scarlet Speedster, he fights crime in Central City alongside other speedsters like Wally West and Jay Garrick. With his ability to move at incredible speeds, the Flash can outrun almost anything and vibrate through solid objects. His adventures often explore themes of heroism, responsibility, and the consequences of time travel. The Flash symbolizes the limitless potential of the human spirit and the pursuit of justice at lightning speed.",
        firstApparence: 'Flash Comics #1',
        image: '/DC/Flash.webp',
        comic: [TAGS.DC]
    },
    {
        id: 12,
        name: 'Superman',
        alterEgo: 'Kal-El',
        description: "Superman, a DC Comics character created by Jerry Siegel and Joe Shuster, is one of the most iconic superheroes of all time. Born as Kal-El on the alien planet Krypton, he is sent to Earth and raised as Clark Kent by adoptive parents in Smallville, Kansas. Possessing superhuman abilities like incredible strength, speed, and flight, Superman fights for truth, justice, and the American way. As the Man of Steel, he protects Metropolis from various threats, including his arch-nemesis, Lex Luthor. Superman's unwavering moral code, indomitable spirit, and commitment to helping others have made him a symbol of hope and inspiration across the globe.",
        firstApparence: 'Action Comics #1',
        image: '/DC/SuperMan.webp',
        comic: [TAGS.DC]
    },
    {
        id: 15,
        name: 'Wonder Woman',
        alterEgo: 'Princess Diana',
        description: "Wonder Woman, a DC Comics character created by William Moulton Marston and artist Harry G. Peter, is a powerful Amazonian princess and one of DC's most iconic superheroes. Born Diana, Princess of Themyscira, she is raised on the hidden island of Themyscira, home to the Amazons, a race of warrior women. Gifted with superhuman strength, speed, and agility, as well as an array of magical weapons and abilities, Wonder Woman ventures into the world of man to fight for peace, justice, and equality. As an ambassador of her people, she upholds her values while confronting adversaries like Ares, the God of War, and the villainous Cheetah. Wonder Woman's unwavering compassion, courage, and sense of duty make her a symbol of empowerment for people everywhere, embodying the ideals of female strength and resilience.",
        firstApparence: 'All Star Comics #8',
        image: '/DC/wonderwoman.webp',
        comic: [TAGS.DC]
    },
    {
        id: 4,
        name: 'Thor',
        alterEgo: 'Thor Odinson',
        description: "Thor, a Marvel Comics character created by Stan Lee, Larry Lieber, and Jack Kirby, is the Norse God of Thunder. As the son of Odin, ruler of Asgard, Thor wields the enchanted hammer Mjolnir, which grants him incredible power. He defends the Nine Realms from evil forces and is a founding member of the Avengers. With his godlike strength and noble demeanor, Thor embodies courage and honor. His adventures often explore themes of heroism, redemption, and the clash between myth and modernity.",
        firstApparence: 'Journey into Myster #83',
        image: '/Marvel/Thor.jpeg',
        comic: [TAGS.MARVEL]
    },
    {
        id: 3,
        name: 'Iron Man',
        alterEgo: 'Tony Stark',
        description: "Iron Man, a Marvel Comics creation by Stan Lee, Larry Lieber, Don Heck, and Jack Kirby, is the alter ego of billionaire inventor Tony Stark. After being captured and building a suit of armor to escape, Stark becomes the armored superhero, Iron Man. With his genius intellect and technologically advanced suits, Iron Man fights villains and protects the world from threats. Stark's character is defined by his wit, charisma, and struggle with his own humanity, making him one of Marvel's most complex and enduring heroes.",
        firstApparence: 'Tales of Suspense #39',
        image: '/Marvel/IronMan.webp',
        comic: [TAGS.MARVEL]
    },
    {
        id: 11,
        name: 'Batman',
        alterEgo: 'Bruce Wayne',
        description: "Batman, a DC Comics character created by Bob Kane and Bill Finger, is the alter ego of billionaire Bruce Wayne. Witnessing his parents' murder as a child, Wayne dedicates his life to fighting crime in Gotham City. Without superpowers, Batman relies on his intellect, physical prowess, and an arsenal of gadgets to combat evil. His dark, brooding persona and iconic bat-themed costume strike fear into the hearts of criminals. Batman's rogues gallery, including the Joker, Catwoman, and Two-Face, test his resolve as he strives to uphold justice and protect the innocent. With a sense of duty and determination, Batman has become a symbol of resilience and heroism, transcending comic books to become a cultural icon.",
        firstApparence: 'Detective Comics #27',
        image: '/DC/Batman.webp',
        comic: [TAGS.DC]
    },
];
