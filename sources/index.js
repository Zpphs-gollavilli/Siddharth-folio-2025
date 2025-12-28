import './threejs-override.js'
import { Game } from './Game/Game.js'
import * as THREE from 'three/webgpu'

console.log(THREE.REVISION)

if(import.meta.env.VITE_GAME_PUBLIC)
    window.game = new Game()
else
    new Game()

// let i = 0
// window.setInterval(() =>
// {
//     // Insert
//     window.game.server.send({
//         type: 'whispersInsert',
//         message: `test ${i}`,
//         countryCode: 'fr',
//         x: 42.5,
//         y: 1,
//         z: 38.5
//     })

//     i++
// }, 1000)
