CREATE DATABASE test;

use test;

CREATE TABLE items(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    photo TEXT,
    description TEXT,
    shortDescription TEXT,
	PRIMARY KEY ( id )
);


--CREATE RECORDS


INSERT INTO items(title, photo, description, shortDescription) values
	(
		'SPIDERMAN NO WAY HOME',
		'1.png',
		'With Spider-Mans identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
		'Action/Adventure'
    ),
    (
		'SCREAM',
		'2.png',
		'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the towns deadly past.',
		'Horror, Suspense/Thriller'
    ),
    (
		'REDEEMING LOVE',
		'3.png',
		'Redeeming Love is the highly anticipated film based on the bestselling novel by Francine Rivers that tells the powerful story of relentless love and perseverance as a young couple’s relationship clashes with the harsh realities of the California Gold Rush of 1850.',
		'Drama,  Romance'
    ),
    (
		'THE KINGS DAUGHTER',
		'4.png',
		'King Louis XIVs (Brosnan) quest for immortality leads him to capture a mermaids (Fan) life force, but his immovable will is challenged when his long-hidden illegitimate daughter (Scodelario) forms a bond with the magical creature.',
		'Friday, Jan 21, 2022'
    ),
    (
		'AMERICAN UNDERDOG',
		'5.png',
		'American Underdog tells the inspirational true story of Kurt Warner (Zachary Levi), who went from a stockboy at a grocery store to a two-time NFL MVP, Super Bowl champion, and Hall of Fame quarterback. The film centers on Warner’s unique story and years of challenges and setbacks that could have derailed his aspirations to become an NFL player – but just when his dreams seemed all but out of reach, it is only with the support of his wife, Brenda (Anna Paquin) and the encouragement of his family, coaches, and teammates that Warner perseveres and finds the strength to show the world the champion that he already is. American Underdog is an uplifting story that demonstrates that anything is possible when you have faith, family and determination.',
		'Drama'
    );

