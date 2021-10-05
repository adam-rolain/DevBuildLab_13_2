interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];

const findNameOfTallestMountain = (mountains: Mountain[]): Mountain => {
    let tallestMountain = mountains[0];
    mountains.forEach(mountain => { 
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain;
};

let tallestMountain: Mountain = findNameOfTallestMountain(mountains);

console.log(tallestMountain);