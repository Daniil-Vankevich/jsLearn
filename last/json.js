const Liuba = {
	name: "Liuba",
	surname: "Zubkova",
	age: 15,
	gender: "women",
	relationship: true,
}

console.log(Liuba);

const objLiuba = JSON.stringify(Liuba);

console.log(objLiuba);

const parseLiuba = JSON.parse(objLiuba);

console.log(parseLiuba);