import type Potion from "./../interfaces/PotionInterface.ts";

const API_BASE_URL = 'http://localhost:3000/api';

export async function getPotions() {
    const response = await fetch(`${API_BASE_URL}/potions`);
    const data = await response.json();

    const potions: Potion[] = [];

    for (const potion of data) {
        potions.push({
            id: potion.id,
            name: potion.name,
            description: potion.description,
            photo: potion.photo,
            price: potion.price,
        });
    };

    return potions;
}

export async function addPotion({ name, description, photo, price }: Omit<Potion, 'id'>) {
    const response = await fetch(`${API_BASE_URL}/potions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, photo, price }),
    });

    return response;
}

export async function editPotion(potion: Potion) {
    const response = await fetch(`${API_BASE_URL}/potions/${potion.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(potion)
    })

    return response;
}

export async function deletePotion(potion: Potion) {
    const response = await fetch(`${API_BASE_URL}/potions/${potion.id}`, {
        method: 'DELETE',
    })

    return response;
}