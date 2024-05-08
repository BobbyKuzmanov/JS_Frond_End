function wildWest(actions) {
    let n = parseInt(actions[0]);
    let posse = {};

    for (let i = 1; i <= n; i++) {
        let parts = actions[i].split(' ');
        let name = parts[0];
        let hp = parseInt(parts[1]);
        let bullets = parseInt(parts[2]);
        posse[name] = {
            hp: hp,
            bullets: bullets
        };
    }

    const MAX_BULLETS = 6;
    const MAX_HP = 100;

    for (let i = n + 1; i < actions.length; i++) {
        let command = actions[i];
        if (command === "Ride Off Into Sunset") {
            break;
        }

        let parts = command.split(' - ');
        let action = parts[0];

        switch (action) {
            case "FireShot": {
                let charName = parts[1];
                let target = parts[2];
                if (posse[charName].bullets > 0) {
                    posse[charName].bullets--;
                    console.log(`${charName} has successfully hit ${target} and now has ${posse[charName].bullets} bullets!`);
                } else {
                    console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            }

            case "TakeHit": {
                let charName = parts[1];
                let damage = parseInt(parts[2]);
                let attacker = parts[3];
                posse[charName].hp -= damage;
                if (posse[charName].hp > 0) {
                    console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${posse[charName].hp} HP!`);
                } else {
                    console.log(`${charName} was gunned down by ${attacker}!`);
                    delete posse[charName];
                }
                break;
            }

            case "Reload": {
                let charName = parts[1];
                let bulletsToReload = MAX_BULLETS - posse[charName].bullets;
                if (bulletsToReload > 0) {
                    posse[charName].bullets = MAX_BULLETS;
                    console.log(`${charName} reloaded ${bulletsToReload} bullets!`);
                } else {
                    console.log(`${charName}'s pistol is fully loaded!`);
                }
                break;
            }

            case "PatchUp": {
                let charName = parts[1];
                let amount = parseInt(parts[2]);
                if (posse[charName].hp < MAX_HP) {
                    let originalHP = posse[charName].hp;
                    posse[charName].hp = Math.min(MAX_HP, posse[charName].hp + amount);
                    let recoveredHP = posse[charName].hp - originalHP;
                    console.log(`${charName} patched up and recovered ${recoveredHP} HP!`);
                } else {
                    console.log(`${charName} is in full health!`);
                }
                break;
            }
        }
    }

    Object.keys(posse).sort().forEach(charName => {
        console.log(`${charName}\n  HP: ${posse[charName].hp}\n  Bullets: ${posse[charName].bullets}`);
    });
}

// Example use case
wildWest(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"
]);

console.log("-------------------");

wildWest(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"

]);

console.log("-------------------");


wildWest([
    "2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"
]);
