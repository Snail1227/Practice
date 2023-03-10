const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
};

shoes.size = '10';

// for (let i = 0; i < shoes.length; i++){
//     console.log(shoes[i]);
// }

shoes.forEach((shoe) => {
    if (shoe === 'Supra') {
        continue;
    }
    console.log(shoe);
})

