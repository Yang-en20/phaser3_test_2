// import 'phaser';
import Phaser from "phaser"
import GameScene from './scene/GameScene'
import LoadingScene from "./scene/loadingScene"
import throwKnifeScene from "./scene/throwKnifeScene"
import fuckPlaneScene from "./scene/fuckPlaneScene"
import tileMapScene from "./scene/tileMapScene"

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.AUTO,
    pixelArt: true,
    roundPixels: true,
    parent: 'phaser-example',
    title: 'tileMap test',
    width: 800,
    height: 600,
    // width: window.innerWidth,
    // height: window.innerHeight,
    fps: 60,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: true // 调试开启 arcade sprite 会有边框提示
        }
    },

    scene: [
        // LoadingScene,
        // GameScene,
        // fuckPlaneScene,
        // throwKnifeScene,
        tileMapScene,

    ]
};

const game = new Phaser.Game(config);


// window.onresize = function () {
//     game.renderer.resize(window.innerWidth, window.innerHeight)
// 适配移动端,触发resize
//     game.events.emit('resize')
// }

