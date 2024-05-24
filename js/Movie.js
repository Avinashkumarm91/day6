// Q -A
class movie { 


    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("LEO", "Lyca Productions", "PG10");
console.log(movieDetails);

// Q -B

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Thunivu","Zee studios");
console.log(movie1);


// Q-C
class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("LEO", "Lyca Productions", "PG");
let moviee2 = new Moviee("Varisu", "Avinash Productions", "S");
let movie3 = new Moviee("Love", "MR Prodcutions", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-12");

let movieArray = [moviee1, moviee2, movie3, movie4];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies);

//Q -D

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
}
        
let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);

