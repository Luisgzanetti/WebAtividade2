import type Potion from "./../interfaces/PotionInterface.ts";

const API_BASE_URL = 'http://localhost:3000/api';

export async function getPotions() {
    const response = await fetch(`${API_BASE_URL}/potions`);
    const data = await response.json();

    const potions: Potion[] = [];

    for (const potion of data) {
        potions.push({
            name: potion.name,
            description: potion.description,
            photo: potion.photo,
            price: potion.price,
        });
    };

    return potions;
}

