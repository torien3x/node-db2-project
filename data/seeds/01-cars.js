// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 250000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 550000,
        title: 'salvage',
    },
    {
        vin: '1111111111111',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean',
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}

